import { StyleSheet, View, ViewStyle } from 'react-native'
import React from 'react'
import TabScreenBackground from './TabScreenBackground';
import { SafeAreaView } from 'react-native-safe-area-context';

type TabScreenContainerProps = {
    children: React.ReactNode;
    style?: ViewStyle; 
}

const TabScreenContainer = (props: TabScreenContainerProps) => {
    const { children, style } = props;
    return (
        <View style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
            <TabScreenBackground />
            <SafeAreaView edges={['top']} style={{ flex: 1, width: '100%'}}>
                <View style={[{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}, style]}>
                    {children}
                </View>
            </SafeAreaView>
        </View>
    )
}

export default TabScreenContainer

const styles = StyleSheet.create({})