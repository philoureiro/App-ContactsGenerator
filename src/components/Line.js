import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Line = ({ label, content })=>{
    return (
        <View style={styles.line}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.textDetails}>{content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    textDetails: {
        color: "#000",
        flex:3,
        marginLeft: 10,
        fontSize: 16
    },
    line: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: '#000'
    },
    label:{
        fontWeight: 'bold',
        flex:2,
        color: '#000',  
        marginLeft: 10,
        fontSize: 16
    },
    //longLabel:{
       // fontSize: 12,
       // flex: 1
   // }
})
export default Line;