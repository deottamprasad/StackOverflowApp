import React from "react";
import { View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";


import { callbackSelection } from "../../Utilities/utilFunctions";

import styles from "./styles";


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



export default DropdownList;