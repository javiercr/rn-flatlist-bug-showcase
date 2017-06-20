import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const data = []
for (var index = 0; index < 500; index++) {
  data.push({key: index})
}

export default class App extends React.Component {

  onViewableItemsChanged = ({ viewableItems, changed }) => {
    console.log("####  viewableItems #### ");
    console.log(viewableItems.map((item) => item.key));
    console.log("#### changed #### ");
    changed.map((item) => console.log(`[${item.key}] isViewable = ${item.isViewable}`));
  };
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          style={styles.list}
          onViewableItemsChanged={this.onViewableItemsChanged}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },
  item: {
    fontSize: 200,
    flex: 1,
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#ccc',
    marginVertical: 10
  }
});
