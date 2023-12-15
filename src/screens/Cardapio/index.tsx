import React from "react";
import { ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {useNavigation, NavigationProp} from "@react-navigation/native";
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function Cardapio(){
    const {navigate} = useNavigation<NavigationProp<any>>();
    return(
        <ScrollView>
            <View>
                <Text style= {style.textStyle}>olá sou a tela de cardapio</Text>
            </View>
            <TouchableOpacity style = {style.buttonS} onPress={() => navigate("Login")}>
                <Text > LogOff </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
const style = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        fontWeight:"bold",
        color:"blue",
        alignSelf: "center" ,
    },
    buttonS: {
        backgroundColor : "#f28705",
        border: "none",
        padding: 2,
        borderRadius: 10,
        width: 100,
        boxSizing: "border-box",
        alignSelf:"center"
    }
})