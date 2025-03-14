export const endpoints = {
  posts: (query: string = "") => `/posts${query}`,
  post: (id: number) => `/posts/${id}`,
  user: {
    getUsers: (query: string = "") => `/users${query}`,
    getUserById: (id: string) => `/users/${id}`,
    createUser: () => "/adduser",
    deleteUser: (id: number) => `/deleteUser/${id}`,
  },
  general: {
    uploadMedia: () => "/media/store",
  },
  landing: {
    getPartners: () => "/partners",
  },
  auth: {
    signUpUser: () => "/auth/register",
  },
  car: {
    getCarFilters: () => "/car/options",
    getBrands: () => "/car/brands",
    getModels: (id: number) => `/car/brand/${id}/models`
  },
  announcement: {
    createAnnouncement: () => "/announcement/store",
    getAnnouncementById: (id: number) => `/announcement/show/${id}`,
    getSimilarAnnouncement: (id: number) => `/announcement/${id}/similar`,
    getAllAnnouncement: (query: string) => `/announcement/list${query}`
  },
  favorites: {
    getFavorites: () => "/user/favorites"
  }
};
