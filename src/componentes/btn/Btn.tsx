import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Btn(){
    return(
        <View>
            <TouchableOpacity style = {styles.btnText}>
                <Text>botão teste !</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btnText: {
        backgroundColor : "red",
        height: 80,
        borderRadius:50,
        alignItems: "center",
        margin: 50,
        elevation: 8

    }
})