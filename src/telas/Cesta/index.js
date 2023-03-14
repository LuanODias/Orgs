import React from "react";
import { StyleSheet ,View, FlatList} from "react-native";


import Topo from './Componentes/Topo';
import Detalhes from "./Componentes/Detalhes";
import BotaoCompra from "./Componentes/BotaoCompra";
import Item from "./Componentes/Item";
import Texto from "../../componentes/Texto";



    export default function Cesta({topo, detalhes, botaoCompra, itens}){
    return <>

        <FlatList 
        data={itens.lista} 
        renderItem={Item}
        keyExtractor= {({ nome }) => nome}
        ListHeaderComponent = {() => {
            return <>
        <Topo {...topo}/>
    
    <View style={estilos.cesta}>
    
        <Detalhes {...detalhes}/>
        <BotaoCompra {...botaoCompra}/>
        <Texto style={estilos.titulo}>{itens.titulo}</Texto>
    </View>
            </>
        }
    }
/>
    
</>
}

const estilos = StyleSheet.create({
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    titulo:{
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    }
});