import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';


const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Home Screen' />,
            }
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

export default HomeStack;
// export default createAppContainer(HomeStack);


 