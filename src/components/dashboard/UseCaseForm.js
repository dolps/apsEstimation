import {useAuth} from "../../hooks/useAuth";
import React from "react";
import {GridItem, Heading, FormControl, FormLabel, Input, Button, Alert, AlertIcon} from "@chakra-ui/react"
import {useForm} from "react-hook-form";

const UseCaseForm = () => {
    const {handleSubmit, register, setError, formState: {errors, isSubmitting, isSubmitSuccessful}} = useForm();

    const {sendSigninLink} = useAuth();

    const onSubmit = async (data) => {
        console.log("submitting: " + JSON.stringify(data));
        try {
            await sendSigninLink(data.email)
        } catch (error) {
            setError('email', {
                type: 'manual',
                message: error.message
            })
        }
    };

    return (
        <GridItem
            colStart={[1, null, null, 2, null, null]}
            colSpan={[3, null, null, 1, null, null]}
            p={6}
            pt={12}
        >
            {errors?.email && (<Alert status="error" variant="subtle" mt={6} mb={6}>
                <AlertIcon/>
                {errors.email.message}
            </Alert>)}
            {isSubmitSuccessful && (<Alert status="success" variant="subtle" mt={6} mb={6}>
                <AlertIcon/>
                Check your email to complete login
            </Alert>)}
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                    <Input id="email" name="email"
                           placeholder="As a user I want to create a new userStory"  {...register("email", {})}
                           type="text"/>
                </FormControl>
                <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">Create userStory</Button>
            </form>
        </GridItem>
    )

};

export default UseCaseForm
