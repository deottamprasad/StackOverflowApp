import React, { useEffect, useState } from "react";
import {Text, View, FlatList, TouchableOpacity} from "react-native";

import WaitingPage from "../WaitingPage/WaitingPage";
import DropdownList from "../DropdownList/DropdownList";
import Item from "./Item";

import { sortItems, orderByItems } from "../../Utilities/dataConstants";
import { questionFetch } from "../../APICalls/apiCalls";

import styles from "./styles";

//const dummyUrl = "https://mocki.io/v1/2f8eda30-17c1-4161-9348-77828e1fa01b"


const HomePage = ({navigation, route}) => {
    const realUrl = "https://api.stackexchange.com/2.3/questions?pagesize=10&order=desc&sort=activity&site=stackoverflow";
    const [data, setData] = useState({});
    const [url, setUrl] = useState(realUrl);
    const [sortValue, setSortValue] = useState("");
    const [orderValue, setOrderValue] = useState("");
    // console.log(sortValue);
    // console.log(orderValue);
    if(route&&route.params) {
        const {pgSize, fromDate, toDate, tagged} = route.params;
        const newPgSize = pgSize || 1;
        const newFromDate = fromDate ? JSON.stringify(Date.parse(fromDate)).slice(0,-3) : "";
        const newToDate = toDate ? JSON.stringify(Date.parse(toDate)).slice(0,-3) : "";
        // console.log(newFromDate);
        // console.log(newToDate);
        const newUrl = "https://api.stackexchange.com/2.3/questions?pagesize="+newPgSize+"&fromdate="+newFromDate+"&todate="+newToDate+"&order=desc&sort=activity&tagged="+tagged+"&site=stackoverflow"
        // console.log(newUrl);
        setUrl(newUrl);
        route.params=false;
        route=false;
    }
    useEffect(() => {
        setData({});
        questionFetch({url:url, setData:setData})
        
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
                    <Text style={styles.filterButton}>Filter </Text> 
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



export default HomePage;