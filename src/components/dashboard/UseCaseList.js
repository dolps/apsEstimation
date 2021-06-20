import {List, ListItem, ListIcon, GridItem, Divider} from "@chakra-ui/react"
import {MdCheckCircle, MdSettings} from "react-icons/md";
import React from "react";

const UseCaseList = () => {

    return (
        <GridItem
            colStart={[1, null, null, 1, null, null]}
            colSpan={[3, null, null, 3, null, null]}
            p={6}
            pt={12}
        >
            <List spacing={3}>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500"/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    <p>test</p>
                    <p>test</p>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500"/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500"/>
                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
                <Divider/>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                    <ListIcon as={MdSettings} color="green.500"/>
                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
            </List>
        </GridItem>
    )
};

export default UseCaseList
