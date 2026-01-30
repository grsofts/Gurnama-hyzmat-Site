import http from "./http";

export const ContactService = {
  getContacts: async () => {
    const response = await http.get(`/api/contacts`);
    return response.data;
  },
};

export default ContactService;