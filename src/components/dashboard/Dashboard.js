import {useAuth} from "../../hooks/useAuth";
import React, {useEffect} from "react";
import {useParams} from "react-router-dom"
import UseCaseForm from "./UseCaseForm";
import UseCaseList from "./UseCaseList";
import Projects from "../projects/Projects";
import EstimationAddon from "./EstimationAddonCard";

const Dashboard = () => {
    const {user} = useAuth();
    const {id} = useParams();

    useEffect(() => {
        console.log("match: " + JSON.stringify(id));
    });

    return (
        <>
            <EstimationAddon/>
            <UseCaseForm projectId={id}/>
            <UseCaseList projectId={id}/>
        </>
    )
};

export default Dashboard;
