import {View, TouchableOpacity, Text} from "react-native";

import Icon from "../Icon/Icon";

import { dateConverter } from "../../Utilities/utilFunctions";

import styles from "./styles";

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
                <Text style={styles.quesTitleText}>{props.index+1}. {props.item.title.slice(0,70) } {
                    props.item.title.length>70?"...":null
                    }</Text>
            </View>
          <View style={styles.tagsView}>
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
        </TouchableOpacity>
        </View>
    );
}

export default Item;