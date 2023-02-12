import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";


import { callbackSelection } from "../utilFunctions";


const DropdownList = (props) => {
    // const [value, setValue] = useState("");
    const handleChange = (item) => {
        props.setValue(item.value);
        let newQuesOrder = JSON.parse(JSON.stringify(props.ques));
        // console.log(item.value);
        // console.log(props.otherValue);
        if(!props.reverse)
            newQuesOrder.items.sort(callbackSelection(item.value,props.otherValue));
        else
            newQuesOrder.items.sort(callbackSelection(props.otherValue,item.value));
        // console.log(newQuesOrder.items.map((item)=>item.creation_date));
        // console.log(newQuesOrder.items.map((item)=>item.title));
        props.setQuesOrder(newQuesOrder);
    }
    return (
        <View style={styles.container} >
            <Dropdown 
            style={styles.dropDown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            itemTextStyle={styles.itemTextStyle}
            itemContainerStyle={styles.itemContainerStyle}
            data={props.data}
            maxHeight={70}
            placeholder="Select"
            labelField="label"
            valueField="value"
            value={props.value}
            autoScroll={false}
            onChange={handleChange}
            />
        </View>
    );
}

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

export default DropdownList;