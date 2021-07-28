const printHTMLQuestion = (i) => {
    currentQuestionIndex++;
    const q = cuestionary[i];
    let a = q.answers;
    rightAnswer = a[0];
    a = a.sort((a,b) => Math.floor(Math.random() * 3) -1);

    const htmlAnswersArray = a.map( currentA => '<p class= "answer"><button onClick="evaluateAnswer(´${currentA}´, this)">X</button> <span>${currentA}</span></p>');
    const htmlAnswers = htmlAnswersArray.join(' ');
    let htmlQuestionCode = '<p>${q.question}</p><div>${htmlAnswers}</div>';
    document.querySelector('.question').innerHTML = htmlQuestionCode;

    time = 60;
    document.querySelector('.time').innerHTML = time;
    clearInterval(timeInterval);
    timeInterval = setInterval( ()=> {
        time--;
        if(time == 0){
            alert("Time is Over");
            clearInterval(timeInterval);
        }
        else{
            document.querySelector('.time').innerHTML = time;
        }            
    },1000)
    
}

const evaluateAnswer = (answer, obj ) => {
    document.querySelectorAll('.answer').forEach( a => a.classList.remove('right', 'wrong'));
    const parentP = obj.parentNode;
    console.log('answer:  '  + answer + ', rightAnswer:  '  + rightAnswer)
    
    if(answer == rightAnswer){
        parentP.classList.add('right');
        rightAnswers++;
        document.querySelector('.rightCounter').innerHTML = rightAnswers;
    }

    else{
        parentP.classList.add('wrong');
        wrongAnswers++;
        document.querySelector('.wrongCounter').innerHTML = wrongAnswers;

    }
}

const nextQuestion = _ => {

}

printHTMLQuestion(currentQuestionIndex);