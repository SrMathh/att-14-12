import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {useNavigation, NavigationProp} from "@react-navigation/native";
import Card from "../../componentes/card/Card";
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { GetAllPokemon } from "../../componentes/controllers/pokemonController";
import Header from "../../componentes/header/header";

export default function Home(){
    const {navigate} = useNavigation<NavigationProp<any>>();
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);

    useEffect(() => {
    GetAllPokemon().then(setPokemon).catch((err) => console.log(err));
}, []);


return (
    <ScrollView>
        <Text>Matheus Martins!!</Text>
        <Card />
        <Card />
        <TouchableOpacity style={styles.btnText} onPress={() => navigate("Cardapio")}>
            <Text>Ir para Cardapio!</Text>
        </TouchableOpacity>
        <Card />
    </ScrollView>
);
}

const styles = StyleSheet.create({
    btnText: {
        backgroundColor : "red",
        height: 80,
        borderRadius:50,
        alignItems: "center",
        margin: 50,
        elevation: 8,

    }
})
