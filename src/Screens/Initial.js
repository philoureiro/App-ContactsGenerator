import React, { Component, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Alert, Image } from "react-native";
import { PeoplePage } from './PeoplePage';


//const Initial = ({navigation}) => {
type Props = {};

export default class Initial extends Component<Props>{

    constructor(props) {
        super(props);//herdando a classe pai

        this.state = {
            onChangeText: ''
        };
    };

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.avatar} source={{ uri: 'https://img.icons8.com/clouds/1080/000000/apple-contacts.png' }}></Image>
                <View style={styles.countContainer}>
                    <Text style={styles.txt}> Digite o número de contatos que você deseja gerar:</Text>
                    <TextInput
                        style={{ textAlign: 'center', marginTop: 20, height: 40, width: 40, borderColor: 'black', borderWidth: 1}}
                        onChangeText={text => this.setState({ onChangeText: text})}
                    ></TextInput>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {this.props.navigation.navigate('Main', {value: this.state.onChangeText})}}>
                    <Text style={styles.btn}>GERAR CONTATOS</Text>
                </TouchableOpacity>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#f21667",
        padding: 10,
        borderRadius: 25
    },
    countContainer: {
        alignItems: "center",
        padding: 10,
    },
    txt: {
        fontSize: 25,
        textAlign: 'center',
        color: 'black',
        alignSelf: 'center'

    },
    btn: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        alignSelf: 'center',
        fontWeight: 'bold'

    }, avatar: {
        aspectRatio: 1,
        borderRadius: 500 / 2,
        borderColor: '#000',
        borderWidth: 1
    }
});

