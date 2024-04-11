import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, FlatList} from "react-native";
import {Audio} from "expo-av";
import MusicItem from "../components/MusicItem";

export default function Home({navigation}) {
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [musicData, setMusicData] = useState([]);
  const [currentSound, setCurrentSound] = useState(null);

  const togglePlayPause = async (item) => {
    if(currentSound && currentPlaying == item.id){
      await currentSound.pauseAsync();
      setCurrentPlaying(null);
      setCurrentSound(null);
    } else {
      if(currentSound){
        await currentSound.unloadAsync();
      }
      const {sound} = await Audio.Sound.createAsync(
        {uri: `http://10.0.2.2:3000/musics/${item.music_path}`},
        {shouldPlay: true}
      );
      setCurrentSound(sound);
      setCurrentPlaying(item.id);
    }
  };

  const item = {
    id: 1,
    title: "Highway to Hell",
    group: "AC/DC",
    album_image: "https://upload.wikimedia.org/wikipedia/pt/a/ac/Acdc_Highway_to_Hell.JPG",
    album: "Highwayto Hell",
    year: 1970,
    genre: "Heavy Metal",
  };

  useEffect(() => {
    fetch("http://10.0.2.2:3000/musics")
    .then((response => response.json()))
    .then((data => setMusicData(data)));
  },[]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212"/>
      <Text style={styles.title}>Minhas Músicas</Text>
      <FlatList 
      data={musicData} 
      keyExtractor={(item) => item.id.toString()} 
      renderItem={({item}) => (
        <MusicItem 
        isPlaying={currentPlaying === item.id} 
        music={item} navigation={navigation} 
        onPlayPause={() => togglePlayPause(item)}/>
      )}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 16,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    marginLeft: 20,
  }
})