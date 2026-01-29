import http from "./http";

const lang = localStorage.getItem("lang") || "tm";

export const CertificateService = {
  getCertificates: async () => {
    const response = await http.get(`/api/certificates?lang=${lang}`);
    return response.data;
  },
  getCertificateById: async (id) => {
    const response = await http.get(`/api/certificates/${id}?lang=${lang}`);
    return response.data;
  }
};

export default CertificateService;