import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { StyledText } from './StyledText'
import Colors from '@/constants/Colors'

type actionButtonProps = {
    text: string
    action: () => void
}

const ActionButton = (props: actionButtonProps) => {
    const { text, action } = props;
    return (
        <TouchableOpacity style={styles.saveButton} onPress={action}>
            <StyledText weight={5} size={16}>{text}</StyledText>
        </TouchableOpacity>
    )
}

export default ActionButton

const styles = StyleSheet.create({
    saveButton: {
        width: '80%',
        backgroundColor: Colors.primaryOrange,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
})