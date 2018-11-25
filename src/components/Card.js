import React from 'react';
import { View } from 'react-native';
//creating component....when passing reference we have to use props..
const Card = (props) => {
    return (
        //props.children will get the "text" part from the "albumdetails" and will stick it there.....
        <View style={Styles.containerStyle}>
            {props.children}
        </View>
    );
};
//adding new object for styles... we can't create a new css file so we have to create in this file.
const Styles = {
    //we will give single property..name can be arbitrary
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2, //rounded corner
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1, //grey colorish
        shadowRadius: 2, //shadow corner
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,

    }
};

export default Card;