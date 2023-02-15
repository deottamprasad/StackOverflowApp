import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    answerView: {
        flex: 1,
        backgroundColor: "black",
        paddingTop: 10,
    },
    quesTitleView: {
        margin: 10,
    },
    quesTitleText: {
        color: "white",
        fontSize: 17,
        fontWeight: "bold",
    },
    totalAnsText: {
        color: "white",
        fontSize: 18,
        marginLeft: 10,
    },
    answersList: {
        margin: 10,
        backgroundColor: "#FFEE63", //AC9F3C
        padding: 10,
        borderRadius: 15,
    },
    dispNameText: {
        color: "black",
        fontSize: 18,
        fontWeight: "bold",
    },
    scoreText: {
        color: "black",
    },
    linkText: {
        color: "#9CFF2E",
        alignSelf: "center",
        fontSize: 15,
        marginBottom: 10,
    },
    noAnsView: {
        alignItems: "center",
        marginTop: 50,
    },
    text1: {
        color: "gold",
        fontSize: 15,
    },
    text2: {
        color: "gold",
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 10,
    }
})

export default styles;