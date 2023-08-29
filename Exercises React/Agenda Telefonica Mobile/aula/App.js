import { StyleSheet, View } from 'react-native';
import { Header } from './src/components/Header';
import { EmployeeList } from './src/components/EmployeeList';


const data = ([
  {key: 1, name: 'Manuela Feitosa', role: 'Medica', image: require('./assets/umapessoa.jpg')},
  {key: 2, name: 'Josefina Souza', role: 'Engenheira', image: require('./assets/duaspessoas.jpg')},
  {key: 3, name: 'Marcos Joao', role: 'Cientista', image: require('./assets/trespessoas.jpg') },
  {key: 4, name: 'Junior Melo', role: 'Professor', image: require('./assets/quatropessoas.jpg')},
]);

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Agenda Telefônica"/>
      <EmployeeList data={data}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
  },
});
