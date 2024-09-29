import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from './Container'
import { StyledText } from './StyledText'
import Slider from '@react-native-community/slider'
import Colors from '@/constants/Colors'
import { STARTER_BUILD_BASE_ATTRIBUTES, MAX_ATTRIBUTE_POINTS } from '@/constants/Attributes'
import { MAX_TENDENCIES } from '@/constants/Tendencies' 
import { user } from '@/constants/TestData'
import { AttributeKeys } from '@/constants/Types'

type CustomSliderProps = {
    type: 'attribute' | 'tendency'
    label: string,
    attributeKey: AttributeKeys,
    value: number,
    onValueChange: (val: number) => void,
    total: number,
}

const CustomSlider = (props: CustomSliderProps) => {

    const { type, label, attributeKey, value, onValueChange, total } = props;

    return (
        <Container style={styles.sliderContainer} >
            <Container style={{width: '100%'}}  direction='row' justify='space-between'>
            <StyledText size={16}>{label}</StyledText>
            <StyledText size={16}>{value}</StyledText>
            </Container>
            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={100}
                step={5}
                value={value}
                onValueChange={onValueChange}
                minimumTrackTintColor={Colors.primaryOrange}
                thumbTintColor={Colors.primaryOrange}
                lowerLimit={type === 'attribute'? STARTER_BUILD_BASE_ATTRIBUTES[user.starterBuild][attributeKey] : 0}
                upperLimit={type === 'attribute'? Math.min(value + MAX_ATTRIBUTE_POINTS - total, 100) :  Math.min(value + MAX_TENDENCIES - total, 100)}
            />
        </Container>
    )
}

export default CustomSlider

const styles = StyleSheet.create({
    sliderContainer: {
        width: '100%',
    },
    slider: {
        width: '100%'
    },
})