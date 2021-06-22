import React from "react";
import {useParams} from "react-router-dom"
import UseCaseForm from "./UseCaseForm";
import UseCaseList from "./UseCaseList";
import EstimationAddon from "./EstimationAddonCard";
import {EstimationContextProvider} from "../../context/EstimationContext";

const UseCases = () => {
    const {projectId} = useParams();

    return (
        <EstimationContextProvider>
            <EstimationAddon/>
            <UseCaseForm projectId={projectId}/>
            <UseCaseList projectId={projectId}/>
        </EstimationContextProvider>
    )
};

export default UseCases;
