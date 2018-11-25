import React from 'react';
import {Text,TouchableOpacity} from 'react-native';

//creating component
const Button = ({onPress1, children}) =>
{
    //destructure button styless.....
    const {buttonStyle,textStyle}=Styles;
    return (
        <TouchableOpacity onPress={onPress1} style={buttonStyle} >
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};
//creating object for css
const Styles = {
    textStyle:{
        fontSize:16,
        alignSelf: 'center',
        color: '#007aff',
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle :{
        flex:1,
        alignSelf: 'stretch',
        backgroundColor:'#fff',
        borderRadius:5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};
export default Button;