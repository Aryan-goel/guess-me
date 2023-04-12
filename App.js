import { useState } from 'react';
import { StyleSheet,ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient'
import GameScreen from './screens/GameScreen';

export default function App() {

  const [userNumber,setUserNumber]=useState();

  function startGameHandler(pickedNumber){
    setUserNumber(pickedNumber);

  }
  let screen = <StartGameScreen onPickNumber={startGameHandler}/>;
  if(userNumber){
    screen=<GameScreen/>
  }
  return (

      <LinearGradient
        colors={['#E84393', 'black']}
        style={styles.rootScreen}
        start={{ x: 0, y: 1.7 }}
        end={{ x: 0, y: -0.01 }}
      >
        {/* <ImageBackground style={styles.rootScreen} imageStyle={styles.backgroundImage} resizeMode='cover' source={require('./assets/images/img.jpg')}> */}
      {screen}
      {/* </ImageBackground> */}
      </LinearGradient>
 
  );
}

const styles = StyleSheet.create({
 rootScreen:{
    flex:1
 },

 backgroundImage:{
  opacity:0.15,
 }
 
});
