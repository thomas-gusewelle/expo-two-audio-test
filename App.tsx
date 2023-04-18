import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Audio } from "expo-av"
import { useEffect, useRef, useState } from 'react';

export default function App() {

  const [audio, setAudio] = useState<Audio.Sound>()
  const audio1 = useRef(new Audio.Sound)
  const audio2 = useRef(new Audio.Sound)

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(require("./assets/SoundHelix-Song-1.mp3"))
    audio1.current = sound
    await audio1.current.playAsync()

  }
  async function playSound1() {
    const { sound } = await Audio.Sound.createAsync(require("./assets/SoundHelix-Song-1.mp3"))
    audio2.current = sound
    await audio2.current.playAsync()

  }


  // useEffect(() => {
  //   async function createAudio() {

  //     const { sound } = await Audio.Sound.createAsync(require("./assets/SoundHelix-Song-1.mp3"))
  //       setAudio(sound)
  //   }
  //   createAudio()
  // }, [])

  useEffect(() => {
    return audio ? () => {
      audio.unloadAsync()
    } : undefined
  }, [audio])

  return (
    <View style={styles.container}>
      <Button title="Play Sound" onPress={playSound} />
      <Button title='Stop Sound' onPress={() => { audio1.current.stopAsync() }} />
      <Button title="Play Sound 2" onPress={playSound1} />
      <Button title='Stop Sound' onPress={() => { audio2.current.stopAsync() }} />
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
  },
});
