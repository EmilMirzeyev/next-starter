export const endpoints = {
  posts: (query: string = "") => `/posts${query}`,
  post: (id: number) => `/posts/${id}`,
  user: {
    getUsers: (query: string = "") => `/users${query}`,
    getUserById: (id: string) => `/users/${id}`,
    createUser: () => '/adduser',
    deleteUser: (id: number) => `/deleteUser/${id}`,
  }
};
