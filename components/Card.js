import { StyleSheet,View } from "react-native";

function Card({children}){

    return(
        <View style={styles.container}>
        {children}
        </View>
    )

}
export default Card;
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection:'row',
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 8,
        marginTop: 100,
        backgroundColor: '#4e0329',
        elevation: 10,
        shadowColor: 'white',

    },
})