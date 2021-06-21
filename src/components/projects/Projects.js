import React, {useEffect, useState} from "react";
import {fireStore, useAuth} from "../../hooks/useAuth";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {GridItem, Grid, Box, Stack, Text, Link} from "@chakra-ui/react"
import Card from "../dashboard/Card";
import ProjectForm from "./ProjectForm";


const Projects = () => {
    const {user} = useAuth();
    const [project, setProject] = useState("");
    const projectsRef = fireStore.collection(`users/${user.uid}/projects`);
    const [projects] = useCollectionData(projectsRef, {idField: "id"});

    const remove = (event, id) => {
        console.log('removing item ' + id);
        projectsRef.doc(id).delete();
    };

    return (
        <>
            <ProjectForm/>
            {
                projects && projects.map(function (data) {
                    const {id, title, numberOfUseCases, hoursOfWork} = data;
                    const summary = numberOfUseCases.toString().concat(" useCases");
                    const longLine = hoursOfWork.toString().concat(" hours of work");
                    return (
                        <Card
                            key={id}
                            id={id}
                            title={title}
                            summary={summary}
                            longLine={longLine}
                            remove={remove}
                        />
                    );
                })
            }
        </>

    )
};

export default Projects
