import { StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { useEffect, useState } from 'react';
import { View } from '@/components/Themed';
import Profile from '@/components/Profile'
import { User } from '@/constants/Types';
import Colors from '@/constants/Colors';
import { StyledText } from '@/components/StyledText';
import { Image } from 'expo-image';
import basketball from "@/assets/basketball.png";
import Container from '@/components/Container';
import { AccountIcon, InfoIcon, LogOutIcon, MenuIcon } from '@/assets/icons';
import { router } from "expo-router";
import TabScreenContainer from '@/components/TabScreenContainer';
import { useGlobalContext } from "@/context/GlobalProvider";
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {

  const insets = useSafeAreaInsets(); // Get the safe area insets

  // Get the full screen height
  const screenHeight = Dimensions.get('window').height;

  // Calculate the height of the SafeAreaView
  const safeAreaHeight = screenHeight - insets.top - insets.bottom;

  const { user } = useGlobalContext();

  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    setCurrentUser(user);
  }, [])


  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }

  const handleAbout = () => {
    toggleModal();
  }

  const handleLogOut = () => {
    toggleModal();
    router.push("/(auth)/SignInScreen");
  }

  const playGame = () => {
    router.replace("/(game)/GameInProgressScreen");
  }

  return (
    <TabScreenContainer>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
      >
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={styles.modelViewContainer}>
            <TouchableWithoutFeedback>
              <View style={[styles.modalView, {right: 20, top: insets.top + 40}]}>
                <TouchableOpacity 
                  style={styles.menuItem}
                  onPress={handleAbout}
                >
                  <Container style={{width: '20%',}}>
                    <AccountIcon size={20} color={Colors.black}/>
                  </Container>
                  <StyledText size={16} weight={4} color={Colors.black} style={{width: '80%', textAlign: 'center'}}>Account</StyledText>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={styles.menuItem}
                  onPress={handleAbout}
                >
                  <Container style={{width: '20%',}}>
                    <InfoIcon size={20} color={Colors.black}/>
                  </Container>
                  <StyledText size={16} weight={4} color={Colors.black} style={{width: '80%', textAlign: 'center'}}>About</StyledText>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={styles.menuItem}
                  onPress={handleLogOut}
                >
                  <Container style={{width: '20%',}}>
                    <LogOutIcon size={20} color={Colors.black}/>
                  </Container>
                  <StyledText size={16} weight={4} color={Colors.black} style={{width: '80%', textAlign: 'center'}}>Log out</StyledText>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <TouchableOpacity style={styles.menuButton} onPress={toggleModal}>
        <MenuIcon size={30} color={Colors.white}/>
      </TouchableOpacity>
      
      <StyledText style={styles.title} weight={7} size={36}>King of The Court</StyledText>
      <Profile user={currentUser} imageSize={70} iconSize={20} titleTextSize={24} contentTextSize={20} padding={10}/>
      <TouchableOpacity style={styles.playButton} onPress={playGame}>
        <Image
          style={styles.image}
          source={basketball}
          transition={1000}
        />
      </TouchableOpacity>
    </TabScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    lineHeight: 50,
    width: '100%',
    color: Colors.white,
    marginBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  playButton: {
    width: 200,
    height: 200,
    marginTop: 50
  },
  image: {
    width: '100%',
    height: '100%'
  },
  menuButton: {
    position: 'absolute',
    right: 20,
    top: 10,
  },
  modelViewContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.halfBlack
  },
  modalView: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    gap: 10,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  menuItem: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    padding: 5, 
    width: '100%'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});