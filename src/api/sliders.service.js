import http from "./http";

const lang = localStorage.getItem("lang") || "ru";

export const BannersService = {
  getBanners: async () => {
    const response = await http.get(`/api/sliders?lang=${lang}&site=true`);
    return response.data;
  },
  getBannerById: async (id) => {
    const response = await http.get(`/api/sliders/${id}?lang=${lang}`);
    return response.data;
  }
};

export default BannersService;