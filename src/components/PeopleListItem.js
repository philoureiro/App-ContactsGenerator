import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { PersonDetail } from '../Screens/PersonDetail';


const PeopleListItem = props => { //funcao que recebe paramentros
    const { people, onPressItem, person } = props; //desestruturaçao do objeto pessoas
    const { title, first, last } = person.name;
    const { thumbnail } = person.picture;


    return (
        <TouchableOpacity onPress={() => {
            console.log('Clicou na pessoa =>' + first)
            onPressItem({person})
            //pega a função que vem da tela inicial e carrega a pessoa
            //onPressItem({person});
        }}>
            <View style={styles.line}>
                <Image style={styles.avatar} source={{ uri: thumbnail }}></Image>
                <Text style={styles.lineText}>{title + ' ' + first + ' ' + last}</Text>
            </View>
        </TouchableOpacity>

    )

}

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#f21667',
        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },

    avatar: {
        aspectRatio: 1,
        borderRadius: 50 / 2,
        flex: 1,
        marginLeft: 5,
        borderColor: '#000',
        borderWidth: 1
    }
});

export default PeopleListItem;