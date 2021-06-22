import {fireStore, useAuth} from "../../hooks/useAuth";
import React from "react";
import {GridItem} from "@chakra-ui/react"

import CreationForm from "../shared/CreationForm";

const ProjectForm = () => {
    const {user} = useAuth();
    const newProjectsRef = fireStore.collection(`/projects`);

    const joinProject = async (projectId) => {
        console.log('joining');
        const userProjectsRef = fireStore.doc(`users/${user.uid}/projects/${projectId}`);
        const projectUsersRef = fireStore.doc(`projects/${projectId}/users/${user.uid}`);

        const batch = fireStore.batch();
        batch.set(userProjectsRef, {});
        batch.set(projectUsersRef, {});
        await batch.commit();
    };

    const onSubmit = async (data) => {
        await newProjectsRef.add({
            title: data.input,
            numberOfUseCases: 0,
            hoursOfWork: 0
        }).then((result) => {
            joinProject(result.id).then(() => {
                console.log('joined project');
            })
        })

    };

    return (
        <GridItem
            colStart={[1, null, null, null, null, null]}
            colSpan={[3, null, null, null, null, null]}
            p={6}
        >
            <CreationForm submission={onSubmit}
                          placeholder="APS Estimation App Project"
                          submitBtnTxt="Create project"
            />
        </GridItem>
    )

};

export default ProjectForm
