import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Pressable, TextInput } from 'react-native';
import StatusBar from './StatusBar';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <View style={styles.topBar.bar}>
        <Image style={styles.topBar.image} source={require("./resources/icon.png")}></Image>
        <Text style={styles.topBar.text}>Sound Fuision</Text>
        <Pressable onPress={()=>{}}>
          <Image style={styles.topBar.image} source={require("./resources/settings.png")}></Image>
        </Pressable>
      </View>
      <View style={styles.mainContent.content}>
        <TextInput style={styles.mainContent.search} placeholder="Search..." placeholderTextColor="#999"/>
      </View>
      <View style={styles.bottomBar.bar}>
        <Text>Bottombar</Text>
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
      width: 44,
      height: 44,
      borderRadius: 25,
      margin: 3,
    },
    text: {
      color: "white",
    },
  },
  mainContent: {
    text: {
      color: "white",
    },
    content: {
      flex: 1,
      width: "100%",
      padding: 5
    },
    search: {
      color: "white",
      padding: 5,
      backgroundColor: "#009",
      borderRadius: 50,
      height: 50,
      paddingHorizontal: 20,
    }
  },
  bottomBar: {
    bar: {
      height: 50,
      backgroundColor: "#004",
      width: "100%"
    }
  }
});
