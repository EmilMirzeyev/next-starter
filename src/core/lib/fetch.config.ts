import type { Res } from "@/data/types/res.type";
import { BASE_URL } from "@/data/utils/environments";
import { cookies } from "next/headers";
import languageInstance from "./languageSingleton";
import { redirect } from "next/navigation";
// import { getRefreshToken } from "../utils/refresToken";

type FetchInstanceType = {
  baseUrl?: string;
  endpoint: string;
  data?: unknown;
  config?: RequestInit;
};

export default async function fetchInstance<T>({
  baseUrl = BASE_URL!,
  endpoint,
  data,
  config,
}: FetchInstanceType): Promise<Res<T>> {
  const token = (await cookies()).get("token")?.value;
  // const refreshToken = getRefreshToken();
  const headers = new Headers({
    // "Content-Type": "application/json",
    Lang: languageInstance.getLang(),
    ...config?.headers,
  });

  if (token) {
    headers.append("Authorization", `Bearer ${token}`);
  }
  const isFormData = data instanceof FormData;
  if (!isFormData) {
    headers.append("Content-Type", "application/json");
  }
  const urlencoded =
    config?.headers?.["Content-Type" as keyof HeadersInit] ===
    "application/x-www-form-urlencoded";
  const fetchUrl = baseUrl + endpoint;
  const body = data
    ? urlencoded || isFormData 
      ? (data as string)
      : JSON.stringify(data)
    : undefined;
  const method: RequestInit["method"] = config?.method ?? "GET";
  const reqInit = {
    ...config,
    headers,
    method,
    body,
  };

  try {
    const res = await fetch(fetchUrl, reqInit);
    if (res.status === 401) {
      throw new Error(res.status.toString());
    }
    if (res.ok) {
      try {
        const result: T = await res.json();
        return { data: result, isError: false };
      } catch (error) {
        console.log('error', error)
        return { data: null as T, isError: false };
      }
    }

    const errorMessage = await res.text();
    console.error(
      `${method} ${endpoint} responded with status: ${res.status} with message: ${errorMessage}`
    );

    return {
      isError: true,
      error: {
        message: JSON.parse(errorMessage).Detail,
        status: res.status,
      },
    };
  } catch (error: unknown) {
    if (typeof error === "string") {
      console.error(`${method} ${endpoint} responded with message: ${error}`);
      return {
        isError: true,
        error: {
          message: error,
          status: 500,
        },
      };
    } else if (error instanceof Error) {
      console.error(
        `${method} ${endpoint} responded with message: ${error.message}`
      );
      if (error.message !== "401") {
        return {
          isError: true,
          error: {
            message: error.message,
            status: 500,
          },
        };
      }
    } else {
      console.error(`${method} ${endpoint} error!`);
      return {
        isError: true,
        error: {
          message: "Server error",
          status: 500,
        },
      };
    }
  }

  redirect("/api/connect");
}
