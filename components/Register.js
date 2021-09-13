import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, Picker, TextInput, Text, View, StatusBar } from 'react-native';

 

export default function Register({navigation}){
  const dados = require("../registros/registros_usuarios.json");
  const [sexos, setSexos] = useState(['Masculino', 'Feminino'])
  const [sexoSelecionado, setSexoSelecionado] = useState([])
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [idade, setIdade] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');


  return(
    <View style={styles.container}>
      <Text style={styles.title}>Sing-Up</Text>  

      <View>
        <Text style={{color: 'white', fontSize: 16, marginHorizontal: 20}}>Informações pessoais</Text>
        <TextInput
          placeholder="Nome completo"
          style={styles.textInput}
          onChangeText={nomeIn => setNomeCompleto(nomeIn)}
        />
        
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={sexoSelecionado}
              style={{flex: 1}}
              onValueChange={(itemValue) => 
                setSexoSelecionado(itemValue)
            }>
              {
                sexos.map(sx => {
                  return <Picker.Item label={sx} value={sx}/>
                })
              }
            </Picker>
          </View>
          <TextInput
            placeholder="Idade"
            style={styles.textInput}
            onChangeText={idadeIn => setIdade(idadeIn)}
          />
        </View>    
        <TextInput
          placeholder="Cidade"
          style={styles.textInput}
          onChangeText={cidadeIn => setCidade(cidadeIn)}
        />
        <TextInput
          placeholder="Estado"
          style={styles.textInput}
          onChangeText={estadoIn => setEstado(estadoIn)}
        />
        <TextInput
          placeholder="Endereço"
          style={styles.textInput}
          onChangeText={enderecoIn => setEndereco(enderecoIn)}
        />
        <TextInput
          placeholder="Telefone"
          style={styles.textInput}
          onChangeText={telefoneIn => setTelefone(telefoneIn)}
        />
      </View>
      <View style={styles.buttonContainer}> 
        <TouchableOpacity 
          style={styles.buttonContinue}
          onPress={() => {
            navigation.navigate("Register2", {
              nomeUser: nomeCompleto,
              sexoUser: sexoSelecionado,
              idadeUser: idade,
              cidadeUser: cidade,
              estadoUser: estado,
              telefoneUser: telefone
              })}}>
          
          <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>CONTINUE</Text>
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