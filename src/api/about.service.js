import http from "./http";

const lang = localStorage.getItem("lang") || "ru";

export const AboutService = {
  getAboutInfo: async () => {
    const response = await http.get(`/api/about?lang=${lang}&site=true`);
    return response.data;
  },
};

export default AboutService;