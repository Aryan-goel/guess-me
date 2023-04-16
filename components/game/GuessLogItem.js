import { Text, View,StyleSheet } from "react-native"

function GuessLogItem({roundNumber,guess}){
    return (
        <View style={styles.listItem}>
            <Text style={styles.listItem}>
                #{roundNumber}
            </Text>
            <Text style={styles.listItem}>
                Opponent's Guess: {guess}
            </Text>
        </View>
    )

}
export default GuessLogItem;
const styles = StyleSheet.create({
    listItem:{
        borderColor:'#4e0329',
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor:'#ddb52f',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        elevation:4
    },
    itemText:{
        fontFamily:'open-sans',

    }

})