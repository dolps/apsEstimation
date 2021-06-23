import {fireStore, useAuth} from "../../hooks/useAuth";
import React from "react";
import {GridItem} from "@chakra-ui/react"
import CreationForm from "../shared/CreationForm";


const UseCaseForm = ({projectId}) => {
    const {user} = useAuth();
    const usecasesRef = fireStore.collection(`projects/${projectId}/usecases`);
    const projectsRef = fireStore.collection(`projects`).doc(projectId);

    const onSubmit = async (data) => {
        await fireStore.runTransaction((transaction) => {
            return transaction.get(projectsRef).then((res) => {
                if (!res.exists) {
                    throw "Document does not exist!";
                }
                let newNumberOfUseCases = res.data().numberOfUseCases + 1;
                transaction.update(projectsRef, {
                    numberOfUseCases: newNumberOfUseCases
                });
            }).then(async () => {
                await usecasesRef.add({
                    title: data.input,
                    projectId: projectId,
                    createdBy: user.email,
                    developmentTime: 0,
                    insecurityGrade: 1
                });
            })
        });

    };

    return (
        <GridItem
            colStart={[1, null, null, null, null, null]}
            colSpan={[3, null, null, null, null, null]}
        >
            <CreationForm submission={onSubmit}
                          placeholder="As a user I want to create a new userStory"
                          submitBtnTxt="Create userStory"
            />
        </GridItem>
    )
};

export default UseCaseForm
