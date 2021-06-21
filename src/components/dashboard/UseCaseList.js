import {List, ListItem, ListIcon, GridItem, Divider} from "@chakra-ui/react"
import {MdCheckCircle, MdSettings} from "react-icons/md";
import React from "react";
import {fireStore} from "../../hooks/useAuth";
import {useCollectionData} from "react-firebase-hooks/firestore";
import UseCaseCard from "./UseCaseCard";

const UseCaseList = ({projectId}) => {
    const collection = fireStore.collection(`usecases`);
    const usecasesRef = collection.where('projectId', '==', projectId);
    const [usecases] = useCollectionData(usecasesRef, {idField: "id"});

    const onRemove = (e,useCaseId) => {
        collection.doc(useCaseId).delete();
    };

    return (
        <>
            <GridItem
                colStart={[1, null, null, null, null, null]}
                colSpan={[3, null, null, null, null, null]}
                p={6}
                pt={12}
            >
                {usecases && usecases.map((data) => {
                    console.log('data: ' + JSON.stringify(data));
                    return (<UseCaseCard key={data.id}
                                         id={data.id}
                                         title={data.title}
                                         summary={data.developmentTime}
                                         longLine={data.developmentTime}
                                         onRemove={onRemove}/>)
                })}
            </GridItem>
        </>
    )
};

export default UseCaseList

{/*
        <GridItem
            colStart={[1, null, null, 1, null, null]}
            colSpan={[3, null, null, 3, null, null]}
            p={6}
            pt={12}
        >
           {
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

            <ListItem>
                <ListIcon as={MdSettings} color="green.500"/>
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
        </List>


            </GridItem>
        */
}
