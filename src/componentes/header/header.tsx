import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Header () {
    return (
        <SafeAreaView style = {styles.headerView}>
            <StatusBar style="auto"/>
        <View style = {styles.headerTop}> 
            <Text> Teste </Text>
        </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    headerView: {
        backgroundColor: 'red',
    },
    headerTop: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 15, 
        justifyContent: 'space-around',
        alignItems:'center',
        marginHorizontal: 15,
    }
}) 