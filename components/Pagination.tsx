import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Build } from '@/constants/Attributes'
import Animated, { Extrapolation, SharedValue, interpolate, useAnimatedStyle } from 'react-native-reanimated'
import Container from './Container'
import Colors from '@/constants/Colors'

const { width } = Dimensions.get('screen')

type PaginationProps = {
    builds: Build[],
    paginationIndex: number,
    scrollX: SharedValue<number>
}

const Pagination = (props: PaginationProps) => {

    const { builds, paginationIndex, scrollX } = props;
    return (
        <Container direction='row'>
            {
                builds.map((_, index) => {
                    const pgAnimationStyle = useAnimatedStyle(() => {
                        const dotWidth = interpolate(
                            scrollX.value,
                            [(index-1)*width, index*width, (index+1)*width],
                            [8, 20, 8],
                            Extrapolation.CLAMP
                        )
                        return { width: dotWidth }
                    });
                    return (
                        <Animated.View key={index} style={[styles.dot, pgAnimationStyle, {backgroundColor: paginationIndex === index? Colors.primaryOrange : Colors.white}]} />
                    )
                })
            }
        </Container>
    )
}

export default Pagination

const styles = StyleSheet.create({
    dot: {
        width: 8,
        height: 8,
        marginHorizontal: 2,
        borderRadius: 4
    }
})