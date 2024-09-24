import { View, Text, StyleSheet, FlatList, Dimensions, ViewToken } from 'react-native'
import React, { useRef, useState } from 'react'
import Container from '@/components/Container'
import { StyledText } from '@/components/StyledText'
import Colors from '@/constants/Colors'
import ActionButton from '@/components/ActionButton'
import { STARTER_BUILDS, Build } from '@/constants/Attributes'
import Animated, { Extrapolation, SharedValue, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import Pagination from '@/components/Pagination'
import { router } from 'expo-router'

const { width } = Dimensions.get('screen')

type listItemProps = {
    build: Build,
    index: number,
    scrollX: SharedValue<number>
}

const ListItem = (props: listItemProps) => {
    const { build, index, scrollX } = props;

    const rnAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: interpolate(
                        scrollX.value,
                        [(index-1)*width, index*width, (index+1)*width],
                        [-width*0.2, 0, width*0.2],
                        Extrapolation.CLAMP
                    ),
                },
                {
                    scale: interpolate(
                        scrollX.value,
                        [(index-1)*width, index*width, (index+1)*width],
                        [0.925, 1, 0.925],
                        Extrapolation.CLAMP
                    )
                },
            ]
        }
    })

    return (
        <Animated.View style={[styles.listItemContainer, rnAnimatedStyle]}>
            <Container style={styles.buildInfoContainer} bgColor={Colors.primaryOrange}>
                <Container style={styles.buildTitleContainer} direction='row' bgColor={Colors.darkOrange}>
                    <StyledText size={22} weight={5}>{build.name}</StyledText>
                </Container>
                <StyledText size={20} weight={4}>Offense</StyledText>
                <Container style={{width: '100%'}} justify='space-between' direction='row'>
                    <StyledText size={16}>Three-Point Shot</StyledText>
                    <StyledText size={16}>{build.attributes.threePointShot}</StyledText>
                </Container>
                <Container style={{width: '100%'}} justify='space-between' direction='row'>
                    <StyledText size={16}>Mid-Range Shot</StyledText>
                    <StyledText size={16}>{build.attributes.midRangeShot}</StyledText>
                </Container>
                <Container style={{width: '100%'}} justify='space-between' direction='row'>
                    <StyledText size={16}>Close Shot</StyledText>
                    <StyledText size={16}>{build.attributes.closeShot}</StyledText>
                </Container>
                <Container style={{width: '100%'}} justify='space-between' direction='row'>
                    <StyledText size={16}>Layup</StyledText>
                    <StyledText size={16}>{build.attributes.layup}</StyledText>
                </Container>
                <Container style={{width: '100%'}} justify='space-between' direction='row'>
                    <StyledText size={16}>Ball Handle</StyledText>
                    <StyledText size={16}>{build.attributes.ballHandle}</StyledText>
                </Container>
                <StyledText>Defense</StyledText>
                <Container style={{width: '100%'}} justify='space-between' direction='row'>
                    <StyledText size={16}>Interior Defense</StyledText>
                    <StyledText size={16}>{build.attributes.interiorDefense}</StyledText>
                </Container>
                <Container style={{width: '100%'}} justify='space-between' direction='row'>
                    <StyledText size={16}>Perimeter Defense</StyledText>
                    <StyledText size={16}>{build.attributes.perimeterDefense}</StyledText>
                </Container>
                <Container style={{width: '100%'}} justify='space-between' direction='row'>
                    <StyledText size={16}>Steal</StyledText>
                    <StyledText size={16}>{build.attributes.steal}</StyledText>
                </Container>
                <Container style={{width: '100%'}} justify='space-between' direction='row'>
                    <StyledText size={16}>Block</StyledText>
                    <StyledText size={16}>{build.attributes.block}</StyledText>
                </Container>
                <StyledText>Athleticism</StyledText>
                <Container style={{width: '100%'}} justify='space-between' direction='row'>
                    <StyledText size={16}>Speed</StyledText>
                    <StyledText size={16}>{build.attributes.speed}</StyledText>
                </Container>
                <Container style={{width: '100%'}} justify='space-between' direction='row'>
                    <StyledText size={16}>Strength</StyledText>
                    <StyledText size={16}>{build.attributes.strength}</StyledText>
                </Container>
                <Container style={{width: '100%'}} justify='space-between' direction='row'>
                    <StyledText size={16}>Stamina</StyledText>
                    <StyledText size={16}>{build.attributes.stamina}</StyledText>
                </Container>
            </Container>
        </Animated.View>
    )
}


const SelectBuildScreen = () => {

    const scrollX = useSharedValue(0);
    const [paginationIndex, setPaginationIndex] = useState(0);

    const onScrollHandler = useAnimatedScrollHandler({
        onScroll: (e) => {
            scrollX.value = e.contentOffset.x;
        }
    })

    const viewabilityConfig = {
        itemVisiblePercentThreshold: 50
    }

    const onViewableItemsChanged = ({viewableItems}: {viewableItems: ViewToken[]}) => {
        if (viewableItems[0].index !== undefined && viewableItems[0].index !== null) {
            setPaginationIndex(viewableItems[0].index);
        } 
    }

    const viewabilityConfigCallbackPairs = useRef([
        {viewabilityConfig, onViewableItemsChanged}
    ])

    const goToHome = () => {
        router.replace('/(tabs)/HomeScreen')
    }

    return (
        <Container style={styles.screenContainer} bgColor={Colors.black} >
            <StyledText weight={4} size={26}>Select your Starter Build</StyledText>
            <Container direction='row'>
                <Animated.FlatList 
                    data={STARTER_BUILDS} 
                    renderItem={({ item, index }) => <ListItem build={item} index={index} scrollX={scrollX}/>}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    onScroll={onScrollHandler}
                    viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
                />
            </Container>
            <Pagination builds={STARTER_BUILDS} paginationIndex={paginationIndex} scrollX={scrollX}/>
            <ActionButton text='select' action={goToHome}/>
        </Container>
    )
}

export default SelectBuildScreen

const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      gap: 20
    },
    listItemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
    },
    buildTitleContainer: {
        width: '120%', 
        paddingVertical: 5, 
        borderRadius: 10, 
        borderBottomWidth: 2, 
        borderColor: Colors.white
    },
    buildInfoContainer: {
        width: '70%',
        paddingBottom: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        gap: 5,
    }
})