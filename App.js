import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [position, setPosition] = useState(new Animated.Value(100));
  const [opacity, setOpacity] = useState(new Animated.Value(0));

  Animated.sequence([
    Animated.timing(
      position,
      {
        toValue: 0,
        duration: 1000,
      }
    ).start(),
    Animated.timing(
      opacity,
      {
        toValue: 1,
        duration: 1000
      }
    ).start()
  ])


  return (
    <View style={styles.container}>
      <Animated.View style={{
        width: '80%',
        height: 200,
        backgroundColor: '#999',
        borderRadius: 8,
        justifyContent: 'center', 
        alignItems: 'center',
        top: position,
        opacity: opacity
      }}>
        <Text>Animação usando Animated e useState</Text>
      </Animated.View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});