import React, {useState, useEffect} from "react";
import { Text, TouchableOpacity, View, FlatList } from "react-native";

// import Icon from "../Icon/Icon";
import AnsItem from "./AnsItem";
import WaitingPage from "../WaitingPage/WaitingPage";
import { answerFetch } from "../../APICalls/apiCalls";

import styles from "./styles";


//const dummyUrl = "https://mocki.io/v1/e07c4bec-8262-4f15-9693-9474e314c9ce"

const AnswerPage = ({navigation, route}) => {
    const [data, setData] = useState({});
    useEffect(() => {
        // console.log(route.params.ques_id);
        answerFetch({ques_id: route.params.ques_id, setData: setData})
        // console.log(data);
      },[]);

    //if is_answered is true and data has been fetched already
    if(route.params.is_answered&&data.items) {
    return (
        <View style={styles.answerView} >
            <View style={styles.quesTitleView} >
                <Text style={styles.quesTitleText} >{route.params.quesTitle}</Text>
            </View>
            <Text style={styles.totalAnsText}>{data.items.length} Answer{data.items.length>1?"s":""}</Text>
            
            <FlatList
                data={data.items}
                renderItem={({item}) => <AnsItem item={item} /> }
                keyExtractor={(item)=>item.answer_id}
            />
            <TouchableOpacity >
                <Text style={styles.linkText}
                        onPress={() => navigation.navigate("WebViewComp",{url:route.params.link})}>
                        View Answers on StackOverflow
                </Text>
            </TouchableOpacity>
        </View>
        )
    }
    //else if is_answered is true and data is being fetched right now
    else if(route.params.is_answered) {
        return (
            <WaitingPage />
        )
    }
    //else if is_answered is false
    else {
        return (
            <View style={styles.answerView} >
                <View style={styles.quesTitleView} >
                    <Text style={styles.quesTitleText} >{route.params.quesTitle}</Text>
                </View>
                <View style={styles.noAnsView} >
                    <Text style={styles.text1}>No one has answered this question right now!</Text>
                    <Text style={styles.text2}
                    //Linking.openURL(route.params.link)
                        onPress={() => navigation.navigate("WebViewComp",{url:route.params.link})}>
                        Click to answer first
                    </Text>
                </View>
            </View>
        )
    }
 }
// }




export default AnswerPage;