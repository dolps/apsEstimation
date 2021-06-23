import {GridItem} from "@chakra-ui/react"
import React from "react";
import {fireStore} from "../../hooks/useAuth";
import {useCollectionData} from "react-firebase-hooks/firestore";
import UseCaseCard from "./UseCaseCard";

const UseCaseList = ({projectId}) => {
    const useCaseCollection = fireStore.collection(`projects/${projectId}/usecases`);
    const projectsRef = fireStore.collection(`projects`).doc(projectId);
    const [usecases] = useCollectionData(useCaseCollection, {idField: "id"});

    const onRemove = async (e, useCaseId) => {
        await fireStore.runTransaction((transaction) => {
            return transaction.get(projectsRef).then((res) => {
                if (!res.exists) {
                    throw "Document does not exist!";
                }
                let newNumberOfUseCases = res.data().numberOfUseCases - 1;
                transaction.update(projectsRef, {
                    numberOfUseCases: newNumberOfUseCases
                });
            }).then(async () => {
                await useCaseCollection.doc(useCaseId).delete();
            })
        });
    };

    return (
        <GridItem
            colStart={[1, null, null, null, null, null]}
            colSpan={[4, null, null, null, null, null]}
            p={6}
            pt={12}
        >
            {usecases && usecases.map((data) => {
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
    )
};

export default UseCaseList
