import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    waitingView: {
        flex:1,
        backgroundColor: "gold",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    imageView: {
        height: 60,
        width: 50,
        marginRight: 10,
        top: 5,
    },
    stkOverflowText: {
        fontSize: 35,
        color: "black",
        fontWeight: "bold",
    },
    loadingText: {
        fontSize:15,
        color: "black",
    }
})

export default styles;