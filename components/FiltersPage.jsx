import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import DatePicker from "react-native-date-picker";

const FiltersPage = ({navigation, route}) => {
    const [pageSize, setPageSize] = useState(0);
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [tagged, setTagged] = useState("");

    const [date, setDate] = useState(new Date())
    const [fromOpen, setFromOpen] = useState(false)
    const [toOpen, setToOpen] = useState(false);

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
                <Text style={styles.searchTxt}>SEARCH</Text> 
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

export default FiltersPage;