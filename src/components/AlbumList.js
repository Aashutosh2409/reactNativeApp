import React , {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

//creating functional component
// const AlbumList = () => {
// return (
//     <View>
//         <Text>Album List</Text>
//     </View>
// );
// };

//creating class based component from functional component
class AlbumList extends Component{

    //the format is for initializing, not modification....modification is done on setState();
    state = { albums: []};
    componentWillMount() {
        // console.log('component will mount in AlbumList');
        // debugger;//chrome will hit there and pause it

        // requesting http request we need to install library 'npm install  --save axios and then import it'

        // axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        //     .then(response => console.log(response));

        //now we have to figure how the app will re-render itself with new list of data...so we make use of state
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({albums: response.data})); //in chrome we get list of data in 'response.data'
        //setState is used to update state and tell the app to re-render after new data has been fetched....
    }
//mapping.....
    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} record={album} />
        );
    }

    render(){
        // console.log(this.state);
        return(
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;