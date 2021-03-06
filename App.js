import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading  from 'expo-app-loading';
import Navigator from './routes/drawer';

const getFonts = () => Font.loadAsync({
	'nunito-regular': require('./assets/fonts/NunitoSans-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/NunitoSans-Bold.ttf')
});

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	if(fontsLoaded){
		return (
			<Navigator />
		);
	} else {
		return ( 
			<AppLoading 
				startAsync={getFonts}
				// May be onFinish={() => setFontsLoaded(true)}
				onFinish={() => setFontsLoaded({isReady: true })}
				onError={console.warn}
			/>
		);
	}
} 