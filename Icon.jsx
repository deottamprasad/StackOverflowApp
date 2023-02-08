import React, {useState} from "react";
import {View, Image, Text, StyleSheet} from "react-native";


const Icon = (props) => {
    const [isAns, setIsAns] = useState(props.isAnswered)
    const correctUri = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEpwEa1IocYuZzZx3GF6p8h6NYsGarg9BXrjt5HuLbnPJSswcrnkZKB2BRaYP4XXGEDAI&usqp=CAU";
    const wrongUri = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdaTG29XhBPYWwC6fIxFzLwORImFAkp7oHfg&usqp=CAU";
    if(isAns) {
        return (
            <View style={styles.iconView} >
                <Image source={{uri:correctUri}} style={styles.iconImg} />
                <Text style={[styles.iconText, {color:props.colour}]} > {props.accOrAns}</Text>
            </View>
        )
    }
    else {
        return (
            <View style={styles.iconView} >
                <Image source={{uri:wrongUri}} style={styles.iconImg} />
                <Text style={[styles.iconText, {color:props.colour}]} > Not {props.accOrAns}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    iconView: {
        marginTop: 3,
        flexDirection: "row",
    },
    iconImg: {
        height: 20,
        width: 20,
        borderRadius: 5,
    },
    iconText: {
        fontSize: 15,
    }
});

export default Icon;