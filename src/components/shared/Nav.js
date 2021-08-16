import {useAuth} from "../../hooks/useAuth";
import React from "react";
import {GridItem, Flex, Text, Box} from "@chakra-ui/react"
import {Link} from "react-router-dom";
import {ColorModeSwitcher} from "./ColorModeSwitcher";
import {Githublink} from "./Githublink";

const Nav = () => {
    const {user, signOut} = useAuth();
    return (
        <GridItem colStart={1} colSpan={3} p={3}>
            <Flex>
                {user && (
                    <>
                        <Link to='/projects'>
                            <Text fontSize="md" mr={8}>Projects</Text>
                        </Link>
                        <Box as="button" onClick={signOut}>
                            <Text fontSize="md" mr={8}>Logout</Text>
                        </Box>
                    </>
                )}
                {!user && (
                    <>
                        <Text fontSize="md" mr={8}>apsEstimation</Text>
                        {
                            /*
                                <Link to='/login'>
                            <Text fontSize="md" mr={8}>Login</Text>
                        </Link>
                            */
                        }

                    </>
                )}
            </Flex>
            <Githublink position="absolute" top={7} right={12}></Githublink>
            <ColorModeSwitcher position="absolute" top={7} right={3}></ColorModeSwitcher>
        </GridItem>
    )
};

export default Nav
