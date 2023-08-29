import { StyleSheet, FlatList } from "react-native";
import { EmployeeListitem } from "../EmployeeListItem";

export function EmployeeList(props){
    return(
        <FlatList
            data={props.data}
            renderItem={({ item }) => (
                <EmployeeListitem name = {item.name} role={item.role} image={item.image}/>
            )}
                keyExtractor={item => item.key}
                style={styles.container}
            />
    );
}


const styles = StyleSheet.create({
    container:{
        margin: 20,
    },
});