import { StyleSheet, View, ViewStyle } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

type SafeAreaContainerProps = {
    bgColor: ViewStyle['backgroundColor'];
    children: React.ReactNode;
    style?: ViewStyle; 
}

const SafeAreaContainer = (props: SafeAreaContainerProps) => {
    const { bgColor, children, style } = props;
    return (
        <View style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', backgroundColor: bgColor }}>
            <SafeAreaView edges={['top']} style={{ flex: 1, width: '100%'}}>
                <View style={[{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center',  width: '100%', height: '100%'}, style]}>
                    {children}
                </View>
            </SafeAreaView>
        </View>
    )
}

export default SafeAreaContainer

const styles = StyleSheet.create({})