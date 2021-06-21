import React, {useState} from "react";
import {
    Box,
    Text,
    Link,
    Stack,
    IconButton,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    HStack,
    InputLeftAddon,
    InputGroup,
    Select
} from "@chakra-ui/react";

import {MdDelete} from "react-icons/md";
import {Link as ReachLink} from "react-router-dom";

function UseCaseCard(props) {
    const {id, title, summary, longLine, onRemove} = props;
    const format = (val) => val + `h`
    const parse = (val) => val.replace(/^\h/, "")

    const [developmentTime, setDevelopmentTime] = useState("0.0");

    return (
        <Box
            p={4}
            display={{md: "flex"}}
            borderWidth={1}
            margin={2}
        >
            <IconButton
                onClick={(e) => onRemove(e, id)}
                variant="ghost"
                colorScheme="teal"
                aria-label="delete"
                icon={<MdDelete/>}
            />
            <Stack
                align={{base: "center", md: "stretch"}}
                textAlign={{base: "center", md: "left"}}
                mt={{base: 4, md: 0}}
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
                        onChange={(valueString) => setDevelopmentTime(parse(valueString))}
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
                <Select placeholder="Select option" size="md" variant="filled" pb="3">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </Select>
                <Stack>
                    <Text
                        fontWeight="bold"
                        textTransform="uppercase"
                        fontSize="sm"
                        letterSpacing="wide"
                        color="teal.600"

                    >
                        calculated completion times:
                    </Text>
                    <Text my={2} color="gray.500">
                        expected: {longLine}h
                    </Text>
                    <Text my={2} color="gray.500">
                        best:{longLine}h
                    </Text>
                    <Text my={2} color="gray.500">
                        worst: {longLine}h
                    </Text>
                </Stack>
            </Stack>
        </Box>
    );
}

export default UseCaseCard;
