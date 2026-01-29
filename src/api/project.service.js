import http from "./http";

const lang = localStorage.getItem("lang") || "tm";

export const ProjectService = {
  getProjects: async () => {
    const response = await http.get(`/api/projects?lang=${lang}`);
    return response.data;
  },
  getProjectById: async (id) => {
    const response = await http.get(`/api/projects/${id}?lang=${lang}`);
    return response.data;
  }
};

export default ProjectService;