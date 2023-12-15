import React from "react";
import { ScrollView, StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Login() {
    const { navigate } = useNavigation<NavigationProp<any>>();
    const [user, onChangeUser] = React.useState('Usuario');
    const [password, onChangePassword] = React.useState('Senha');

    return (
        <ScrollView style={styles.body} >
            <Text> Login</Text>
            <View>
                <TextInput style={styles.input}
                    onChangeText={onChangeUser}
                    placeholder="Usuario"
                    value={user}>
                </TextInput>
                <TextInput style={styles.input}
                    onChangeText={onChangePassword}
                    placeholder="Senha"
                    value={password}>
                </TextInput>
                <TouchableOpacity style={styles.buttonS} onPress={() => navigate("Home")}>
                    <Text style={styles.textButton}> Acessar </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    buttonS: {
        backgroundColor: "#f28705",
        border: "none",
        padding: 2,
        borderRadius: 10,
        height:50,
        width: 300,
        boxSizing: "border-box",
        alignSelf: "center",
    },
    textButton: {
        color: "#fff",
        border: "none",
        padding: 10,
        borderRadius: 10,
        width: 100,
        boxSizing: "border-box",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: "#fff",
    },
    body:{
        backgroundColor: "#202022",
    }
})
