import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '@/constants/Colors'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('screen')


const TabScreenBackground = () => {
    return (
        <View style={styles.background}>
            <LinearGradient 
                colors={[Colors.halfBlack, Colors.black]}
                style={styles.background}
            />
            {/* <View style={styles.line}/>
            <View style={styles.circle}/> */}
        </View>
    )
}

export default TabScreenBackground

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    line: { 
        position: 'absolute', 
        width: '100%', 
        height: 10, 
        backgroundColor: Colors.white 
    },
    circle: { 
        position: 'absolute', 
        width: width * 0.8, 
        height: width * 0.8, 
        backgroundColor: 'transparent', 
        borderColor: Colors.white,
        borderWidth: 10,
        borderRadius: width,
    }
})