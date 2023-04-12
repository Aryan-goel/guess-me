import { Text,View ,StyleSheet} from "react-native";

function GameScreen(){

    return(
        <View style={styles.screen}>
            <Text style={{ color: 'white' }} >
             Opponent's guess   
            </Text>
            {/* Guess */}
            <View>
                <Text style={{color:'white'}}>
                    Higher or Lower ?
                </Text>
                {/* + */}
                {/* - */}
                {/* <View>Log Rounds</View> */}
            </View>
        </View>
    ) 

}
export default GameScreen;
const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:12,
        color:'white'


    }
})