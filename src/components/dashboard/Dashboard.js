import React from "react";
import {useParams} from "react-router-dom"
import UseCaseForm from "./UseCaseForm";
import UseCaseList from "./UseCaseList";
import EstimationAddon from "./EstimationAddonCard";
import {EstimationContextProvider} from "../../context/EstimationContext";

const Dashboard = () => {
    const {id} = useParams();

    return (
        <EstimationContextProvider>
            <EstimationAddon/>
            <UseCaseForm projectId={id}/>
            <UseCaseList projectId={id}/>
        </EstimationContextProvider>
    )
};

export default Dashboard;
