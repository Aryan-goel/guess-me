import { Text,Alert, View, StyleSheet, SafeAreaView } from "react-native";
import Title from "../components/Title";
import { useState,useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import { Entypo } from '@expo/vector-icons'
import GuessLogItem from "../components/game/GuessLogItem";

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

function GameScreen({ userNumber,onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds,setGuessRounds] = useState([initialGuess]);

    useEffect(()=>{
        if(currentGuess === userNumber){
             onGameOver();

        }
    },[currentGuess,userNumber ])

    useEffect(()=>{
            minBoundary=1;
            maxBoundary=100;
    },[])

    

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
        setGuessRounds(prevGuessRounds => [newRandomNumber,...prevGuessRounds]);

    }
    return (

        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {/* Guess */}
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>
                    Higher or Lower ?
                </InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>

                    <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>
                            <Entypo name="minus" size={24} color="white" />
                    </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>
                            <Entypo name="plus" size={24} color="white" />
                    </PrimaryButton>
                    </View>
                </View>
                {/* <View>Log Rounds</View> */}
            </Card> 
                {/* <View>
                    
                    {guessRounds.map(guessRound => <GuessLogItem roundNumber={}/>)}
                
                </View> */}
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

    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex:1,

    },
    instructionText:{
        marginBottom:12,

    }

})