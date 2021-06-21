import {List, ListItem, ListIcon, GridItem, Divider} from "@chakra-ui/react"
import {MdCheckCircle, MdSettings} from "react-icons/md";
import React, {useState} from "react";
import {fireStore} from "../../hooks/useAuth";
import {useCollectionData} from "react-firebase-hooks/firestore";
import UseCaseCard from "./UseCaseCard";

const UseCaseList = ({projectId}) => {
    const collection = fireStore.collection(`usecases`);
    const usecasesRef = collection.where('projectId', '==', projectId);
    const [usecases] = useCollectionData(usecasesRef, {idField: "id"});

    const onRemove = (e, useCaseId) => {
        collection.doc(useCaseId).delete();
    };

    return (
        <>
            <GridItem
                colStart={[1, null, null, null, null, null]}
                colSpan={[4, null, null, null, null, null]}
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
                                         onRemove={onRemove}
                                         developmentTime={data.developmentTime}
                                         insecurityGrade={data.insecurityGrade}
                                         usecase={data}
                    />)
                })}
            </GridItem>
        </>
    )
};

export default UseCaseList
