import { TextInput, Alert, Pressable, StyleSheet, View, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";

function StartGameScreen({ onPickNumber }) {

    const [enteredNumber, setEnteredNumber] = useState('');


    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);

    }

    function resetInputHandler() {
        setEnteredNumber('')
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);


        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            //!show alert
            Alert.alert('Invalid Number !', 'Number has to be a Number between 1 and 99.', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            )

            return;
        }
        console.log('valid number!');
        onPickNumber(chosenNumber);
    }


    return (
        <View style={styles.rootContainer}>
            <Title>Guess The Number</Title>
            <Card>

               <InstructionText>Enter a Number</InstructionText>
                
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType='number-pad'
                    value={enteredNumber}
                    onChangeText={numberInputHandler}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card >
        </View>

    );

}
export default StartGameScreen;
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',


    },

    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#ddb52f',

    },

    buttonsContainer: {
        flexDirection: 'row',

    },
    buttonContainer: {
        flex: 1,
    },

   
})