import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    dropDown: {
        width: 95,
        height: 25,
        marginTop: 5,
        marginLeft: 3,
        marginRight: 3,
        paddingLeft: 10,
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "#FFFFEA",
        borderRadius: 5,
    },
    placeholderStyle: {
        fontSize: 10,
        color: "black",
    },
    selectedTextStyle: {
        fontSize: 15,
        color: "black",
    },
    itemTextStyle: {
        fontSize: 12,
        color: "black",
        alignItems: "center",
        justifyContent: "center",
        height: 20,
    },
    itemContainerStyle: {
        margin: 5,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default styles;