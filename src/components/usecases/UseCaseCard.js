import React, {useState, useContext} from "react";
import {
    Box,
    Text,
    Stack,
    IconButton,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    InputLeftAddon,
    InputGroup,
    Select
} from "@chakra-ui/react";

import {MdDelete} from "react-icons/md";
import {fireStore} from "../../hooks/useAuth";
import {EstimationContext} from "../../context/EstimationContext";
import {calculateBest,calculateWorst,calculateMostLikely,calculateExpected} from "../service/UseCaseService"

function UseCaseCard(props) {
    const estimationContext = useContext(EstimationContext);
    const {usecase, id, title, onRemove} = props;
    const collection = fireStore.collection(`projects/${usecase.projectId}/usecases`);
    const format = (val) => val + `h`;
    const parse = (val) => val.replace(/^h/, "");

    const [developmentTime, setDevelopmentTime] = useState(usecase.developmentTime);
    const [insecurityGrade, setInsecurityGrade] = useState(usecase.insecurityGrade);

    const onDevelopmentTimeChange = async (time) => {
        setDevelopmentTime(time);
        await collection.doc(id).update('developmentTime', time);
    };

    const onInsecurityGradeChange = async (event) => {
        setInsecurityGrade(event.target.value);
        await collection.doc(id).update('insecurityGrade', event.target.value);
    };

    return (
        <Box
            p={4}
            display={{md: "flex"}}
            borderBottomWidth={1}
            mb={2}
        >
            <IconButton
                position="relative" top={-3} left={-3}
                onClick={(e) => onRemove(e, id)}
                variant="ghost"
                colorScheme="teal"
                aria-label="delete"
                icon={<MdDelete/>}
            />
            <Stack
                align={{base: "center", md: "stretch"}}
                textAlign={{base: "center", md: "left"}}
                ml={{md: 6}}
            >
                <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="lg"
                    letterSpacing="wide"
                    color="teal.600"

                >
                    {title}

                </Text>
                <InputGroup>
                    <InputLeftAddon fontWeight="semibold" children="Development time"/>
                    <NumberInput
                        onChange={(valueString) => onDevelopmentTimeChange(parse(valueString), id)}
                        value={format(developmentTime)}
                        step={0.5}
                        precision={1}
                        size="md"
                        min={0}>
                        <NumberInputField/>
                        <NumberInputStepper>
                            <NumberIncrementStepper/>
                            <NumberDecrementStepper/>
                        </NumberInputStepper>
                    </NumberInput>
                </InputGroup>
                <Select
                    value={insecurityGrade}
                    onChange={(value) => onInsecurityGradeChange(value)}
                    size="md"
                    variant="filled"
                    pb="3"
                >
                    <option value={1}>Low Risk</option>
                    <option value={2}>Medium Risk</option>
                    <option value={3}>High Risk</option>
                </Select>
            </Stack>
            <Stack
                textAlign={{base: "right", md: "right"}}
                mt={{base: 4, md: 0}}
                ml={{md: 6}}
            >
                <Text
                    align="right"
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="sm"
                    letterSpacing="wide"
                    color="teal.600"

                >
                    calculated completion times:
                </Text>
                <Text my={2} color="gray.500">
                    best:{calculateBest(developmentTime,estimationContext)}h
                </Text>
                <Text my={2} color="gray.500">
                    most likely:{calculateMostLikely(developmentTime,estimationContext,usecase.insecurityGrade)}h
                </Text>
                <Text my={2} color="gray.500">
                    expected: {calculateExpected(developmentTime,estimationContext,usecase.insecurityGrade)}h
                </Text>
                <Text my={2} color="gray.500">
                    worst: {calculateWorst(developmentTime,estimationContext,usecase.insecurityGrade)}h
                </Text>
            </Stack>
        </Box>
    );
}

export default UseCaseCard;
