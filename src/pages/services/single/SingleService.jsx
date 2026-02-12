import { useParams } from "react-router-dom";
import Title from "./Title";
import { useEffect, useState } from "react";
import hyzmatService from '../../../api/hyzmat.service'
import Content from "./Content";

const SingleService = () => {
    const {id} = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchService = async () => {
            try {
                const data = await hyzmatService.getServiceById(id);
                setService(data);
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchService();
    }, [id]);
    if (loading) return <div>Loading...</div>;
    if (error || !service) return <div>Project not found</div>;
    return(
        <>
        <Title service={service} />
        <Content service={service} />
        </>
    );
};
export default SingleService;