import React from 'react';
import { StyleSheet } from 'react-native';
import { StyledText } from './StyledText';
import { Text, View } from './Themed';
import Colors from '@/constants/Colors';
import { User } from "@/constants/Types";
import { CrownIcon, TrophyIcon } from '@/assets/icons';
import Container from './Container';

type ProfileProps = {
    user: User | null
    imageSize: number
    iconSize: number
    titleTextSize: number
    contentTextSize: number
    padding: number
};

export default function Profile (props: ProfileProps) {

    const { user, imageSize, iconSize, titleTextSize, contentTextSize, padding } = props;

    return (
        (
            user? (
            <Container style={{ width: '90%', borderRadius: 10, padding: padding }} bgColor={Colors.secondaryOrange}>
                <Container style={{ gap: 15, padding: padding }} direction='row'>
                    <View style={{width: imageSize, height: imageSize, borderRadius: imageSize/2, borderColor: Colors.white, borderWidth: 2, backgroundColor: user.profilePicture }}></View>
                    <Container style={styles.userInfoSubContainer} align='flex-start'>
                        <StyledText style={{ color: Colors.white, textDecorationLine: 'underline' }} weight={5} size={titleTextSize} shadow={true}>
                            {user.username}
                        </StyledText>
                        <Container style={styles.achievementContainer} direction='row' justify='flex-start' >
                            <Container style={styles.achievement} direction='row'>
                                <CrownIcon size={iconSize} color={Colors.gold}/>
                                <StyledText size={contentTextSize} shadow={true}>{user.crowns}</StyledText>
                            </Container>
                            <Container style={styles.achievement} direction='row'>
                                <TrophyIcon size={iconSize} color={Colors.gold}/>
                                <StyledText size={contentTextSize} shadow={true}>{user.seasonChampions}</StyledText>
                            </Container>
                        </Container>
                    </Container>
                </Container>
                <Container style={styles.userStatsContainer}>
                    <Container style={styles.userStats} direction='row' justify='space-between'>
                        <StyledText weight={4} size={contentTextSize} shadow={true}>offense</StyledText>
                        <StyledText size={contentTextSize} shadow={true}>{user.offense}</StyledText>
                    </Container>
                    <Container style={styles.userStats} direction='row' justify='space-between'>
                        <StyledText weight={4} size={contentTextSize} shadow={true}>defense</StyledText>
                        <StyledText size={contentTextSize} shadow={true}>{user.defense}</StyledText>
                    </Container>
                    <Container style={styles.userStats} direction='row' justify='space-between'>
                        <StyledText weight={4} size={contentTextSize} shadow={true}>athleticism</StyledText>
                        <StyledText size={contentTextSize} shadow={true}>{user.athleticism}</StyledText>
                    </Container>
                </Container>
            </Container>
            ) : (
                <StyledText>This user doesn't exist</StyledText>
            )
        )
    )
}

const styles = StyleSheet.create({
    profileContainer: {
        width: '90%',
        borderRadius: 10,
        backgroundColor: Colors.primaryOrange,
    },
    userInfoContainer: {
        gap: 15,
        padding: 10,
    },
    userStatsContainer: {
        width: '90%',
        gap: 3,
    },
    userStats: {
        width: '100%',
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'black'
    },
    achievementContainer: {
        gap: 20,
    },
    achievement: {
        gap: 5
    },
    userInfoSubContainer: {
        gap: 5,
    }
});
  