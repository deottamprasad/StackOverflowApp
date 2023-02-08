import React, {useState, useEffect} from "react";
import { Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Icon from "./Icon";


const AnswerPage = ({navigation, route}) => {
    const [data, setData] = useState({});
    useEffect(() => {
        const url = "https://mocki.io/v1/e07c4bec-8262-4f15-9693-9474e314c9ce";
        fetch(url).then((res)=>res.json()).then((d)=>setData(d));
        console.log(data);
      },[]);
    if(!data) {
        return <WaitingPage />
    }
    else {
        if(data.items) {
        return (
            <View style={styles.answerView} >
                <View style={styles.quesTitleView} >
                    <Text style={styles.quesTitleText} >{route.params.quesTitle}</Text>
                </View>
                <Text style={styles.totalAnsText}>{data.items.length} Answers</Text>

                {
                    data.items.map((item) => {
                        return (
                        <View style={styles.answersList} key={item.answer_id}>
                            <Text style={styles.dispNameText}>Answered By: {item.owner.display_name}</Text>
                            <Text style={styles.scoreText}>Score: {item.score}</Text>
                            <Icon isAnswered={item.is_accepted} accOrAns="Accepted" colour="white"/>
                        </View>
                        );
                    })
                }
                <TouchableOpacity >
                    <Text style={styles.linkText}
                            onPress={() => Linking.openURL(route.params.link)}>
                            View Answers on StackOverflow
                    </Text>
                </TouchableOpacity>
            </View>
        )
        }
        else
        {
            return (
                <View style={styles.answerView} >
                    <Text>No one has answered this question right now:</Text>
                    <Text style={{color: 'blue'}}
                        onPress={() => Linking.openURL(route.params.link)}>
                        Click to answer first
                    </Text>
                </View>
            )
        }
    }
}


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
        fontSize: 16,
        fontWeight: "bold",
    },
    totalAnsText: {
        color: "white",
        fontSize: 18,
        marginLeft: 10,
    },
    answersList: {
        margin: 10,
        backgroundColor: "#AC9F3C",
        padding: 10,
        borderRadius: 5,
    },
    dispNameText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    scoreText: {
        color: "white",
    },
    isAcceptedText: {
        color: "white",
    },
    linkText: {
        color: "white",
        alignSelf: "center",
        fontSize: 15,
    },
})

export default AnswerPage;