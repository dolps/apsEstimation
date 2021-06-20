import {useAuth} from "../../hooks/useAuth";
import React from "react";
import {GridItem, Heading, FormControl, FormLabel, Input, Button, Alert, AlertIcon} from "@chakra-ui/react"
import {useForm} from "react-hook-form";
import {useHistory, useLocation} from "react-router-dom"

const ConfirmForm = () => {
    const {handleSubmit, register, setError, formState} = useForm();

    const {signinWithEmailLink} = useAuth();

    const history = useHistory();
    const location = useLocation();

    const onSubmit = async (data) => {
        console.log("submitting: " + JSON.stringify(data));
        try {
            await signinWithEmailLink(data.email, location.search)
            history.push('/')
        } catch (error) {
            setError('email', {
                type: 'manual',
                message: error.message
            })
        }
    }

    return (
        <GridItem
            colStart={[1, null, null, 2, null, null]}
            colSpan={[3, null, null, 1, null, null]}
            p={6}
        >
            <Heading as="h1" mb={6}>Confirm Email</Heading>
            {formState.isSubmitted && !formState.isValid && (<Alert status="error" variant="subtle" mt={6} mb={6}>
                <AlertIcon/>
                something wrong happened
            </Alert>)}
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input name="email" placeholder="Email"  {...register("email", {
                        pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
                    })} type="text"/>
                </FormControl>
                <Button mt={4} colorScheme="teal" isLoading={formState.isSubmitting} type="submit">Submit</Button>
            </form>
        </GridItem>
    )

};

export default ConfirmForm
