import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  musicItem: {
    backgroundColor: "#212121",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 4,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 4,
  },
  musicItemButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  albumImage: {
    width: 72,
    height: 72,
    borderRadius: 4,
  },
  musicInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    flex: 1,
  },
  musicTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
  playingTitle: {
    color: "#1DB954",
    fontSize: 20,
    fontWeight: "700",
  },
  musicGroup: {
    color: "#b3b3b3",
    fontSize: 16,
  },
});

export default styles;
