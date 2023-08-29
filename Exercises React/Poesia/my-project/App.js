import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
    <View style={styles.container}>
      <Text style={styles.mb1}>Mobile coding</Text>
      <StatusBar style="auto" />

    </View>
    <View style={styles.poesia}>
      <Text style={styles.poesia}>Depois de tantos combates
o anjo bom matou o anjo mau
e jogou seu corpo no rio.
As água ficaram tintas
de um sangue que não descorava
e os peixes todos morreram.
Mas uma luz que ninguém soube
dizer de onde tinha vindo
apareceu para clarear o mundo,
e outro anjo pensou a ferida
do anjo batalhador.</Text>

    </View> 
    <View style={styles.autor}>
      <Text style={styles.postagens}>Autor:</Text>
      <Text style={styles.nome}>Carlos Drummond de Andrade</Text>

    </View>
    <View style={styles.cantor}>
      <Text style={styles.postagens}>Data de Falecimento:</Text>
      <Text style={styles.data}>17 de agosto de 1987</Text>

    </View>
    <View style={styles.famosa}>
      <Text style={styles.famosa}>Poesia mais famosa:</Text>
      <Text style={styles.nome}>Brejo das Almas</Text>

    </View>
    <View style={styles.foto}>
      <Text style={styles.foto}>Foto do artista</Text>

    </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink', 
    alignItems: 'center',
    justifyContent: 'center',
    margin:20,
  },

  mb1: {
    color: 'black',
    fontSize: 40,
  },
  famosa:{
    fontSize:20,
    paddingTop:40,

  },

  foto:{
    backgroundColor:'red',
    height:300,
    alignItems:'center',
    justifyContent:'center',
  },
});