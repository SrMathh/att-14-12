import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function InputData() {
    const [inputValue, setInputValue] = useState("");

    return (
        <View>
            <Text>Esse e um teste de imput </Text> 
            <TextInput
            value={inputValue}
            onChangeText={text => setInputValue(text)}
            ></TextInput>
        </View>
    );
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 100,
      padding: 50,
    },
  });