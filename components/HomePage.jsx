import React, { useEffect, useState } from "react";
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Button} from "react-native";


import WaitingPage from "./WaitingPage";
import Icon from "./Icon"
import DropdownList from "./DropdownList";

import { dateConverter } from "../utilFunctions";
import { sortItems, orderByItems } from "../dataConstants";


const Item = (props) => {
    const handlePress = () => {
        props.navigation.navigate('AnswerPage',{ques_id: props.item.question_id, link: props.item.link, quesTitle:props.item.title, is_answered:props.item.is_answered})
        // console.log(props.item.is_answered);
    }
    return(
        <View style={styles.itemView} on>
            <TouchableOpacity onPress={handlePress}>
            <View style={styles.itemViewFirstContainer}>
            <View style={styles.quesTitleView} >
                {/* <Text style={styles.quesTitleText}>{props.index+1}. {props.item.title}</Text> */}
                <Text style={styles.quesTitleText}>{props.index+1}. {props.item.title.slice(0,70) } {
                    props.item.title.length>70?"...":null
                    }</Text>
            </View>
          <View style={styles.tagsView} >
          <Text style={styles.tagsText}>Tags: </Text>
            {
                props.item.tags.map((tag, ind) => {
                    return <Text key={ind} style={styles.tagText}>{tag}</Text>
                })
            }
          </View> 
           <View style={styles.quesView}>
            <Text style={styles.OwnerText} >
                From : {props.item.owner.display_name}
            </Text>
            <Text style={styles.OwnerText} >
                Creation date : {dateConverter(props.item.creation_date)}
            </Text>
            <Icon isAnswered={props.item.is_answered} accOrAns="Answered" colour="black" />
            </View>
            </View>
        {/* <View style={styles.answerView} >
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.answerButton}>View Answer</Text> 
        </TouchableOpacity> 
        </View> */}
        </TouchableOpacity>
        </View>
    );
}
const dummyUrl = "https://mocki.io/v1/2f8eda30-17c1-4161-9348-77828e1fa01b"


const HomePage = ({navigation, route}) => {
    const realUrl = "https://api.stackexchange.com/2.3/questions?pagesize=10&order=desc&sort=activity&site=stackoverflow";
    const [data, setData] = useState({});
    const [url, setUrl] = useState(realUrl);
    const [sortValue, setSortValue] = useState("");
    const [orderValue, setOrderValue] = useState("asc");
    // console.log(sortValue);
    // console.log(orderValue);
    if(route&&route.params) {
        // console.log(route.params);
        //change the below url according to route.params
        const {pgSize, fromDate, toDate, tagged} = route.params;
        const newPgSize = pgSize || 1;
        const newFromDate = fromDate ? JSON.stringify(Date.parse(fromDate)).slice(0,-3) : "";
        const newToDate = toDate ? JSON.stringify(Date.parse(toDate)).slice(0,-3) : "";
        // console.log(newFromDate);
        // console.log(newToDate);
        // console.log(route.params);
        const newUrl = "https://api.stackexchange.com/2.3/questions?pagesize="+newPgSize+"&fromdate="+newFromDate+"&todate="+newToDate+"&order=desc&sort=activity&tagged="+tagged+"&site=stackoverflow"
        // console.log(newUrl);
        setUrl(newUrl);
        route.params=false;
        route=false;
    }
    useEffect(() => {
        setData({});
        fetch(url).then((res)=>res.json()).then((d)=>setData(d)).catch((e)=>console.log(e));
        
      },[url]);
    if(!data.items) {    
        return <WaitingPage />
    }
    else if(data.items.length==0) {
        return (
            <View style={styles.containerNoRes} >
                <Text style={styles.noResText}> No results found</Text>
                <TouchableOpacity style={styles.backBtn} >
                    <Text style={styles.backBtnText} onPress={() => navigation.navigate("FiltersPage")} >Go back</Text>
                </TouchableOpacity>
            </View>
        )
    }
    else {
        const handleFilter = () => {
            navigation.navigate('FiltersPage');
        }
        return (
            <View style={styles.container} >
                <TouchableOpacity onPress={handleFilter} style={styles.filterView}>
                    <Text style={styles.filterButton}>Filter</Text> 
                </TouchableOpacity> 
                <View style={styles.dropDownComps} >
                    <Text style={styles.sortText} >sort</Text>
                    <DropdownList data={sortItems} value={sortValue} setValue={setSortValue} ques={data} setQuesOrder={setData} otherValue={orderValue} 
                    reverse={false}/>
                    <Text style={styles.orderText} >order</Text>
                    <DropdownList data={orderByItems} value={orderValue} setValue={setOrderValue} ques={data} setQuesOrder={setData} otherValue={sortValue}
                    reverse={true}/>
                </View>
                <View style={styles.flatListView} >
                <FlatList
                    data={data.items}
                    renderItem={({item, index}) => <Item item={item} index={index} navigation={navigation} />}
                    keyExtractor={(item)=>item.question_id}
                />
                </View>
            </View>
        );
    }
}

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
        paddingTop: 5,
        paddingBottom: 5,
    },
    filterButton: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
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
        backgroundColor: "grey",
        color: "white",
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
    // answerView: {
    //     flex:1,
    //     padding: 2,
    //     backgroundColor: "#F6BE00",
    //     alignItems: "center",
    // },
    // answerButton: {
    //     backgroundColor: "#F6BE00",
    //     fontWeight: "bold",
    //     fontSize: 15,
    //     color: "white",
    // },
    
})

export default HomePage;