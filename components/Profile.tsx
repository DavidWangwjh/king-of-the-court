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
};

export default function Profile (props: ProfileProps) {

    const { user } = props;

    return (
        (
            user? (
            <Container style={styles.profileContainer} direction='column' >
                <Container style={styles.userInfoContainer}>
                    <View style={{width: 60, height: 60, borderRadius: 30, borderColor: Colors.white, borderWidth: 2, backgroundColor: user.profilePicture }}></View>
                    <Container style={styles.userInfoSubContainer} direction='column' align='flex-start'>
                        <StyledText style={{ color: Colors.white, textDecorationLine: 'underline' }} weight={5} size={24}>
                            {user.username}
                        </StyledText>
                        <Container style={styles.achievementContainer} justify='flex-start' >
                            <Container style={styles.achievement} >
                                <CrownIcon size={20} color={Colors.gold}/>
                                <StyledText style={{fontSize: 20}} >{user.crowns}</StyledText>
                            </Container>
                            <Container style={styles.achievement} >
                                <TrophyIcon size={20} color={Colors.gold}/>
                                <StyledText style={{fontSize: 20}} >{user.seasonChampions}</StyledText>
                            </Container>
                        </Container>
                    </Container>
                </Container>
                <Container style={styles.userStatsContainer} direction='column'>
                    <Container style={styles.userStats} justify='space-between'>
                        <StyledText weight={4}>offense</StyledText>
                        <StyledText>{user.offense}</StyledText>
                    </Container>
                    <Container style={styles.userStats} justify='space-between'>
                        <StyledText weight={4}>defense</StyledText>
                        <StyledText>{user.defense}</StyledText>
                    </Container>
                    <Container style={styles.userStats} justify='space-between'>
                        <StyledText weight={4}>athleticism</StyledText>
                        <StyledText>{user.athleticism}</StyledText>
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
        padding: 10,
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
  