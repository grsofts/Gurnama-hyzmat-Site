import { useParams } from "react-router-dom";
import Title from "./Title";
import { useEffect, useState } from "react";
import projectService from '../../../api/project.service'
import Content from "./Content";

const SingleProject = () => {
    const {id} = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const data = await projectService.getProjectById(id);
                setProject(data);
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [id]);
    if (loading) return <div>Loading...</div>;
    if (error || !project) return <div>Project not found</div>;
    return(
        <>
        <Title project={project} />
        <Content project={project} />
        </>
    );
};
export default SingleProject;