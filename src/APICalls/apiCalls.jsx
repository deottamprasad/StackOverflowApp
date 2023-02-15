
const answerFetch = (props) => {
    const url = "https://api.stackexchange.com/2.3/questions/"+JSON.stringify(props.ques_id)+"/answers?order=asc&sort=activity&site=stackoverflow";
    fetch(url).then((res)=>res.json()).then((d)=>props.setData(d)).catch((e)=>console.log(e));
}

const questionFetch = (props) => {
    fetch(props.url).then((res)=>res.json()).then((d)=>props.setData(d)).catch((e)=>console.log(e));
}

export {answerFetch,questionFetch};