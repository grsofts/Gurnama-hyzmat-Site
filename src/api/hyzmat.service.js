import http from "./http";

const lang = localStorage.getItem("lang") || "tm";

export const HyzmatService = {
  getServices: async () => {
    const response = await http.get(`/api/services?lang=${lang}`);
    return response.data;
  },
  getServiceById: async (id) => {
    const response = await http.get(`/api/services/${id}?lang=${lang}`);
    return response.data;
  }
};

export default HyzmatService;