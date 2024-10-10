import React from 'react'
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native'
import { StyledText } from './StyledText'
import Colors from '@/constants/Colors'

type actionButtonProps = {
    text: string
    action: () => void
    style?: ViewStyle
}

const ActionButton = (props: actionButtonProps) => {
    const { text, action, style } = props;
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={action}>
            <StyledText weight={5} size={16}>{text}</StyledText>
        </TouchableOpacity>
    )
}

export default ActionButton

const styles = StyleSheet.create({
    button: {
        width: '80%',
        backgroundColor: Colors.primaryOrange,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
})