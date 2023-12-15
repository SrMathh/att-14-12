import { ScrollView, StyleSheet, Text, View, SafeAreaView, TouchableOpacityProps } from 'react-native';

// type Props = {
//     data: Pokemon[];
// } & TouchableOpacityProps

export default function Card(){
    return(
    
            
                    <View style={styles.container}>
                        <Text>teste</Text>
                    </View>
    
            
    
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#dcdcdc',
        borderRadius: 45,
        // maxHeight: 100,
        padding: 100,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});