import React from "react";
import {useForm} from "react-hook-form";
import {FormControl, Input, Button, Alert, AlertIcon} from "@chakra-ui/react"

const CreationForm = ({submission,placeholder,submitBtnTxt}) => {
    const {handleSubmit, register, setError, formState: {errors, isSubmitting}} = useForm();

    const onSubmit = async (data) => {
        try {
            submission(data);
        } catch (error) {
            setError('input', {
                type: 'manual',
                message: "firebaseError: ".concat(error.message)
            })
        }
    };

    return(
        <>
            {errors?.input && (<Alert status="error" variant="subtle" mt={6} mb={6}>
                <AlertIcon/>
                {errors.input.message}
            </Alert>)}
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                    <Input name="input"
                           fontSize="sm"
                           placeholder={placeholder}  {...register("input", {})}
                           type="text"/>
                </FormControl>
                <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">{submitBtnTxt}</Button>
            </form>
        </>
    )
};

export default CreationForm;
