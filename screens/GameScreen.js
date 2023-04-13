import { Text,Alert, View, StyleSheet, SafeAreaView } from "react-native";
import Title from "../components/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);

    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber }) {
    const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    

    function nextGuessHandler(direction){

        if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)){
            Alert.alert('Dont lie bitch' ,'you know this is wrong ',[{text:'Sorry',style:'cancel'}])
            return;
        }
        if(direction==='lower'){
            maxBoundary=currentGuess-1;
        }else{
            minBoundary=currentGuess + 1;
        }
        const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRandomNumber);

    }
    console.log(currentGuess);
    return (

        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {/* Guess */}
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <View>
                <Text>
                    Higher or Lower ?
                </Text>
                {/* + */}
                {/* - */}
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>+</PrimaryButton>
                </View>
                {/* <View>Log Rounds</View> */}
            </View>
        </View>
    )

}
export default GameScreen;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        // color:'white'


    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#ddb52f',
        padding: 12,
    },

})