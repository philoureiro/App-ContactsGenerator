import React, { Component, useState } from 'react';
import { Button, Text, View, ActivityIndicator, StyleSheet, Alert } from 'react-native';
import Header from '../components/Header';
import axios from 'axios';
import PeopleList from '../components/PeopleList';
import PersonDetail from '../Screens/PersonDetail';

type Props = {};

export default class PeoplePage extends Component<Props> {
 
  
  //sobrescrevendo método construtor
  constructor(props) {
    super(props);//herdando a classe pai

    //cria um array que armazenara o estado
    this.state = {
      people: [], //armazena os dados da requisicao axios
      loading: false, //armazena estado da aplicação
      error: false, //armazena os erros
      numContact: 0 //armazena o numero de contatos que serão gerados, padrão = 0
      
    };
  };


  //
  componentDidMount() { 
    //recupera o paramentro passado da tela inicial e armazena em num
    const  num  = (this.props.navigation.getParam('value'));
    this.setState({ loading: true }) //alteramos o estado para carregando

    //requisição https buscando na api o numero de contatos desejados
   axios.get(`https://randomuser.me/api/?nat=br&results=${num}`).then((response) => { 
    const { results } = response.data; //salva dentro de results tudo o que baixou da requisição
      this.setState({
        people: results, //armazena o resultado dentro de pessoas
        loading: false, //carregamento concluido, podemos continuar...
        numContact: num
      })
     
    }).catch((error) => {
      this.setState({
        error: true,
        loading: false,
      })
    });
  }

  

  //renderiza a lista das pessoas passando o objeto people armazenado no estado para dentro do componente
  //cria um objeto chamado onPressItem, cujo terá uma função que recebe paramentros
  //e pega esses paramentros e redireciona para uma tela passando os mesmos para a nova tela que será renderizada
  render() {
     //recupera o paramentro passado da tela inicial e armazena em num
    //this.setState({numContact: num})
   // console.log(`RENDER => Espera ${num} + estado armazenado =====> ` + this.state.numContact)

    return (
      <View style={styles.container}>
        {
          this.state.loading ? <ActivityIndicator size='large' color='#000'></ActivityIndicator>
            :
            this.state.error ?
              <Text style={styles.error}>Erro ao carregar lista de contatos!</Text>
              :
              <PeopleList people={this.state.people}
                onPressItem={(params) => this.props.navigation.navigate('PersonDetail', params)}></PeopleList>
        }
      </View>
    )
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  error: {
    fontSize: 20,
    justifyContent: 'center',
    color: 'red',
    alignSelf: 'center'

  }
});


