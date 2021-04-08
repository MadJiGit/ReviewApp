import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import About from '../screens/about';

const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: 'About GameZone',
        },
    },    
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#ddd', height: 100 },
    }
});

// export default AboutStack;
export default createAppContainer(AboutStack);


 