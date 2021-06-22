import React, {useEffect, useState} from "react";
import {fireStore, useAuth} from "../../hooks/useAuth";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Card from "../dashboard/Card";
import ProjectForm from "./ProjectForm";


const Projects = () => {
    const {user} = useAuth();
    const attendingProjectsRef = fireStore.collection(`users/${user.uid}/projects`);

    const [attendingProjects] = useCollectionData(attendingProjectsRef, {idField: "id"});

    const [newProjects, setNewProjects] = useState([]);

    const fetchProjects = async () => {
        const projectIds = await attendingProjectsRef.get();

        const projectDocs = await Promise.all(
            projectIds.docs.map(doc => fireStore.doc(`projects/${doc.id}`).get())
        );

        return projectDocs.filter(doc => doc.exists).map(doc => ({id: doc.id, ...doc.data()}));
    };

    useEffect(() => {
        console.log('jaja');
        fetchProjects().then((res) => {
            setNewProjects(res);
        })
    }, [attendingProjects]);

    const unattendProject = async (event, projectId) => {
        const userProjectRef = fireStore.doc(`users/${user.uid}/projects/${projectId}`);
        const projectUserRef = fireStore.doc(`projects/${projectId}/users/${user.uid}`);

        const batch = fireStore.batch();
        batch.delete(userProjectRef);
        batch.delete(projectUserRef);

        await batch.commit();
    };

    return (
        <>
            <ProjectForm/>
            {
                newProjects && newProjects.map(function (data) {
                    const {id, title, numberOfUseCases, hoursOfWork} = data;
                    const summary = numberOfUseCases.toString().concat(" useCases");
                    const longLine = hoursOfWork.toString().concat(" hours of work");
                    return (
                        <Card
                            key={id}
                            id={id}
                            title={title}
                            summary={summary}
                            longLine={longLine}
                            remove={unattendProject}
                        />
                    );
                })
            }
        </>

    )
};

export default Projects
