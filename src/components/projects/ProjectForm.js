import {fireStore, useAuth} from "../../hooks/useAuth";
import React, {useState} from "react";
import {GridItem, FormControl, Input, Button, Alert, AlertIcon} from "@chakra-ui/react"
import {useForm} from "react-hook-form";

const ProjectForm = () => {
    const {user} = useAuth();
    const newProjectsRef = fireStore.collection(`/projects`);
    const {handleSubmit, register, setError, formState: {errors, isSubmitting}} = useForm();


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
        try {
            console.log("submitting: " + JSON.stringify(data));
            await newProjectsRef.add({
                title: data.input,
                numberOfUseCases: 0,
                hoursOfWork: 0
            }).then((result) => {
                joinProject(result.id).then(() => {
                    console.log('joined project');
                })
            })
        } catch (error) {
            setError('input', {
                type: 'manual',
                message: error.message
            })
        }
    };

    return (
        <GridItem
            colStart={[1, null, null, 1, null, null]}
            colSpan={[3, null, null, 3, null, null]}
            p={6}
            pt={12}
        >
            {errors?.input && (<Alert status="error" variant="subtle" mt={6} mb={6}>
                <AlertIcon/>
                {errors.input.message}
            </Alert>)}
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                    <Input name="input"
                           placeholder="Aps Estimation App Project"  {...register("input", {})}
                           type="text"/>
                </FormControl>
                <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">Create project</Button>
            </form>
        </GridItem>
    )

};

export default ProjectForm
