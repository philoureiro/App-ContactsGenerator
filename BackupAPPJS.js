
import PeoplePage from './src/Screens/PeoplePage'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PersonDetail from './src/Screens/PersonDetail';

const StackNavigator = createStackNavigator({
    'Main': {
        screen: PeoplePage,
        navigationOptions: ({ navigation }) => {

            const personName = navigation.state.params.person.name.first;
            return ({
                title: 'e',
                headerTitleStyle: {
                    color: 'white',
                    fontSize: 35,
                    flexGrow: 1,
                    textAlign: 'center'
                },
                    headerStyle : {
                        backgroundColor: '#f21667'
                    }
                
            })
        }
    },

    'PersonDetail': {
        screen: PersonDetail,
        navigationOptions: ({ navigation }) => {
            return ({
                title: 'Detalhes do contato',
                headerTitleStyle: {
                    color: 'white',
                    fontSize: 25,
                },
                headerStyle : {
                    backgroundColor: '#f21667'
                }
            
            })
        }
    }

},
   
)

const appContainer = createAppContainer(StackNavigator);

export default appContainer;

/**
 *
 *    defaultNavigationOptions: {
        title: 'Contatos',
        headerTitleStyle: {
            color: 'white',
            fontSize: 35,

 */