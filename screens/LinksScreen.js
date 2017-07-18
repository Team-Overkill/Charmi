import React from 'react';
import { ScrollView, StyleSheet, ListView } from 'react-native';
import { List, ListItem } from 'react-native-elements'



const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
 
]
export default class LinksScreen extends React.Component {
constructor() {
    super();
    
    
  }
  componentWillMount() {
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

this.state = {
      dataSource: ds.cloneWithRows(list),
    };
  }
  static navigationOptions = {
    title: 'Matches',
  };
renderRow (rowData, sectionID) {
  return (
    <ListItem
      roundAvatar
      key={sectionID}
      title={rowData.name}
      subtitle={rowData.subtitle}
      avatar={{uri:rowData.avatar_url}}
    />
  )
}
  render() {
    return (
      <ScrollView style={styles.container}>
 <List>
      <ListView
        renderRow={this.renderRow}
        dataSource={this.state.dataSource}
      />
    </List>
     
        

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
