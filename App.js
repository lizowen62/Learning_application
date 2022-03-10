import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Animated, Image, TouchableOpacity } from 'react-native';

export default function App() {

  const flat = React.useRef()
  const scrollX = React.useRef(new Animated.Value(0)).current;

  function render() {
    return (
      <View>
        <Animated.FlatList
        ref={flat}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        snapToInterval="40px"
        decelerationRate="fast"
        renderItem={({item}) => {
          return (
            <View>
              <Text>lol</Text>
            </View>
          )
        }}
        keyExtractor
        onScroll={
          Animated.event([
            { nativeEvent: {contentOffset: {x: scrollX}} }
          ],
          {
            useNativeDriver: false
          })
        }>
        </Animated.FlatList>
      </View>
    )

  }

  return (
    <View style={styles.container}>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
