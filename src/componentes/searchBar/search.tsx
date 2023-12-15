import {StyleSheet, Text, View} from "react-native";


export default function SearchBar(){
    return (
        <View>
            <Text style = {styles.SearchBar}>
                Teste SearchBar
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    SearchBar: {
        backgroundColor: 'red',
    }
})