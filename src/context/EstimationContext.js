import React, {createContext, useState} from 'react'

export const EstimationContext = createContext(null);

export const EstimationContextProvider = props => {
    const [designAddon, setDesignAddon] = useState(0);
    const [testAddon, setTestAddon] = useState(0);
    const [MGMTAddon, setMGMTAddon] = useState(0);

    return (
        <EstimationContext.Provider
            value={{
                designAddon, setDesignAddon,
                testAddon, setTestAddon,
                MGMTAddon, setMGMTAddon
            }}>
            {props.children}
        </EstimationContext.Provider>
    );
};
