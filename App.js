import { useState } from 'react';
import { StyleSheet,ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient'
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOver';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {

  const [userNumber,setUserNumber]=useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  const [fontsLoaded]=useFonts({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if(!fontsLoaded){
    return(
      <AppLoading/>
    )
  }

  function startGameHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false);

  }
  function gameOverHandler() {
    setGameIsOver(true);
  }
  let screen = <StartGameScreen onPickNumber={startGameHandler}/>;
  if(userNumber){
    screen=<GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if(gameIsOver && userNumber){
    screen=<GameOverScreen/>
  }

  
  return (
    
    <LinearGradient
    colors={['#E84393', 'black']}
    style={styles.rootScreen}
    start={{ x: 0, y: 1.5 }}
    end={{ x: 0, y: 0  }}
    >
        {/* <ImageBackground style={styles.rootScreen} imageStyle={styles.backgroundImage} resizeMode='cover' source={require('./assets/images/img.jpg')}> */}
        <SafeAreaView style={styles.rootScreen}>
      {screen}
    </SafeAreaView>
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
