import {Text, View, StyleSheet} from "react-native";

export default function musicDetails(){
    return(
        <View>
            <Text>Detalhes das músicas</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#121212",
      alignItems: "center",
      paddingTop: 60,
    },
    backButton: {
      position: "absolute",
      top: 20,
      left: 20,
    },
    albumImage: {
      width: 300,
      height: 300,
      borderRadius: 25,
      marginVertical: 30,
    },
    detailsInfo: {
      alignItems: "center",
      paddingHorizontal: 20,
    },
    musicTitle: {
      color: "#fff",
      fontSize: 32,
      fontWeight: "bold",
      marginVertical: 15,
    },
    musicGroup: {
      color: "#b3b3b3",
      fontSize: 24,
      marginBottom: 25,
    },
    iconContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 10,
    },
    musicDetails: {
      color: "#fff",
      fontWeight: "600",
      fontSize: 16,
      marginLeft: 15,
    },
  });