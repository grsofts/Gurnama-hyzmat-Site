import http from "./http";

const lang = localStorage.getItem("lang") || "tm";

export const PartnerService = {
  getPartners: async () => {
    const response = await http.get(`/api/partners?lang=${lang}`);
    return response.data;
  },
  getPartnerById: async (id) => {
    const response = await http.get(`/api/partners/${id}?lang=${lang}`);
    return response.data;
  }
};

export default PartnerService;