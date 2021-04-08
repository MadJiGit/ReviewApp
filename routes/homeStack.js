import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';


const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Images',
        },
    },

    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Image',
        },
    },
    
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#ddd', height: 100 },
    }
});

// export default HomeStack;
export default createAppContainer(HomeStack);


 