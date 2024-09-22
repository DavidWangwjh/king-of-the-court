import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import { AttributeKeys, Attributes, Tendencies, TendencyKeys, User } from '@/constants/Types';
import { user } from '@/constants/TestUser';
import Container from '@/components/Container';
import { StyledText } from '@/components/StyledText';
import Colors from '@/constants/Colors';
import { MAX_ATTRIBUTE_POINTS, MAX_TENDENCIES, BASE_ATTRIBUTE_POINTS } from '@/constants/Attributes';

const BuildScreen = () => {
  const [selectedTab, setSelectedTab] = useState('attributes'); // To handle tab switching

  const [totalAttributePoints, setTotalAttributePoints] = useState<number>(0);
  const [totalTendencies, setTotalTendencies] = useState<number>(0);

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
        'threePointShot': user.attributes.threePointShot,
        'midRangeShot': user.attributes.midRangeShot,
        'closeShot': user.attributes.closeShot,
        'layup': user.attributes.layup,
        'ballHandle': user.attributes.ballHandle,
        'interiorDefense': user.attributes.interiorDefense,
        'perimeterDefense': user.attributes.perimeterDefense,
        'steal': user.attributes.steal,
        'block': user.attributes.block,
        'speed': user.attributes.speed,
        'strength': user.attributes.strength,
        'stamina': user.attributes.stamina,
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
    const totalTendenciesPoints = Object.values(tendencies).reduce((acc, value) => acc + value, 0);
    setTotalTendencies(totalTendenciesPoints);
  }, [tendencies]);

  const [attributeSliderUpperLimit, setAttributeSliderUpperLimit] = useState<number>(100);

  const handleAttributeChange = (key: AttributeKeys, value: number) => {
    const newTotal = totalAttributePoints - attributes[key] + value;
    if (newTotal <= MAX_ATTRIBUTE_POINTS) {
      setAttributes((prev) => ({ ...prev, [key]: value }));
    } else {
      console.warn('Exceeded max attribute points!');
    }
    //setAttributeSliderUpperLimit(Math.min(MAX_ATTRIBUTE_POINTS - totalAttributePoints, 100));
  };

  // Function to handle tendency change and check if within max limit
  const handleTendencyChange = (key: TendencyKeys, value: number) => {
    const newTotal = totalTendencies - tendencies[key] + value;
    if (newTotal <= MAX_TENDENCIES) {
      setTendencies((prev) => ({ ...prev, [key]: value }));
    } else {
      console.warn('Exceeded max tendencies points!');
    }
  };

  type SliderItemProps = {
    label: string;
    attributeKey?: AttributeKeys;
    value: number;
    onValueChange: (value: number) => void;
  }
  
  const SliderItem = ({ label, attributeKey='threePointShot', value, onValueChange }: SliderItemProps) => {
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
          // lowerLimit={BASE_ATTRIBUTE_POINTS[user.starterBuild][attributeKey]}
          // upperLimit={attributeSliderUpperLimit}
        />
      </Container>
    );
  };

  return (
    <Container style={styles.screenContainer} direction='column' justify='flex-start' background={Colors.black}>
      {/* Top Tab Selector */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'attributes' ? styles.activeTab : null]}
          onPress={() => setSelectedTab('attributes')}
        >
          <Text style={styles.tabText}>Attributes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'tendencies' ? styles.activeTab : null]}
          onPress={() => setSelectedTab('tendencies')}
        >
          <Text style={styles.tabText}>Tendencies</Text>
        </TouchableOpacity>
      </View>

      {/* Title */}
      <StyledText style={styles.title} weight={5} size={30}>
        {selectedTab === 'attributes' ? user.starterBuild : 'Shot Tendencies'}
      </StyledText>

      {/* Subtitle */}
      <StyledText style={styles.subtitle} size={16}>
        {selectedTab === 'attributes'
          ? `Attributes Points Available: ${MAX_ATTRIBUTE_POINTS - totalAttributePoints}/${MAX_ATTRIBUTE_POINTS}`
          : `Tendencies Points Available: ${MAX_TENDENCIES - totalTendencies}/${MAX_TENDENCIES}`}
      </StyledText>

      {/* Sliders Section */}
      {selectedTab === 'attributes' ? (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
          <StyledText weight={4} size={20} style={styles.category}>Offense</StyledText>
          <SliderItem
            label="Three-Point Shot"
            attributeKey='threePointShot'
            value={attributes.threePointShot}
            onValueChange={(val: number) => handleAttributeChange('threePointShot', val)}
          />
          <SliderItem
            label="Mid-Range Shot"
            value={attributes.midRangeShot}
            onValueChange={(val: number) => handleAttributeChange('midRangeShot', val)}
          />
          <SliderItem
            label="Close Shot"
            value={attributes.closeShot}
            onValueChange={(val: number) => handleAttributeChange('closeShot', val)}
          />
          <SliderItem
            label="Layup"
            value={attributes.layup}
            onValueChange={(val: number) => handleAttributeChange('layup', val)}
          />
          <SliderItem
            label="Ball Handle"
            value={attributes.ballHandle}
            onValueChange={(val: number) => handleAttributeChange('ballHandle', val)}
          />
          <StyledText weight={4} size={20} style={styles.category}>Defense</StyledText>
          <SliderItem
            label="Interior Defense"
            value={attributes.interiorDefense}
            onValueChange={(val: number) => handleAttributeChange('interiorDefense', val)}
          />
          <SliderItem
            label="Perimeter Defense"
            value={attributes.perimeterDefense}
            onValueChange={(val: number) => handleAttributeChange('perimeterDefense', val)}
          />
          <SliderItem
            label="Steal"
            value={attributes.steal}
            onValueChange={(val: number) => handleAttributeChange('steal', val)}
          />
          <StyledText weight={4} size={20} style={styles.category}>Athleticism</StyledText>
          <SliderItem
            label="Speed"
            value={attributes.speed}
            onValueChange={(val: number) => handleAttributeChange('speed', val)}
          />
          <SliderItem
            label="Strength"
            value={attributes.strength}
            onValueChange={(val: number) => handleAttributeChange('strength', val)}
          />
          <SliderItem
            label="Stamina"
            value={attributes.stamina}
            onValueChange={(val: number) => handleAttributeChange('stamina', val)}
          />
        </ScrollView>
      ) : (
        <View>
          <SliderItem
            label="Three-Point Shot"
            value={tendencies.threePointShot}
            onValueChange={(val: number) => handleTendencyChange('threePointShot', val)}
          />
          <SliderItem
            label="Mid-Range Shot"
            value={tendencies.midRangeShot}
            onValueChange={(val: number) => handleTendencyChange('midRangeShot', val)}
          />
          <SliderItem
            label="Close Shot"
            value={tendencies.closeShot}
            onValueChange={(val: number) => handleTendencyChange('closeShot', val)}
          />
          <SliderItem
            label="Layup"
            value={tendencies.layup}
            onValueChange={(val: number) => handleTendencyChange('layup', val)}
          />
        </View>
      )}

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton}>
        <StyledText weight={6} size={18}>Save</StyledText>
      </TouchableOpacity>
    </Container>
  );
};

export default BuildScreen;

const styles = StyleSheet.create({
  screenContainer: {
    padding: 20,
    height: '100%'
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
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
  tabText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
  },
  sliderItem: {
    marginBottom: 10,
  },
  slider: {
    width: '100%'
  },
  saveButton: {
    width: '80%',
    backgroundColor: Colors.primaryOrange,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  category: {
    width: '100%',
    textAlign: 'center'
  }
});
