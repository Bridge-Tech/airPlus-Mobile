import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, Picker, TextInput, Text, View, StatusBar } from 'react-native';

export default function Home({route, navigation}){
    const dados = require("../registros/registros_usuarios.json");
    const {nome, sexo, idade, cidade, estado, endereco, telefone} = route.params;
    const [nomeUser, setNomeUser] = useState(dados.find(n => n == nome));

    return(
        <View style={styles.container}>
            <View style={{alignItems: 'center', paddingTop: 50}}>
                <Text style={styles.nome}>{nome}</Text>  
            </View>
            <View style={styles.infosContainer}>
                <Text style={styles.infos}>Sexo: {sexo}</Text>
                <Text style={styles.infos}>Idade: {idade}</Text>
                <Text style={styles.infos}>Telefone: {telefone}</Text>
                <Text style={styles.infos}>Endereço: {endereco}, {cidade}, {estado}</Text>
            </View>
        <StatusBar style="dark-content"/>
        </View>
    );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'turquoise',
  },
  infos: {
      color: 'white',
      fontSize: 20,
  },
  infosContainer: { 
      marginHorizontal: 30, 
      backgroundColor: 'midnightblue',
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
    },
  nome: {
    fontSize: 50,
    color: 'white',
    textShadowColor:'black',
    textShadowOffset:{width: 1, height: 1.5},
    textShadowRadius: 7,
    margin: 20,
    marginBottom: 30,
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    height: 40,
    fontSize: 20,
    paddingHorizontal: 16,
    marginHorizontal: 20,
    marginTop: 10,
  },
  pickerContainer: {
    height: 40, 
    width: 210,
    padding: 2,
    fontSize: 40,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 10,
    },
    
  buttonContainer: {
    flexDirection: 'column',
    marginTop: 150,
    marginHorizontal: 21,
    alignSelf: 'flex-end',
    justifyContent: 'space-around',
  },
  buttonContinue: {
    //margin: 2,
    backgroundColor: 'midnightblue',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 30,
  },
})