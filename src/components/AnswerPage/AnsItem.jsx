import {View, Text} from "react-native";

import Icon from "../Icon/Icon";

import styles from "./styles";

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

export default AnsItem;