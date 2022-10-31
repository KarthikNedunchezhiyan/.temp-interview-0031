function generateNewQuestion() {
    fetch("https://opentdb.com/api.php?amount=1").then(resp=>resp.json()).then(content=>{
        document.getElement("question").innerHTML = content.results[0];
    });
}

generateNewQuestion();