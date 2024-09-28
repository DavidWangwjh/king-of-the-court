import { StyleSheet, Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react'
import { StyledText } from '@/components/StyledText'
import Colors from '@/constants/Colors'
import Container from '@/components/Container'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import ActionButton from '@/components/ActionButton'
import { checkUsernameAvailable } from '@/service/AuthService'

const { width, height } = Dimensions.get('screen')

const CreateUsernameScreen = () => {

  const [username, setUsername] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleCreateUsername = () => {
    checkUsernameAvailable(username)
      .then((res) => {
        if (res) {
          router.replace('/(auth)/SelectBuildScreen')
        } else {
          setShowAlert(true);
        }
      })
  }

  const onChangeText = (text: string) => {
    setUsername(text)
    setShowAlert(false);
  }

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, width: '100%', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.black}}>
      <Container align='flex-start' style={{width: '80%', marginTop: height*0.3}}>
        <StyledText size={22} weight={5}>Create your username</StyledText>
        <TextInput
          style={styles.input}
          onChangeText={(text: string) => onChangeText(text)}
          value={username}
          autoCapitalize='none'
        />
        { showAlert? <StyledText color={Colors.alertRed} size={16}>*username taken</StyledText> : <></>}
      </Container>
      <ActionButton text='Next' action={handleCreateUsername}/>
    </SafeAreaView>
  )
}

export default CreateUsernameScreen

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    marginTop: 10,
    marginBottom: 5,
    borderWidth: 1,
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10
  },
})