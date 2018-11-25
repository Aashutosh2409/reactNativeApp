import React from 'react';
import {View} from 'react-native';
//creating component...just basic information so we can use functional component...
const CardSection = (props) => {
    return(
        <View style={Design.containerStyle}>
            {props.children}
        </View>
    );
};
//creating new object for style
const Design = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};


export default CardSection;