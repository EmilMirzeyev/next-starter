export const endpoints = {
  posts: (query: string = "") => `/posts${query}`,
  post: (id: number) => `/posts/${id}`,
};
