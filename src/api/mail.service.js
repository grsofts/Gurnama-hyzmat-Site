import http from "./http";

export const mailService = {
  sendMail: async (body) => {
    const response = await http.post(`/api/send_mail`, body);
    return response.data;
  }
};

export default mailService;