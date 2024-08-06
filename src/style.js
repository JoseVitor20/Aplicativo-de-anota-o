import { StyleSheet } from "react-native";

export default style = StyleSheet.create({
    header: {
        width: '100%',
        padding: 20,
        backgroundColor: 'rgb(92, 201, 196)'
    },

    anotacao: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 20,
        color: 'rgb(45, 45, 45)',
        marginTop: -3
    },

    btnAnotacao: {
        position: 'absolute',
        right: 40,
        bottom: 40,
        width: 50,
        height: 50,
        backgroundColor: 'rgb(92, 201, 196)',
        borderRadius: 25,
    },

    input: {
        width: '80%',
        height: 40,
        textAlignVertical: 'top',
        paddingTop: 8,
        paddingLeft: 8,
        borderColor: 'rgb(136, 136, 136)',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,
        marginVertical: 0,
        marginHorizontal: 'auto',
        marginTop: 20,
        color: 'rgb(77, 77, 77)'
    },

    btnSalvar: {
        position: 'absolute',
        right: 40,
        bottom: 40,
        width: 90,
        padding: 20,
        backgroundColor: 'rgb(92, 201, 196)',
        borderRadius: 5,
    },


    btnAnotacaoTexto: {
        color: 'white',
        position: 'relative',
        top: -3,
        textAlign: 'center',
        fontSize: 30,
    }
})
