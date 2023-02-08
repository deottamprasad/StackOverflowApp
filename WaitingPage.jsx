import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const WaitingPage = () => {
    const url = "data:image/png;base64,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";
    return (
        <View style={styles.waitingView} >
            <Image source={{uri:url}} style={styles.imageView} />
            <View style={styles.textView} >
                <Text style={styles.stkOverflowText} >
                    stack overflow
                </Text>
                <Text style={styles.loadingText} >
                    Loading...
                </Text>
            </View>
        </View>
    );
}

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

export default WaitingPage;