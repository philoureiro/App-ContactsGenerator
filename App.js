

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PersonDetail from './src/Screens/PersonDetail';
import PeoplePage from './src/Screens/PeoplePage';
import Initial from './src/Screens/Initial';

const StackNavigator = createStackNavigator({
    'Initial' :{
        screen: Initial,
        navigationOptions:({ navigation}) =>{
            return({
                title: 'Gerador de Contatos',
                headerTitleStyle: {
                    color: 'white',
                    fontSize: 35,
                    flexGrow: 1,
                    textAlign: 'center'
                },
                headerStyle: {
                    backgroundColor: '#f21667'
                }
            })

        }
    },
    
    'Main': {
        screen: PeoplePage,
        navigationOptions: ({ navigation }) => {
            return ({
                title: 'Todos os contatos',
                headerTitleStyle: {
                    color: 'white',
                    fontSize: 35,
                    flexGrow: 1,
                    textAlign: 'center'
                },
                headerStyle: {
                    backgroundColor: '#f21667'
                }

            })
        }
    },

    'PersonDetail': {
        screen: PersonDetail,
        navigationOptions: ({ navigation }) => {
            const personName = navigation.state.params.person.name.first;
            return ({
                title: personName,
                headerTitleStyle: {
                    color: 'white',
                    fontSize: 30,
                },
                headerStyle: {
                    backgroundColor: '#f21667'
                }

            })
        }
    }
})

const appContainer = createAppContainer(StackNavigator);

export default appContainer;
