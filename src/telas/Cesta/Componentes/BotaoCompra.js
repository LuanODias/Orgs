import React from "react";
import {TouchableOpacity, StyleSheet} from 'react-native';
import Texto from "../../../componentes/Texto";


export default function BotaoCompra({ botao }){
    return <>

    <TouchableOpacity style={estilos.botao}>
        <Texto style={estilos.textoBotao}>{ botao }</Texto>
    </TouchableOpacity>
    
    </>
}

const estilos = StyleSheet.create({
    botao:{
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6
    },
    textoBotao:{
        color:"#FFFFFF",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    }
})