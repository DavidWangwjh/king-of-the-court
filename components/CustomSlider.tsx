import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from './Container'
import { StyledText } from './StyledText'
import Slider from '@react-native-community/slider'
import Colors from '@/constants/Colors'
import { BASE_ATTRIBUTE_POINTS } from '@/constants/Attributes'
import { user } from '@/constants/TestUser'
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
        <Container style={styles.sliderItem} direction='column'>
            <Container style={{width: '100%'}} justify='space-between'>
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
                lowerLimit={BASE_ATTRIBUTE_POINTS[user.starterBuild][attributeKey]}
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