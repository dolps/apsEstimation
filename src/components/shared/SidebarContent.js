import {
    Box,
    Collapse,
    Flex,
    Icon,
    Text,
    useDisclosure,
    useColorModeValue,
} from "@chakra-ui/react";
import {FaClipboardCheck, FaRss, FaSignOutAlt} from "react-icons/fa";
import {AiFillGift} from "react-icons/ai";
import {BsGearFill} from "react-icons/bs";
import {HiCode, HiCollection} from "react-icons/hi";
import {MdHome, MdKeyboardArrowRight} from "react-icons/md";
import React from "react";
import {Logo} from "@choc-ui/logo";
import {NavItem} from "./NavItem";
import {Link} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";


export const SidebarContent = (props) => {
    const {signOut} = useAuth();
    // const integrations = useDisclosure(); todo?
    return (
        <Box
            as="nav"
            pos="fixed"
            top="0"
            left="0"
            zIndex="sticky"
            h="full"
            pb="10"
            overflowX="hidden"
            overflowY="auto"
            bg={useColorModeValue("white", "gray.800")}
            borderColor={useColorModeValue("inherit", "gray.700")}
            borderRightWidth="1px"
            w="60"
            {...props}
        >
            <Flex px="4" py="5" align="center">
                <Logo/>
                <Text
                    color={useColorModeValue("brand.500", "white")}
                    fontWeight="semibold"
                >
                    apsEstimation
                </Text>
            </Flex>
            <Flex
                direction="column"
                as="nav"
                fontSize="sm"
                color="gray.600"
                aria-label="Main Navigation"
            >
                <NavItem to='/projects' icon={HiCollection}>Projects</NavItem>
                <NavItem icon={BsGearFill}>Settings(todo)</NavItem>
                <NavItem to='#' onClick={signOut} icon={FaSignOutAlt}>Sign out</NavItem>
                {/*TODO
                <NavItem to='/projects'icon={FaClipboardCheck}>Checklists</NavItem>
                <NavItem to='#' icon={HiCode} onClick={integrations.onToggle}>
                    Integrations
                    <Icon
                        as={MdKeyboardArrowRight}
                        ml="auto"
                        transform={integrations.isOpen && "rotate(90deg)"}
                    />
                </NavItem>
                <Collapse in={integrations.isOpen}>
                    <NavItem pl="12" py="2">
                        Shopify
                    </NavItem>
                    <NavItem pl="12" py="2">
                        Slack
                    </NavItem>
                    <NavItem pl="12" py="2">
                        Zapier
                    </NavItem>
                </Collapse>
                <NavItem icon={AiFillGift}>Changelog</NavItem>
                <NavItem icon={BsGearFill}>Settings</NavItem>

                */}

            </Flex>
        </Box>
    );
};
