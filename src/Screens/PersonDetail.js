import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Line from '../components/Line'

export default class PersonDetail extends React.Component{
    render() {
        const { person } = this.props.navigation.state.params;
        const picURL = person.picture.large;

        return (
            <View style={styles.container}>
                <Image source={{ uri: picURL }} style={styles.avatar}></Image>
                <View style={styles.detailContainer}>
                    <Line label='Email:' content={person.email}></Line>
                    <Line label='Cidade:' content={person.location.city}></Line>
                    <Line label='Estado:' content={person.location.state}></Line>
                    <Line label='Celular:' content={person.cell}></Line>
                    <Line label='Nacionalidade:' content={person.nat}></Line>
                </View>

            </View >
        );
    }
};

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
    , avatar: {
        aspectRatio: 1,
        borderRadius: 70,
        borderColor: '#000',
        borderWidth: 1
    },
    detailContainer: {
        backgroundColor: '#e8b7c9',
        marginTop: 10,
        elevation: 1
    }
});