import { useEffect, useState } from "react";
import { Text, View, StyleSheet, StatusBar, TextInput, FlatList, Image } from "react-native";

export default function Search(){
    const [musicData, setMusicData] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetch("http://10.0.2.2:3000/musics")
        .then((response => response.json()))
        .then((data => setMusicData(data)));
      },[]);

    const filteredMusic = query ? 
    musicData.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))
    : musicData;

    return(
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#121212"/>
            <TextInput
            style={styles.searchInput} 
            placeholder="Pesquisar músicas"
            placeholderTextColor="#cccccc"
            value={query}
            onChangeText={(text) => setQuery(text)}
            />
            <FlatList
            data={filteredMusic} 
            keyExtractor={(item) => item.id.toString()} 
            renderItem={({item}) => (
                <View style={styles.itemContainer}>
                    <Image 
                    style={styles.albumImage}
                    source={{uri:`http://10.0.2.2:3000/assets/${item.album_image}`}}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.detailText}>{item.title}</Text>
                        <Text style={styles.detailText}>{item.group}</Text>
                        <Text style={styles.detailText}>{item.year}</Text>
                        <Text style={styles.detailText}>{item.genre}</Text>
                    </View>
                </View>
            )}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#121212",
      paddingTop: 16,
    },
    searchInput: {
      height: 50,
      backgroundColor: "#2C2C2C",
      borderRadius: 6,
      padding: 10,
      color: "#ffffff",
      fontSize: 16,
      marginHorizontal: 20,
      marginBottom: 20,
    },
    noResultsText: {
      color: "#fff",
      fontSize: 18,
      textAlign: "center",
      marginTop: 20,
    },
    itemContainer: {
      flexDirection: "row",
      marginBottom: 20,
      backgroundColor: "#333333",
      borderRadius: 6,
      overflow: "hidden",
    },
    albumImage: {
      width: 100,
      height: 100,
    },
    textContainer: {
      flex: 1,
      padding: 10,
    },
    titleText: {
      color: "#ffffff",
      fontSize: 16,
      fontWeight: "bold",
    },
    detailText: {
      color: "#dddddd",
      fontSize: 14,
    },
  });