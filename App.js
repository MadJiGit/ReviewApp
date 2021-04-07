import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import AppLoading  from 'expo-app-loading';

const getFonts = () => Font.loadAsync({
		'nunito-regular': require('./assets/fonts/NunitoSans-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/NunitoSans-Bold.ttf')
});

export default function App() {
  // loadAsync is not work correctly
	// const [fontsLoaded, setFontsLoaded] = useState(false);

  // if(fontsLoaded){
  //   return (
  //     <Home />
  //   );
  // } else {
  //   return ( 
  //     <AppLoading 
  //       startAsync={getFonts}
  //       onFinish={() => setFontsLoaded( {isReady: true })}
  //     />
  //   );
  // }

  return (
    <Home />
  );
} 