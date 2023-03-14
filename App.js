import { StatusBar, SafeAreaView, View } from 'react-native';
import React from 'react';
import Cesta from './src/telas/Cesta'; 

//Importação da fonte utilizada no projeto, usando o google fonts
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

//Importação do loading splash do projeto
import AppLoading from 'expo-app-loading';

//Aprendizado do mock, acessar a pasta mocks para vizualizar a simplificação dos textos do projeto
import mock from './src/mocks/cesta'


export default function App() {

  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  })

  if(!fonteCarregada){
    return <AppLoading/>
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar/>
      <Cesta {...mock}/>  
    </SafeAreaView>
  );
}
