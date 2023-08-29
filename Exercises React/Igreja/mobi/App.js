import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function App() {
  return (
    <View>
    <View style={styles.container}>
      <Text style={styles.titulo}>Igreja Católica</Text> 
      <Text style={styles.titulo2}>Padre Sicrano</Text> 
      <FontAwesome5 style={styles.icone} name="church" size={35} color="black" />
      <StatusBar style="auto" />
      </View>
      <View style={styles.container2}>
        <Text style={styles.chat1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium viverra suspendisse potenti nullam.</Text>  
       <FontAwesome5 style={styles.icone2} name="bible" size={15} color="black" />
      <FontAwesome5 name="cross" size={15} color="black" />
      </View>
      <View style={styles.container2}>
        <Text style={styles.chat1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium viverra suspendisse potenti nullam.</Text>
       <FontAwesome5 style={styles.icone2} name="bible" size={15} color="black" />
        <FontAwesome5 name="cross" size={15} color="black" />
      </View>

      <View style={styles.container2}>
      <Text style={styles.chat1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium viverra suspendisse potenti nullam.</Text>
     <FontAwesome5 style={styles.icone2} name="bible" size={15} color="black" />
        <FontAwesome5 name="cross" size={15} color="black" />
      </View>
      <View style={styles.container2}>
      <Text style={styles.chat1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium viverra suspendisse potenti nullam.</Text>
       <FontAwesome5 style={styles.icone2} name="bible" size={15} color="black" />
        <FontAwesome5 name="cross" size={15} color="black" />
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap-reverse',
    paddingTop: 25,
    flexDirection: 'column',
    alignItems: 'flex-start',
    maxHeight: 100,
    backgroundColor: 'lightgray',
    margin: 10,
    marginTop: 25,
    width: 360,
    borderRadius: 10,
  },

  titulo: {
    fontSize: 30,
    marginLeft: 30,
    
  },
  titulo2: {
    marginLeft: 123,
    paddingBottom: 18,
  },

  icone: {
    marginLeft: 60,
    paddingBottom: 18,
  },

  container2: {
    maxHeight: 150,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'lightgray',
    alignSelf: 'center',
    flexDirection: 'column',
    margin: 10,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 6,
    
  },

  chat1: {
    fontSize: 16,
    maxWidth: 300,
  },
  
  icone2: {
    margin: 5,
  }
});
