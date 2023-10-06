import {  } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image, Button, Pressable } from 'react-native';
import StatusBar from './StatusBar';

export default function App() {
  let [test, setTest] = useState("Sound Fuision")
  function setter(){
    setTest("abc")
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <View style={styles.topBar.bar}>
        <Image style={styles.topBar.image} source={require("./resources/icon.png")}></Image>
        <Text style={styles.topBar.text}>{test}</Text>
        <Pressable onPress={setter}>
          <Image style={styles.topBar.image} source={require("./resources/settings.png")}></Image>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002',
    alignItems: 'center'
  },
  topBar: {
    bar: {
      height: 50,
      width: "100%",
      backgroundColor: "#004",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: 'space-between',
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 25
    },
    text: {
      color: "white",
    },
  },
});
