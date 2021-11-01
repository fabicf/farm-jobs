import { Axios, AxiosResponse } from 'axios';
import React from 'react';
import api from "../api";

const JobList = () => {
    const [jobs, setJobs] = React.useState<any[] | undefined>(undefined);
    const [loading, setLoading] = React.useState(true);
    const [err, setErr] = React.useState<Error>();

    React.useEffect(() => {
        api.get("/jobs")
        .then((response: AxiosResponse<any[]>) => {
            setJobs(response.data);
            setLoading(false);
        })
        .catch((err)=>{
            setErr(err);
            setLoading(false);
        });  
        
    }, []);

    if (loading) return <div>Loading</div>
    if (err) return <div>{JSON.stringify(err)}</div>

    return (
        <div>
            {JSON.stringify(jobs)}
        </div>
    )
}

export default JobList
