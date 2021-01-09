import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, SafeAreaView } from 'react-native';
import PeopleListItem from '../components/PeopleListItem'


const PeopleList = props => { //funcao que recebe paramentros
    const { people, onPressItem } = props; //desestruturaçao do objeto pessoas

    const items = people.map(person => {
        return <PeopleListItem key={person.name.first} person={person} onPressItem={onPressItem} //onPressItem ={person}
        ></PeopleListItem>
    });


    return (
        <SafeAreaView>
            <FlatList
                style={styles.container}
                data={people}
                keyExtractor={item => item.name.first}
                renderItem={({ item }) => {
                    return (
                        <PeopleListItem
                            person={item}
                            onPressItem={onPressItem}
                        />
                    );
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    }
});

export default PeopleList;

