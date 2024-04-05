import { View, Image, TouchableOpacity, Text} from "react-native";
import styles from "./styles";
import {FontAwesome} from '@expo/vector-icons';

export default function musicItem({music, onPlayPause, isPlaying, navigation}){
    return(
        <View style={styles.musicItem}>
            <Image source={{uri:`http://10.0.2.2:3000/assets/${music.album_image}`}} style={styles.albumImage}/>
            <View style={styles.musicInfo}>
                <TouchableOpacity onPress={() => {}}>
                    <View>
                        <Text style={isPlaying ? styles.playingTitle : styles.musicTitle}>
                            {music.title}
                        </Text>
                        <Text style={styles.musicGroup}>
                            {music.group}
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPlayPause}>
                    <FontAwesome name={isPlaying ? "pause" : "play"} color="#fff" size={16}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}