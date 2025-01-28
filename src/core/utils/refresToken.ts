// import { cookies } from "next/headers";
// import type { NextResponse } from "next/server";

// export const getRefreshToken = () => {
//     const allCookies = cookies().getAll();
//     const refreshTokens: string[] = [];

//     allCookies.forEach((cookie) => {
//         const { name, value } = cookie;
//         if (name.startsWith("refresh_token")) {
//             refreshTokens.push(decodeURIComponent(value));
//         }
//     });

//     return refreshTokens.length ? refreshTokens.join("") : null;
// };

// export const setRefreshToken = (refresh_token: string) => {
//     const chunks = refresh_token.match(/.{1,4000}/g);
//     chunks
//         ? chunks.forEach((ch, i) =>
//             cookies().set(
//                 `refresh_token${chunks.length > 1 && i !== 0 ? i : ""}`,
//                 ch
//             )
//         )
//         : null;
// };

// export const deleteRefreshToken = (response?: NextResponse<unknown>) => {
//     const allCookies = response ? response.cookies.getAll() : cookies().getAll();

//     allCookies.forEach((cookie) => {
//         const { name } = cookie;
//         if (name.startsWith("refresh_token")) {
//             response
//                 ? response.cookies.delete(name)
//                 : cookies().set(name, "", { maxAge: -1 });
//         }
//     });
// };
