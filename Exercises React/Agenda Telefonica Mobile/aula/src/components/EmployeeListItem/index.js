import { StyleSheet,Text,View, Image } from "react-native";

export function EmployeeListitem(props){
    return(
        <View style={style.container}>
            <View style={style.image}>
                <Image style={style.imagePessoa} source={props.image}/>
            </View>

            <View style={style.informations}>
                <Text style={style.name}>{props.name}</Text>
                <Text style={style.role}>{props.role}</Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth:0.8,
    },
    informations:{
        justifyContent: 'center',
    },
    image:{
        borderRadius: 50,
        backgroundColor:'gray',
        height:50,
        width:50,
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagePessoa:{
        borderRadius: 50,
        backgroundColor:'gray',
        height:50,
        width:50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    name:{
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    role:{
        fontSize: 13,
        color: '#5a5a5a',
    }
});