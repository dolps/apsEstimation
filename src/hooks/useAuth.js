import firebase from 'firebase';
import React, {createContext, useContext, useEffect, useState} from "react";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FBAPIKEY,
    authDomain: "apsestimation.firebaseapp.com",
    projectId: "apsestimation",
    storageBucket: "apsestimation.appspot.com",
    messagingSenderId: "459958608823",
    appId: "1:459958608823:web:186ef3df67f46246073e32",
    measurementId: "G-RSYQBB5NLJ"
};
firebase.initializeApp(firebaseConfig);

export const fireStore = firebase.firestore(); // TODO cleanup

const AuthContext = createContext(null);

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticating, setAuthenticating] = useState(true);

    const sendSigninLink = email => {
        console.log('sending signinlink to: ' + email);
        return firebase.auth().sendSignInLinkToEmail(email, {
            url: process.env.REACT_APP_DOMAIN + '/confirm',
            handleCodeInApp: true
        }).then(() => {
            return true;
        });
    };

    const signinWithEmailLink = (email, code) => {
        return firebase.auth().signInWithEmailLink(email, code).then((res) => {
            setUser(res.user);
            return true;
        });
    };

    const signOut = () => firebase.auth().signOut().then(() => setUser(null));

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            setUser(user);
            setAuthenticating(false);
        });

        // cleanup subscription
        return () => unsubscribe();
    }, []);

    const values = {
        user,
        isAuthenticating,
        sendSigninLink,
        signinWithEmailLink,
        signOut
    };

    return (
        <AuthContext.Provider value={values}>
            {!isAuthenticating && children}
        </AuthContext.Provider>
    )
};
