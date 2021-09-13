import React, { useState } from 'react';
import { TextInput, StyleSheet, TouchableOpacity, Text, View, StatusBar } from 'react-native';


export default function Login({navigation}){
  const dados = require("../registros/registros_usuarios.json");
  const [valido, setValido] = useState(true);
  const [user, setUser] = useState('');
  const [passw, setPassw] = useState('');

  return(
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.textLogo}>Air-Plus<Text style={{fontSize: 55}}>+</Text></Text>
        
      </View>
      <View>
        <TextInput
          placeholder="User"
          style={styles.textInput}
          onChangeText={userIn => setUser(userIn)}
        />
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          onChangeText={passwIn => setPassw(passwIn)}
        />
        { valido == false &&
          <Text style={{color: 'red', marginHorizontal: 20}}>Usuário ou senha inválidos!</Text>

        }
      </View>  
      <View style={styles.buttonsContainer}> 
        <TouchableOpacity 
          onPress={() => {
            dados.map((registro) => {
              if(registro.usuario == user && registro.senha == passw){
                navigation.navigate("Home", { 
                  nome: registro.nome, 
                  sexo: registro.sexo, 
                  idade: registro.idade,
                  cidade: registro.cidade,
                  estado: registro.estado,
                  endereco: registro.endereco,
                  telefone: registro.telefone,
                });
              }
              if(registro.usuario != user | registro.senha != passw){
                setValido(false);
              }
              
            })
          }}
          style={styles.buttonSingIn}
        >
          <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>SING IN</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate("Register")}
          style={styles.buttonSingUp}
        >
          <Text style={{color:'white', fontSize: 15, fontWeight: 'bold'}}>SING UP</Text>
        </TouchableOpacity>
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
  logoContainer: {
    flexDirection: 'row',
    margin: 20,
    marginTop: 50,
    marginBottom: 150,
  },
  buttonsContainer: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-around',
  },
  buttonSingIn: {
    backgroundColor: 'aqua',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 40,
  },
  buttonSingUp: {
    backgroundColor: 'midnightblue',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 40,
  },
  textLogo: {
    fontSize: 50,
    color: 'white',
    textShadowColor:'black',
    textShadowOffset:{width: 1, height: 1.5},
    textShadowRadius: 7,
  },
  itemContainer: {
    borderWidth: 1,
    margin: 2,
    borderRadius: 5,
    paddingHorizontal: 8,
    flex: 1,
  },
  textNome: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});