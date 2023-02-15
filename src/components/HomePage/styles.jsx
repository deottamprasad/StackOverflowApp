import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: "black",
        alignItems: "center",
    },
    filterView: {
        width: "94%",
        backgroundColor:"#61B15A",
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 5,
        // paddingTop: 5,
        // paddingBottom: 5,
        padding: 5,
    },
    filterButton: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    },
    dropDownComps: {
        flexDirection: "row",
        width: "90%",
        alignItems: "center",
    },
    flatListView: {
      paddingBottom: 50,
    },
    itemView: {
        backgroundColor: "white",
        justifyContent:"center",
        margin: 10,
        width: "94%",
        borderRadius: 20,
    },
    itemViewFirstContainer: {
        padding: 8,
    },
    quesTitleView: {
        
    },
    quesTitleText: {
        fontWeight: "bold",
        fontSize: 18,
        color: "black",
    },
    tagsView: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    tagsText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "black",
    },
    tagText: {
        marginRight: 10,
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 5,
        fontSize: 15,
        borderColor: "grey",
        borderWidth: 1,
        color: "black",
        borderRadius: 5,
    },
    quesView: {

    },
    OwnerText: {
        fontSize: 15,
        color: "black",
    },
    sortText: {
        color: "white",
    },
    orderText: {
        color: "white",
    },
    containerNoRes: {
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
    },
    noResText: {
        color: "white",
        fontSize: 15,
        marginBottom: 10,
    },
    backBtn: {
        marginTop: 10,
        borderRadius: 15,
        padding: 10,
        width: "40%",
        backgroundColor: "yellow",
        alignItems: "center",
    },
    backBtnText: {
        color: "black",
        fontWeight: "bold",
    },
    
})

export default styles;