import React, {useState} from "react";
import {GridItem, Text, Box, VStack} from "@chakra-ui/react"
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    HStack
} from "@chakra-ui/react"
import {MdGraphicEq} from "react-icons/md";

const EstimationAddon = () => {
    const [value, setValue] = useState(0);

    const postValue = () => {

    };
    const sliderThumbValue = (value) => {
        return value + "%"
    };

    return (
        <>
            <GridItem
                colStart={[1, null, null, null, null, null]}
                colSpan={[1, null, null, null, null, null]}
                p={6}
            >
                <HStack>
                    <Text pr={6} minW={20} textAlign="left">design</Text>
                    <Slider aria-label="slider-ex-5"
                            value={value}
                            flex="1" focusThumbOnChange={false}
                            onChange={val => setValue(val)}
                            onChangeEnd={postValue}
                            children="hello"
                    >
                        <SliderTrack>
                            <SliderFilledTrack/>
                        </SliderTrack>
                        <SliderThumb color="red.500" fontSize="sm" boxSize="32px"
                                     children={sliderThumbValue(value)}/>
                    </Slider>
                </HStack>
                <HStack pt={2}
                >
                    <Text pr={6} minW={20} textAlign="left">test</Text>
                    <Slider
                        aria-label="slider-ex-5"
                        value={value}
                        flex="1" focusThumbOnChange={false}
                        onChange={val => setValue(val)}
                        onChangeEnd={postValue}
                        children="hello"
                    >
                        <SliderTrack>
                            <SliderFilledTrack/>
                        </SliderTrack>
                        <SliderThumb color="red.500" fontSize="sm" boxSize="32px"
                                     children={sliderThumbValue(value)}/>
                    </Slider>
                </HStack>
                <HStack pt={2}>
                    <Text pr={6} minW={20} textAlign="left">mgmt</Text>
                    <Slider aria-label="slider-ex-5"
                            value={value}
                            flex="1" focusThumbOnChange={false}
                            onChange={val => setValue(val)}
                            onChangeEnd={postValue}
                            children="hello"
                    >
                        <SliderTrack>
                            <SliderFilledTrack/>
                        </SliderTrack>
                        <SliderThumb color="red.500" fontSize="sm" boxSize="32px"
                                     children={sliderThumbValue(value)}/>
                    </Slider>
                </HStack>
            </GridItem>
        </>)
};

export default EstimationAddon;
