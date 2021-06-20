import {useAuth} from "../../hooks/useAuth";
import React from "react";
import {GridItem, Heading, Text} from "@chakra-ui/react"
import UseCaseForm from "./UseCaseForm";
import UseCaseList from "./UseCaseList";

const Dashboard = () => {
    const {user} = useAuth();

    return (
        <>
            <UseCaseForm/>
            <UseCaseList/>
        </>
    )
};

export default Dashboard;
