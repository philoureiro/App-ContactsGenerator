import React from 'react';
import {View, Text, StyleSheet} from   'react-native';

//Stateless component
const Header = (props) => {
    return(
        <View style = {styles.header}>
            <Text style={styles.text}>{props.label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginTop: 1,
        backgroundColor: '#f21667',
        alignItems: 'center',
        padding: 10
    },

    text: {
        fontSize: 50,
        color: '#fff',
       
    }

});
export default Header;