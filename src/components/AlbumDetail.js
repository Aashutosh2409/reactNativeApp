import React from 'react';
import {Text, View, Image, Linking} from 'react-native';

import Card from './Card';

import CardSection from './CardSection';

import Button from './button';

//why functionalComponent??....since we are using just to show representation to the user...
//since we have got more 3 reference to album so we will de-structure props
const AlbumDetails = ({record})=> {
    const {title,artist,thumbnail_image, image, url} =record;
//since we were referencing 2 style object...we can de-structure that as well...its totally optional
//     const {textStyle,imageStyle,thumbnailContainerStyle} = styles1;
    return(
        <Card>
            <CardSection>
                <View style={styles1.thumbnailContainerStyle}>
                    <Image style={styles1.imageStyle}
                           source={{uri: thumbnail_image}} ></Image>
                </View>
                <View style={styles1.textStyle}>
                    <Text style={styles1.headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={styles1.imageStyle2} source={{uri: image}}></Image>
            </CardSection>
            <CardSection>
                <Button onPress1={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};
//creating object for css...
const styles1 = {
    textStyle:{
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle:{
        fontSize:18
    },
    imageStyle:{
        height: 50,
        width: 50
    },
    thumbnailContainerStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle2:{
        height:300,
        flex:1,
        width:null
    }
};
export default AlbumDetails;