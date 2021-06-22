import React from "react";
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    HStack,
    Text
} from "@chakra-ui/react"

const EstimationSlider = ({title, value, setValue}) => {

    const sliderThumbValue = (value) => {
        return value + "%"
    };

    // todo maybe change
    return (<HStack>
        <Text pr={6} minW={20} textAlign="left">{title}</Text>
        <Slider aria-label="slider-ex-5"
                value={value}
                flex="1" focusThumbOnChange={false}
                onChange={val => setValue(val)}
                //onChangeEnd={postValue}
                children="hello"
        >
            <SliderTrack>
                <SliderFilledTrack/>
            </SliderTrack>
            <SliderThumb color="red.500" fontSize="sm" boxSize="32px"
                         children={sliderThumbValue(value)}/>
        </Slider>
    </HStack>)
};

export default EstimationSlider;
