import React from 'react';
import {
    createStackNavigator
} from 'react-navigation';
import Search from './components/Search';
import Results from './components/Results';

const Navigator = createStackNavigator({
    Home: {
        screen: Search,
    },
    Results: {
        screen: Results,
    },
}, {
    initialRouteName: 'Home',
});

export default class App extends React.Component {
    render() {
        return <Navigator / > ;
    }
}