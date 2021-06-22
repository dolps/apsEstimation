import React, {useContext} from "react";
import {GridItem} from "@chakra-ui/react"

import {EstimationContext} from "../../context/EstimationContext";
import EstimationSlider from "./EstimationSlider";

const EstimationAddon = () => {
    const context = useContext(EstimationContext);

    return (
        <>
            <GridItem
                colStart={[1, null, null, null, null, null]}
                colSpan={[1, null, null, null, null, null]}
                p={6}
            >
                <EstimationSlider title="design" value={context.designAddon} setValue={context.setDesignAddon}/>
                <EstimationSlider title="test" value={context.testAddon} setValue={context.setTestAddon}/>
                <EstimationSlider title="mgmt" value={context.MGMTAddon} setValue={context.setMGMTAddon}/>
            </GridItem>
        </>)
};

export default EstimationAddon;
