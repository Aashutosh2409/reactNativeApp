//import the library for making the component
import React from 'react';
import {Text, View} from 'react-native';
//make the component
const Header = (props) => {

    //thought process is using below code...we just remove duplicate reference to this 'styles object'
    const {textStyle,viewStyle}=styles; //destructing to reference style,...defining inside the component

    //if single line of return, then we dont need to add curly braces with semicolon
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headersText}</Text>
        </View>
    );
};
const styles =
    {//object peoperty
        viewStyle:{
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 15,
            height: 60,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2}, //how tall or wide shadow should be
            shadowOpacity: 1.5, //depth or darkness of shadow..

            elevation: 2,
            position: 'relative'
            // position: 'center';
        },
        //object property
        textStyle:{
            fontSize: 20
        }
    };
//make the component available to other parts of the app and reference it
export default Header;