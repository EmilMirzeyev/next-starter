import { Res } from "@/data/types/res.type";
import { ZodType } from "zod";

type ValidatorType<T> = {
  endpoint: string;
  schema: ZodType<any>;
  response: T;
};

export const validator = <T>({
  endpoint,
  schema,
  response,
}: ValidatorType<T>): Res<T> => {
  const validatedDTO = schema.safeParse(response);
  if (!validatedDTO.success) {
    console.error(endpoint, validatedDTO.error);
    return {
      isError: true,
      error: {
        message: "Məlumatda xəta var",
        status: 500,
      },
    };
  } else {
    return { data: validatedDTO.data, isError: false };
  }
};


