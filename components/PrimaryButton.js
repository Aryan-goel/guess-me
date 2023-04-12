import { View, Text, StyleSheet, Pressable } from "react-native";

function PrimaryButton({ children }) {
    function handler() {
        console.log("pressed");
    }
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable onPress={handler} android_ripple={{ color: '#4e0329' }} style={styles.buttonInnerContainer} >
                <Text style={styles.button} >
                    {children}
                </Text>
            </Pressable>
        </View>
    )
}
export default PrimaryButton;
const styles = StyleSheet.create({
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 5,
        shadowColor: 'black',
    },

    button: {
        color: 'white',
        textAlign: 'center',
    },

    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
}) 