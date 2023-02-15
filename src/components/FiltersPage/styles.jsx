import { StyleSheet } from "react-native";

const styles =  StyleSheet.create({
    filterView: {
        flex: 1,
        backgroundColor: "black",
        padding: 10,
        alignItems: "center",
    },
    catText: {
        color: "white",
        fontSize: 20,
    },
    inputView: {
        backgroundColor: "white",
        margin: 10,
        paddingLeft: 5,
        width: "94%",
        height: "11%",
        borderRadius: 10,
        justifyContent: "center",
    },
    TextInput: {
        color: "black",
    },
    dateView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        width: "94%",
        margin: 5,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 10,
    },
    calImgView: {

    },
    calImg: {
        width: 40,
        height: 40,
    },
    searchBtn: {
        backgroundColor: "#0081C9",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 7,
        paddingBottom: 7,
        marginTop: 10,
        width: "94%",
        borderRadius: 10,
    },
    searchTxt: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    }
});

export default styles;