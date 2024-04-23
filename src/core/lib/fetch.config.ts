import { Res } from "@/data/types/res.type";
import { BASE_URL } from "@/data/utils/environments";
import { cookies } from "next/headers";

type Props<T> = {
  baseUrl?: string;
  endpoint: string;
  urlencoded?: boolean;
  data?: unknown;
  config?: RequestInit;
};

export default async function fetchInstance<T>({
  baseUrl = BASE_URL!,
  urlencoded = false,
  endpoint,
  data,
  config,
}: Props<T>): Promise<Res<T>> {
  //   const token = cookies().get("token")?.value;
  const lang = cookies().get("lang")?.value ?? "az";

  const headers = new Headers({
    "Content-Type": "application/json",
    Lang: lang,
    ...config?.headers,
  });

  //   if (token) {
  //     headers.append("Authorization", `Bearer ${token}`);
  //   }

  const fetchUrl = baseUrl + endpoint;
  const body = data
    ? urlencoded
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
    if (res.ok) {
      try {
        const result: T = await res.json();
        return { data: result, isError: false };
      } catch (error) {
        return { data: {} as T, isError: false };
      }
    }
    const errorMessage = await res.text();
    console.error(
      `${method} ${endpoint} responded with status: ${res.status} with message: ${errorMessage}`
    );
    return {
      isError: true,
      error: {
        message: errorMessage,
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
      return {
        isError: true,
        error: {
          message: error.message,
          status: 500,
        },
      };
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
}
