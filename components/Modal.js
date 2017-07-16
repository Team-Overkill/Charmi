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
  Modal
} from 'react-native';

export default class ModalExample extends React.Component {

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
         <View style={styles.containerStyleModal}>
          <View style={{marginTop: 62, paddingLeft:25, justifyContent: 'center'}}>
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
          <Text>Show Profile</Text>
        </TouchableHighlight>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  containerStyleModal : {
  
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  
  }
});
