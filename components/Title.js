import { StyleSheet, Text } from "react-native";


function Title({children}){
    return(
    <Text style={styles.title} >
        {children}
    </Text>
    )
}
export default Title;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        // color:'white'


    },
    title: {
        fontFamily:'open-sans-bold',
        fontSize: 24,
        // fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
    }
})