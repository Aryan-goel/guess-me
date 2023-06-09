import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";

function GameOverScreen({roundsNumber,userNumber,onStarNewGame}){
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <Text style={styles.summaryText}>Your Phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>
                    {userNumber}
                </Text> .
            </Text>
            <PrimaryButton onPress={onStarNewGame}>Start New Game!</PrimaryButton>
        </View>
    )
}
export default GameOverScreen;

const styles= StyleSheet.create({
    rootContainer:{
        flex:1,
        padding:24,
        alignItems:'center',
        justifyContent:'center',

    },
    summaryText:{
        fontFamily:'open-sans',
        fontSize:24,
        textAlign:'center',
        marginVertical:130,
        color:'#ddb52f'


    },
    highlight:{
        fontFamily:'open-sans-bold',
        color:'white'
    }
})
 