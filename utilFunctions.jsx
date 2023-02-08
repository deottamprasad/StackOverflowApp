import moment from "moment";

const dateConverter = (date) => {
    const newDate = moment(new Date(date * 1000)).format('MM/DD/YYYY hh:MM');
    // console.log(newDate)
    return newDate;
}

//All callback functions for sorting the data.

const callbackSelection = (value1, value2) => {
    switch (value1) {
        case "last_activity_date":
            if(value2==="desc")
                return descActivity;
            else
                return ascActivity;
        case "score": 
            if(value2==="desc")
                return descScore;
            else
                return ascScore;
        case "creation_date":
            if(value2==="desc")
                return descCreation;
            else
                return ascCreation;
        case "view_count": 
            if(value2==="desc")
                return descViews;
            else
                return ascViews;
        default:
            return defaultFunction;
    }
}

const ascActivity = (a,b) => {
    return a["last_activity_date"] - b["last_activity_date"];
}
const descActivity = (a,b) => {
    return -(a["last_activity_date"] - b["last_activity_date"]);
}

const ascScore = (a,b) => {
    return a["score"] - b["score"];
}
const descScore = (a,b) => {
    return -(a["score"] - b["score"]);
}

const ascCreation = (a,b) => {
    return a["creation_date"] - b["creation_date"];
}
const descCreation = (a,b) => {
    return -(a["creation_date"] - b["creation_date"]);
}

const ascViews = (a,b) => {
    return a["view_count"] - b["view_count"];
}
const descViews = (a,b) => {
    return -(a["view_count"] - b["view_count"]);
}
const defaultFunction = (a,b) => {
    console.log("Please select both values");
}

export {dateConverter, callbackSelection} ;