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
            <Container style={{ width: '90%', borderRadius: 10, backgroundColor: Colors.primaryOrange, padding: padding }} direction='column' >
                <Container style={{ gap: 15, padding: padding }}>
                    <View style={{width: imageSize, height: imageSize, borderRadius: imageSize/2, borderColor: Colors.white, borderWidth: 2, backgroundColor: user.profilePicture }}></View>
                    <Container style={styles.userInfoSubContainer} direction='column' align='flex-start'>
                        <StyledText style={{ color: Colors.white, textDecorationLine: 'underline' }} weight={5} size={titleTextSize}>
                            {user.username}
                        </StyledText>
                        <Container style={styles.achievementContainer} justify='flex-start' >
                            <Container style={styles.achievement} >
                                <CrownIcon size={iconSize} color={Colors.gold}/>
                                <StyledText size={contentTextSize} >{user.crowns}</StyledText>
                            </Container>
                            <Container style={styles.achievement} >
                                <TrophyIcon size={iconSize} color={Colors.gold}/>
                                <StyledText size={contentTextSize} >{user.seasonChampions}</StyledText>
                            </Container>
                        </Container>
                    </Container>
                </Container>
                <Container style={styles.userStatsContainer} direction='column'>
                    <Container style={styles.userStats} justify='space-between'>
                        <StyledText weight={4} size={contentTextSize}>offense</StyledText>
                        <StyledText size={contentTextSize}>{user.offense}</StyledText>
                    </Container>
                    <Container style={styles.userStats} justify='space-between'>
                        <StyledText weight={4} size={contentTextSize}>defense</StyledText>
                        <StyledText size={contentTextSize}>{user.defense}</StyledText>
                    </Container>
                    <Container style={styles.userStats} justify='space-between'>
                        <StyledText weight={4} size={contentTextSize}>athleticism</StyledText>
                        <StyledText size={contentTextSize}>{user.athleticism}</StyledText>
                    </Container>
                </Container>
            </Container>
            ) : (
                <Text>This user doesn't exist</Text>
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
  