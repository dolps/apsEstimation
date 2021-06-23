import React from "react";
import {
    Box,
    Text,
    Link,
    Stack,
    IconButton
} from "@chakra-ui/react";

import {MdDelete} from "react-icons/md";
import {Link as ReachLink} from "react-router-dom";

function ProjectCard(props) {
    const {id, title, summary, longLine, remove} = props;

    return (
        <Box
            p={4}
            display={{md: "flex"}}
            maxWidth="32rem"
            borderWidth={1}
            margin={2}
        >
            <IconButton
                onClick={(event) => remove(event, id)}
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
                <Link
                    as={ReachLink}
                    to={{pathname: '/projects/' + id + '/usecases'}}
                    my={1}
                    display="block"
                    fontSize="md"
                    lineHeight="normal"
                    fontWeight="semibold"
                >
                    {summary}
                </Link>
                {/*
                <Text my={2} color="gray.500">
                    {longLine}
                </Text>
                    */}
            </Stack>
        </Box>
    );
}

export default ProjectCard;
