import React, { Component, useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Alert
 } from 'react-native';

import {  TextInput, Button } from 'react-native-paper';
import axios from 'axios';

const api = {
  baseURL: "http://api.github.com",
  client_id:"3afe9b66c8f2616c7fe7",
  client_secret:"f6fbde64ca90b7564653323cfb1aa157f4c1d167"
}




export default function app() {

  

  const [githubuser, setGithubData] = useState({});
  
  useEffect(() => {
    
    console.log('use effect');
  });


  
  /**
   * botao deve retornar do user
   * avatar_url, login, public_repos(repositorios do usuario),location, id
   * followers(seguidores), following(seguindo)
  */

  return (
    <>
    <SafeAreaView style={styles.container}>
    
    <TextInput label="Usuário" name="user" onChangeText={(text) => console.log(text)} style={styles.textInput}> 
     
    </TextInput>
    
      <Button onPress={() => console.log('clicado')} style={styles.button, styles.bty}>
        <Text style={styles.buttonText} >Buscar</Text>
      </Button>
      
      <Button style={styles.button}>
        <Text style={styles.buttonText} >Historico</Text>
      </Button>
      
   
    </SafeAreaView>
    
    
    </>
    
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D3D3D3",
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
        
  },

  textInput: {
    width:"80%",  
    borderColor: 'purple', 
    alignSelf:'center', 
    borderWidth: 1,
    
   
      
  },

  button:{
    backgroundColor: 'purple',
    marginTop:20 ,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%'
  },

  buttonText:{
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFF',
    

  },
  bty:{
    backgroundColor: 'purple',
    marginTop:40 ,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginTop: 50
  }
  
  
});

