import React, { Component } from 'react'
import {
    Image,
    Linking,
    Button,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Modal,
    TouchableHighlight
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class UserProfileScreen extends Component {
    static navigationOptions = {
        title: 'Links',
    };

    sayhi() {
        alert('hi')
    }

    render() {
        const userName = {
            name: 'Jimmy'
        }
        return (
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                <Text style={{ height: 30 }}>Charmi</Text>
                <View style={{ height: 70 }}>
                    <Text>{userName.name}</Text>
                    <View style={{ flex: 1, flexDirection: 'row', height: 50, justifyContent: 'space-between' }}>
                        <View>
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }} />
                        </View>
                        <View>
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }} />
                        </View>
                        <View>
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }} />
                        </View>
                        <View>
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }} />
                        </View>
                        <View>
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }} />
                        </View>
                    </View>
                </View>
                <View style={{ height: 80 }}>
                    <Text>About Me</Text>
                    <View style={styles.input}>
                        <TextInput
                            style={{ height: 70 }}
                            underlineColorAndroid="transparent"
                            multiline={true}
                            numberOfLines={4}
                        />
                    </View>
                </View>
                <View style={{ height: 50, marginTop: 15 }}>
                    <Text>Interests</Text>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={styles.input}>
                            <TextInput
                                style={{ width: 340, height: 40, marginRight: 10 }}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <Button onPress={this.sayhi} title="Add" />
                    </View>
                </View>
                <View style={{ height: 50, marginTop: 10 }}>
                    <View style={styles.input}>
                        <TextInput
                            style={{ height: 70 }}
                            underlineColorAndroid="transparent"
                            multiline={true}
                            numberOfLines={4}
                        />
                    </View>
                </View>
                <View style={{
                    marginTop: 25,
                    height: 55,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
                >
                    <View style={{ height: 40, width: 100 }}>
                        <Text>Age</Text>
                        <View style={styles.input}>
                            <TextInput underlineColorAndroid="transparent" />
                        </View>
                    </View>
                    <View style={{ height: 40, width: 300 }}>
                        <Text>Gender</Text>
                        <View style={styles.input}>
                            <TextInput underlineColorAndroid="transparent" />
                        </View>
                    </View>
                </View>
                <View style={{
                    height: 50,
                    borderColor: 'red',
                    borderWidth: 1,
                }}>
                    <Text>Relationship Level</Text>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View><Text>Just Looking</Text></View>
                        <View></View>
                        <View><Text>Marriage</Text></View>
                    </View>
                </View>
                <View style={{
                    height: 45,
                    borderColor: 'red',
                    borderWidth: 1,
                    marginTop: 10,
                }}>
                    <Text>Occupation</Text>
                    <View style={styles.input}>
                        <TextInput underlineColorAndroid="transparent" />
                    </View>
                </View>
                <View style={{
                    height: 45,
                    borderColor: 'red',
                    borderWidth: 1,
                    marginTop: 10,
                }}>
                    <Text>Occupation</Text>
                    <View style={styles.input}>
                        <TextInput underlineColorAndroid="transparent" />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    input: {
        borderColor: '#b6b6b6',
        borderWidth: 1,

        borderRadius: 2,
    },
});