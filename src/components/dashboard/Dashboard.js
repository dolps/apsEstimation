import {useAuth} from "../../hooks/useAuth";
import React, {useEffect} from "react";
import {useParams} from "react-router-dom"
import UseCaseForm from "./UseCaseForm";
import UseCaseList from "./UseCaseList";
import Projects from "../projects/Projects";

const Dashboard = () => {
    const {user} = useAuth();
    const {id} = useParams();

    useEffect(() => {
        console.log("match: " + JSON.stringify(id));
    });

    return (
        <>
            <UseCaseForm/>
            <UseCaseList/>
        </>
    )
};

export default Dashboard;
