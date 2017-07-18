import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TouchableHighlight,
  Dimensions

} from 'react-native';
import Deck from '../components/Deck';
import { Card, Button } from 'react-native-elements';
import { MonoText } from '../components/StyledText';
import { FontAwesome } from '@expo/vector-icons';
import { SwipeDeck } from 'react-native-elements';
// const DATA = [
//   { id: 1, text: 'Jenni, 28', uri: 'https://static.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg' },
//   { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
//   { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
//   { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
//   { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
//   { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
//   { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
//   { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
// ];

const DATA = [
  { id: 1, text: 'Amanda', age: 28, uri: 'http://f9view.com/wp-content/uploads/2013/10/American-Beautiful-Girls-Wallpapers-Hollywood-Celebs-1920x1200px.jpg' },
  { id: 2, text: 'Emma', age: 29, uri: 'https://i.imgur.com/FHxVpN4.jpg' },
  { id: 3, text: 'Scarlett', age: 25, uri: 'https://i.ytimg.com/vi/GOJZ5TIlc3M/maxresdefault.jpg' },
  { id: 4, text: 'Keira', age: 27, uri: 'http://www.bdprimeit.com/wp-content/uploads/Keira-Knightley-Most-beautiful-Hollywood-actress.jpg' },
  { id: 5, text: 'Ashley', age: 30, uri: 'https://s-media-cache-ak0.pinimg.com/736x/4c/89/67/4c8967fac1822eeddf09670565430fd5.jpg' },
  { id: 6, text: 'Jennifer', age: 24, uri: 'https://2.bp.blogspot.com/-Vy0NVWhQfKo/Ubma2Mx2YTI/AAAAAAAAH3s/LC_u8LRfm8o/s1600/aimee-teegarden-04.jpg' },
  { id: 7, text: 'Sarah', age: 28, uri: 'https://s-media-cache-ak0.pinimg.com/736x/41/75/26/4175268906d97492e4a3175eab95c0f5.jpg' },
];

class ModalExample extends React.Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
          <View>
            <Text>This is my Profile</Text>
            <Text>About Me: I am so cool</Text>
            <Text>From: Utah</Text>
            <Text>This is lame need ot put a header and ....</Text>

            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text style={{width: 205, marginTop: 62, marginRight: 55, padding:25, backgroundColor: '#1A20FF'}}>Close Profile</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text style={styles.profileButton}>View Profile<FontAwesome
            name={'user-circle'}
            size={32}
           /></Text>
        </TouchableHighlight>

      </View>
    );
  }
}
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
renderCard(card) {
  return (
    <Card
      key={card.id}
      containerStyle={{borderRadius: 10, width: Dimensions.get('window').width * 0.92, height: Dimensions.get('window').height - 165}}
      featuredTitle={`${card.text}, ${card.age}`}
      featuredTitleStyle={{position: 'absolute', left: 15, bottom: 10, fontSize: 30 }}
      image={{ uri: card.uri }}
      imageStyle={{borderRadius: 10, width: Dimensions.get('window').width * 0.915, height: Dimensions.get('window').height - 165}}
    />
  )
}
onSwipeRight(card) {
  alert("Card liked: " + card.text);
}

onSwipeLeft(card) {
  alert("Card disliked: " + card.text);
}

 renderNoMoreCards() {
  return (
    <Card
      containerStyle={{borderRadius: 10, width: Dimensions.get('window').width * 0.92, height: Dimensions.get('window').height - 165}}
      featuredTitle="No more cards"
      featuredTitleStyle={{fontSize: 25}}
      image={{ uri: 'https://i.imgflip.com/1j2oed.jpg' }}
      imageStyle={{borderRadius: 10, width: Dimensions.get('window').width * 0.915, height: Dimensions.get('window').height - 165}}
    />
  )
}
  render() {
    return (
      
<View>
  <View style={styles.viewStyle}>
      <Text >Charmi</Text>
    </View>
  <View style={styles.container}>
        <SwipeDeck
  data={DATA}
  renderCard={this.renderCard}
  renderNoMoreCards={this.renderNoMoreCards}
  onSwipeRight={this.onSwipeRight}
  onSwipeLeft={this.onSwipeLeft}
/>
      </View>
  
</View>
          
        
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will run slightly slower but
          you have access to useful development tools. {learnMoreButton}.
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    Linking.openURL(
      'https://docs.expo.io/versions/latest/guides/development-mode'
    );
  };

  _handleHelpPress = () => {
    Linking.openURL(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 15,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 80,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 140,
    height: 38,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 23,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
   viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  profileButton: {
    padding: 25,
    backgroundColor:"#03A9F4",
    justifyContent: 'center',
    flex: 1,
    
  }
});