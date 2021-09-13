import React, {useEffect, useState} from 'react';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import { StyleSheet, TouchableOpacity, Picker, TextInput, Text, View, StatusBar } from 'react-native';
import { render } from 'react-dom';

 

export default function Register2({navigation, route}){
    const dados = require("../registros/registros_usuarios.json");
    const {nomeUser, sexoUser, idadeUser, cidadeUser, estadoUser, enderecoUser, telefoneUser} = route.params;
    const [senha, setSenha] = useState('');
    const [usuario, setUsuario] = useState('');
    const {getItem, setItem} = useAsyncStorage('');
    var stringVazia = '';
    const [usuarioInvalido, setUsuarioInvalido] = useState(false);
    const [senhaConfirmada, setSenhaConfirmada] = useState('');

    const carregarValor = async () => {
        const item = await getItem();
        setSenha(item); 
    }

    const guardarValor = async novaSenha => {
        await setItem(novaSenha);
        setSenha(novaSenha);
    }

    const guardarUsuario = async usuarioInformado => {
      await setItem(usuarioInformado);
      setUsuario(usuarioInformado);
    }


    useEffect(() => {carregarValor(); }, [])
  
    return(
    <View style={styles.container}>
      <Text style={styles.title}>Sing-Up</Text>  

      <View>
        <Text style={{color: 'white', fontSize: 16, marginHorizontal: 20}}>Criar Login</Text>
        <TextInput
          placeholder="Nome de suário"
          style={styles.textInput}
          onChangeText={usuarioInformado => guardarUsuario(usuarioInformado)}
        />
        {usuarioInvalido &&
          <Text style={{color: 'red', marginHorizontal: 20}}>Informe um usuário</Text>
        }
        
        <TextInput
          placeholder="Criar senha"
          style={styles.textInput}
          onChangeText={senhaInformada => guardarValor(senhaInformada)}
        />
        <TextInput
          placeholder="Confirmar senha"
          style={styles.textInput}
          onChangeText={senha2 => setSenhaConfirmada(senha2)}
        />
        {senha != senhaConfirmada &&
            <Text style={{color: 'red', marginHorizontal: 20}}>Senhas não coincidem</Text>

        }
       
      </View>
      <View style={styles.buttonContainer}> 
        <TouchableOpacity 
          style={styles.buttonFinish}
          onPress={() => {  
            if(senha == senhaConfirmada & usuario != stringVazia ){
              navigation.navigate("Login");
              dados.push({nome: nomeUser,sexo: sexoUser,idade: idadeUser, cidade: cidadeUser, estado: estadoUser, endereco: enderecoUser, telefone: telefoneUser, usuario: usuario, senha: senha});
          }
            if(usuario == stringVazia){
              setUsuarioInvalido(true);
            }  
            }}>
          <Text style={{color:'white', fontSize: 15, fontWeight: 'bold'}}>FINISH</Text>
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
  title: {
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
    flexDirection: 'row',
    marginTop: 300,
    marginHorizontal: 21,
    alignSelf: 'flex-end',
    justifyContent: 'space-around',
  },
  buttonFinish: {
    backgroundColor: 'midnightblue',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 40,
  },
})