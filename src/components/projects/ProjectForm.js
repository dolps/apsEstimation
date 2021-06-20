import {fireStore, useAuth} from "../../hooks/useAuth";
import React, {useState} from "react";
import {GridItem, FormControl, Input, Button, Alert, AlertIcon} from "@chakra-ui/react"
import {useForm} from "react-hook-form";

const ProjectForm = () => {
    const [project, setProject] = useState("");
    const {user} = useAuth();
    const projectsRef = fireStore.collection(`users/${user.uid}/projects`);
    const {handleSubmit, register, setError, formState: {errors, isSubmitting, isSubmitSuccessful}} = useForm();

    const onSubmit = async (data) => {
        try {
            console.log("submitting: " + JSON.stringify(data));
            projectsRef.add({
                title: data.input,
                numberOfUseCases: 0,
                hoursOfWork: 0
            }).then((res) => {
                console.log('res:', JSON.stringify(res));
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
            {isSubmitSuccessful && (<Alert status="success" variant="subtle" mt={6} mb={6}>
                <AlertIcon/>
                Project created
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
