import React, {useState, useEffect} from "react";
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from "react-native";

import Icon from "./Icon";
import WaitingPage from "./WaitingPage";


//const dummyUrl = "https://mocki.io/v1/e07c4bec-8262-4f15-9693-9474e314c9ce"

// interface PropsType {
//     item: {
//         answer_id: string,
//         owner: {
//             display_name: string,
//         }
//         score: string,
//         is_accepted: boolean,
//     },
// }


const AnsItem = (props) => {
    const item = props.item;
    return (
        <View style={styles.answersList} key={item.answer_id}>
            <Text style={styles.dispNameText}>Answered By: {item.owner.display_name}</Text>
            <Text style={styles.scoreText}>Score: {item.score}</Text>
            <Icon isAnswered={item.is_accepted} accOrAns="Accepted" colour="black"/>
        </View>
    );
}

const AnswerPage = ({navigation, route}) => {
    const [data, setData] = useState({});
    useEffect(() => {
        // console.log(route.params.ques_id);
        const realUrl = "https://api.stackexchange.com/2.3/questions/"+JSON.stringify(route.params.ques_id)+"/answers?order=asc&sort=activity&site=stackoverflow";
        const url = realUrl;
        fetch(url).then((res)=>res.json()).then((d)=>setData(d));
        // console.log(data);
      },[]);
    // if(!data) {
    //     return <WaitingPage />
    // }
    // else {
    //     console.log(route.params.is_answered);
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
        else if(route.params.is_answered) {
            return (
                <WaitingPage />
            )
        }
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


const styles = StyleSheet.create({
    answerView: {
        flex: 1,
        backgroundColor: "black",
        paddingTop: 10,
    },
    quesTitleView: {
        margin: 10,
    },
    quesTitleText: {
        color: "white",
        fontSize: 17,
        fontWeight: "bold",
    },
    totalAnsText: {
        color: "white",
        fontSize: 18,
        marginLeft: 10,
    },
    answersList: {
        margin: 10,
        backgroundColor: "#FFEE63", //AC9F3C
        padding: 10,
        borderRadius: 15,
    },
    dispNameText: {
        color: "black",
        fontSize: 18,
        fontWeight: "bold",
    },
    scoreText: {
        color: "black",
    },
    linkText: {
        color: "#9CFF2E",
        alignSelf: "center",
        fontSize: 15,
        marginBottom: 10,
    },
    noAnsView: {
        alignItems: "center",
        marginTop: 50,
    },
    text1: {
        color: "gold",
        fontSize: 15,
    },
    text2: {
        color: "gold",
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 10,
    }
})

export default AnswerPage;