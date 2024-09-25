import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from './Container'
import { StyledText } from './StyledText'
import Slider from '@react-native-community/slider'
import Colors from '@/constants/Colors'
import { STARTER_BUILD_BASE_ATTRIBUTES } from '@/constants/Attributes'
import { user } from '@/constants/TestData'
import { AttributeKeys } from '@/constants/Types'

type CustomSliderProps = {
    label: string,
    attributeKey: AttributeKeys,
    value: number,
    onValueChange: (val: number) => void,
    upperLimit: number,
}

const CustomSlider = (props: CustomSliderProps) => {

    const {label, attributeKey, value, onValueChange, upperLimit} = props;

    return (
        <Container style={styles.sliderItem} >
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
                lowerLimit={STARTER_BUILD_BASE_ATTRIBUTES[user.starterBuild][attributeKey]}
                upperLimit={upperLimit}
            />
        </Container>
    )
}

export default CustomSlider

const styles = StyleSheet.create({
    sliderItem: {
        marginBottom: 10,
    },
    slider: {
        width: '100%'
    },
})