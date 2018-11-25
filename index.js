/** @format */
//importing all libraries
import React from 'react';
import { AppRegistry, View } from 'react-native';
import {name as appName} from './app.json';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
//creating components
const App = () => (
    //we need view so that we can show two component...otherwise we can only show one component with return
    <View style={{flex: 1}}>
        <Header headersText={'Albums'}/>
        <AlbumList/>
    </View>
);


AppRegistry.registerComponent('reactBasic', () => App);
