import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import DatePicker from "react-native-date-picker";

import styles from "./styles";

const FiltersPage = ({navigation, route}) => {
    const [pageSize, setPageSize] = useState(0);
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [tagged, setTagged] = useState("");

    const [date, setDate] = useState(new Date()) //initial date for date picker
    const [fromOpen, setFromOpen] = useState(false) //determines if datepicker component to open or not
    const [toOpen, setToOpen] = useState(false); //same as above

    const handlePress = () => {
        const obj = {pgSize:pageSize,fromDate:fromDate,toDate:toDate,tagged:tagged};
        navigation.navigate('HomePage',obj);
    }

    const handleFromCalPress = () => {
        setFromOpen(true);
    }
    const handleToCalPress = () => {
        setToOpen(true);
    }
    const handleConfirm = (date) => {
        setDate(date)
        // console.log(date);
        if(fromOpen) {
            // console.log("fromOpen")
            setFromDate(JSON.stringify(date).slice(1,11));
            // console.log(fromDate);
            setFromOpen(false)
        }
        else {
            // console.log("toOpen")
            setToDate(JSON.stringify(date).slice(1,11));
            // console.log(toDate)
            setToOpen(false)
        }
    }
    const handleCancel = () => {
        setFromOpen(false);
        setToOpen(false)
    }

    return (
        <View style={styles.filterView} >
            <Text style={styles.catText}>Categories</Text>
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Page size"
                placeholderTextColor="black"
                onChangeText={(pageSize) => setPageSize(pageSize)}
                /> 
            </View> 
            <View style={styles.dateView}>
                <TextInput
                style={styles.TextInput}
                placeholder="From date"
                placeholderTextColor="black"
                value={fromDate}
                onChangeText={(fromDate) => setFromDate(fromDate)}
                /> 
                <TouchableOpacity style={styles.calImgView} onPress={handleFromCalPress}>
                    <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/1869/1869397.png"}} style={styles.calImg} />
                </TouchableOpacity>
            </View> 
            <View style={styles.dateView}>
                <TextInput
                style={styles.TextInput}
                placeholder="To date"
                placeholderTextColor="black"
                value={toDate}
                onChangeText={(toDate) => setToDate(toDate)}
                /> 
                <TouchableOpacity style={styles.calImgView} onPress={handleToCalPress}>
                    <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/1869/1869397.png"}} style={styles.calImg} />
                </TouchableOpacity>
            </View> 
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Tagged "
                placeholderTextColor="black"
                onChangeText={(tagged) => setTagged(tagged)}
                /> 
            </View> 
            <TouchableOpacity style={styles.searchBtn} onPress={handlePress}>
                <Text style={styles.searchTxt}>SEARCH </Text> 
            </TouchableOpacity> 
            <DatePicker
                modal
                open={fromOpen||toOpen}
                date={date}
                mode='date'
                onConfirm={handleConfirm}
                onCancel={handleCancel}
            />
        </View>
    );
}



export default FiltersPage;