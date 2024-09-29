import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AttributeKeys, Attributes, Tendencies, TendencyKeys } from '@/constants/Types';
import { user } from '@/constants/TestData';
import Container from '@/components/Container';
import { StyledText } from '@/components/StyledText';
import Colors from '@/constants/Colors';
import { ATTRIBUTE_KEY, ATTRIBUTE_NAME, MAX_ATTRIBUTE_POINTS } from '@/constants/Attributes';
import { MAX_TENDENCIES } from '@/constants/Tendencies';
import CustomSlider from '@/components/CustomSlider';
import ActionButton from '@/components/ActionButton';
import TabScreenContainer from '@/components/TabScreenContainer';
import { TENDENCY_KEY, TENDENCY_NAME } from '@/constants/Tendencies';

const BuildScreen = () => {
  const [selectedTab, setSelectedTab] = useState('attributes'); // To handle tab switching

  const [totalAttributePoints, setTotalAttributePoints] = useState<number>(0);
  const [totalTendencyPoints, setTotalTendencyPoints] = useState<number>(100);

  const [attributes, setAttributes] = useState<Attributes>({
    threePointShot: 0,
    midRangeShot: 0,
    closeShot: 0,
    layup: 0,
    ballHandle: 0,
    interiorDefense: 0,
    perimeterDefense: 0,
    steal: 0,
    block: 0,
    speed: 0,
    strength: 0,
    stamina: 0,
  });

  const [tendencies, setTendencies] = useState<Tendencies>({
    threePointShot: 0,
    midRangeShot: 0,
    closeShot: 0,
    layup: 0,
  });

  // Use useEffect to update the state once the user is defined
  useEffect(() => {
    if (user) {
      setAttributes({
        threePointShot: user.attributes.threePointShot,
        midRangeShot: user.attributes.midRangeShot,
        closeShot: user.attributes.closeShot,
        layup: user.attributes.layup,
        ballHandle: user.attributes.ballHandle,
        interiorDefense: user.attributes.interiorDefense,
        perimeterDefense: user.attributes.perimeterDefense,
        steal: user.attributes.steal,
        block: user.attributes.block,
        speed: user.attributes.speed,
        strength: user.attributes.strength,
        stamina: user.attributes.stamina,
      });

      setTendencies({
        threePointShot: user.tendencies.threePointShot,
        midRangeShot: user.tendencies.midRangeShot,
        closeShot: user.tendencies.closeShot,
        layup: user.tendencies.layup,
      });
    }
  }, [user]);

  // Calculate the total attribute points when attributes change
  useEffect(() => {
    const totalPoints = Object.values(attributes).reduce((acc, value) => acc + value, 0);
    setTotalAttributePoints(totalPoints);
  }, [attributes]);

  // Calculate the total tendencies when tendencies change
  useEffect(() => {
    const totalPoints = Object.values(tendencies).reduce((acc, value) => acc + value, 0);
    setTotalTendencyPoints(totalPoints);
  }, [tendencies]);

  const handleAttributeChange = (key: AttributeKeys, value: number) => {
    setAttributes((prev) => ({ ...prev, [key]: value }));
  };

  // Function to handle tendency change and check if within max limit
  const handleTendencyChange = (key: TendencyKeys, value: number) => {
    setTendencies((prev) => ({ ...prev, [key]: value }));
  };

  const saveData = () => {
    
  }

  return (
    <TabScreenContainer style={styles.screenContainer}>
      {/* Top Tab Selector */}
      <Container style={styles.tabContainer} direction='row'>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'attributes' ? styles.activeTab : null]}
          onPress={() => setSelectedTab('attributes')}
        >
          <StyledText size={14} weight={5}>Attributes</StyledText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'tendencies' ? styles.activeTab : null]}
          onPress={() => setSelectedTab('tendencies')}
        >
          <StyledText size={14} weight={5}>Tendencies</StyledText>
        </TouchableOpacity>
      </Container>

      {/* Title */}
      <StyledText weight={5} size={30}>
        {selectedTab === 'attributes' ? user.starterBuild : 'Shot Tendencies'}
      </StyledText>

      {/* Subtitle */}
      <StyledText size={16}>
        {selectedTab === 'attributes'
          ? `Attributes Points Available: ${MAX_ATTRIBUTE_POINTS - totalAttributePoints}/${MAX_ATTRIBUTE_POINTS}`
          : `Tendencies Points Available: ${MAX_TENDENCIES - totalTendencyPoints}/${MAX_TENDENCIES}`}
      </StyledText>

      <Container style={styles.slidersContainer} justify='flex-start'>
        {selectedTab === 'attributes' ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            <Container style={styles.slidersSubContainer}>
              <StyledText weight={4} size={20}>Offense</StyledText>
              <CustomSlider type='attribute' label={ATTRIBUTE_NAME.THREE_POINT_SHOT} attributeKey={ATTRIBUTE_KEY.THREE_POINT_SHOT} value={attributes.threePointShot} onValueChange={(val: number) => handleAttributeChange(ATTRIBUTE_KEY.THREE_POINT_SHOT, val)} total={totalAttributePoints}/>
              <CustomSlider type='attribute' label={ATTRIBUTE_NAME.MID_RANGE_SHOT} attributeKey={ATTRIBUTE_KEY.MID_RANGE_SHOT} value={attributes.midRangeShot} onValueChange={(val: number) => handleAttributeChange(ATTRIBUTE_KEY.MID_RANGE_SHOT, val)} total={totalAttributePoints}/>
              <CustomSlider type='attribute' label={ATTRIBUTE_NAME.CLOSE_SHOT} attributeKey={ATTRIBUTE_KEY.CLOSE_SHOT} value={attributes.closeShot} onValueChange={(val: number) => handleAttributeChange(ATTRIBUTE_KEY.CLOSE_SHOT, val)} total={totalAttributePoints}/>
              <CustomSlider type='attribute' label={ATTRIBUTE_NAME.LAYUP} attributeKey={ATTRIBUTE_KEY.LAYUP} value={attributes.layup} onValueChange={(val: number) => handleAttributeChange(ATTRIBUTE_KEY.LAYUP, val)} total={totalAttributePoints}/>
              <CustomSlider type='attribute' label={ATTRIBUTE_NAME.BALL_HANDLE} attributeKey={ATTRIBUTE_KEY.BALL_HANDLE} value={attributes.ballHandle} onValueChange={(val: number) => handleAttributeChange(ATTRIBUTE_KEY.BALL_HANDLE, val)} total={totalAttributePoints}/>
            </Container>
            <Container style={styles.slidersSubContainer}>
              <StyledText weight={4} size={20}>Defense</StyledText>
              <CustomSlider type='attribute' label={ATTRIBUTE_NAME.INTERIOR_DEFENSE} attributeKey={ATTRIBUTE_KEY.INTERIOR_DEFENSE} value={attributes.interiorDefense} onValueChange={(val: number) => handleAttributeChange(ATTRIBUTE_KEY.INTERIOR_DEFENSE, val)} total={totalAttributePoints}/>
              <CustomSlider type='attribute' label={ATTRIBUTE_NAME.PERIMETER_DEFENSE} attributeKey={ATTRIBUTE_KEY.PERIMETER_DEFENSE} value={attributes.perimeterDefense} onValueChange={(val: number) => handleAttributeChange(ATTRIBUTE_KEY.PERIMETER_DEFENSE, val)} total={totalAttributePoints}/>
              <CustomSlider type='attribute' label={ATTRIBUTE_NAME.STEAL} attributeKey={ATTRIBUTE_KEY.STEAL} value={attributes.steal} onValueChange={(val: number) => handleAttributeChange(ATTRIBUTE_KEY.STEAL, val)} total={totalAttributePoints}/>
              <CustomSlider type='attribute' label={ATTRIBUTE_NAME.BLOCK} attributeKey={ATTRIBUTE_KEY.BLOCK} value={attributes.block} onValueChange={(val: number) => handleAttributeChange(ATTRIBUTE_KEY.BLOCK, val)} total={totalAttributePoints}/>
            </Container>
            <Container style={styles.slidersSubContainer}>
              <StyledText weight={4} size={20}>Athleticism</StyledText>
              <CustomSlider type='attribute' label={ATTRIBUTE_NAME.SPEED} attributeKey={ATTRIBUTE_KEY.SPEED} value={attributes.speed} onValueChange={(val: number) => handleAttributeChange(ATTRIBUTE_KEY.SPEED, val)} total={totalAttributePoints}/>
              <CustomSlider type='attribute' label={ATTRIBUTE_NAME.STRENGTH} attributeKey={ATTRIBUTE_KEY.STRENGTH} value={attributes.strength} onValueChange={(val: number) => handleAttributeChange(ATTRIBUTE_KEY.STRENGTH, val)} total={totalAttributePoints}/>
              <CustomSlider type='attribute' label={ATTRIBUTE_NAME.STAMINA} attributeKey={ATTRIBUTE_KEY.STAMINA} value={attributes.stamina} onValueChange={(val: number) => handleAttributeChange(ATTRIBUTE_KEY.STAMINA, val)} total={totalAttributePoints}/>
            </Container>
          </ScrollView>
        ) : (
          <Container style={styles.slidersSubContainer}>
            <CustomSlider type='tendency' label={TENDENCY_NAME.THREE_POINT_SHOT} attributeKey={TENDENCY_KEY.THREE_POINT_SHOT} value={tendencies.threePointShot} onValueChange={(val: number) => handleTendencyChange(TENDENCY_KEY.THREE_POINT_SHOT, val)} total={totalTendencyPoints}/>
            <CustomSlider type='tendency' label={TENDENCY_NAME.MID_RANGE_SHOT} attributeKey={TENDENCY_KEY.MID_RANGE_SHOT} value={tendencies.midRangeShot} onValueChange={(val: number) => handleTendencyChange(TENDENCY_KEY.MID_RANGE_SHOT, val)} total={totalTendencyPoints}/>
            <CustomSlider type='tendency' label={TENDENCY_NAME.CLOSE_SHOT} attributeKey={TENDENCY_KEY.CLOSE_SHOT} value={tendencies.closeShot} onValueChange={(val: number) => handleTendencyChange(TENDENCY_KEY.CLOSE_SHOT, val)} total={totalTendencyPoints}/>
            <CustomSlider type='tendency' label={TENDENCY_NAME.LAYUP} attributeKey={TENDENCY_KEY.LAYUP} value={tendencies.layup} onValueChange={(val: number) => handleTendencyChange(TENDENCY_KEY.LAYUP, val)} total={totalTendencyPoints}/>
          </Container>
        )}
      </Container>

      <ActionButton text='save' action={saveData}/>
    </TabScreenContainer>
  );
};

export default BuildScreen;

const styles = StyleSheet.create({
  screenContainer: {
    padding: 20, 
    paddingBottom: 40, 
    justifyContent: 'flex-start'
  },
  tabContainer: {
    marginBottom: 10,
  },
  tab: {
    flex: 1,
    padding: 10,
    backgroundColor: '#795548',
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#F2690D',
  },
  slidersContainer: { 
    width: '100%', 
    height: '75%',
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 10, 
    borderWidth: 2, 
    backgroundColor: Colors.black,
    borderColor: Colors.white, 
    borderRadius: 10
  },
  slidersSubContainer: {
    width: '100%',
    paddingTop: 10, 
    gap: 5
  }
});
