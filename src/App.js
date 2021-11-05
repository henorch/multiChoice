import React, { useEffect, useState } from 'react';
import { Spring } from 'react-spring'
import './App.css'



function App(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showscore, setShowScore] = useState(false)
  const[score, setScore] = useState(0)
  const [isLoading, setIsLoading] = useState(true)


  useEffect(()=> {
    setTimeout(()=>
      setIsLoading(false),
      2000
    )
  }, [])
  const handleAnswerButtonClick = (isCorrect) =>{
    if(isCorrect){
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < questions.length){
    setCurrentQuestion(nextQuestion)
    }
    else{
      setShowScore(true)
    }
  }

    const questions = [
      {
        questionText: 'The National football team of Nigeria is known as',
        answerOptions: [
          {answerText: 'The Teranger Lion', isCorrect: false},
          {answerText: 'Bafana Bafana', isCorrect: false},
          {answerText: 'Chipolopolo', isCorrect: false},
          {answerText: 'Super Eagle', isCorrect: true}
        ]
      },
      {
        questionText: 'The black sheild in Nigeira coat of arm symbolized which of the followings',
        answerOptions: [
          {answerText: 'Nigeria petroluem quality', isCorrect: false},
          {answerText: 'Nigeira fertile soil', isCorrect: true},
          {answerText: 'Black coal reservation of Nigeria', isCorrect: false},
          {answerText: 'Fight against racism', isCorrect: false}
        ]
      },
      {
        questionText: 'The first Nigeria man to buy a car is known by the name',
        answerOptions: [
          {answerText: 'Bob Jensen', isCorrect: true},
          {answerText: 'Femi Anikulapo', isCorrect: false},
          {answerText: 'Dora Danjuma', isCorrect: false},
          {answerText: 'Mooshood Abiola', isCorrect: false}
        ]
      }, 
      {
        questionText: 'The first discovery of crude oil in commercial quantity took place at',
        answerOptions: [
          {answerText: 'Ajaokuta Ondo', isCorrect: false},
          {answerText: 'Oloibiri, Bayelsa', isCorrect: true},
          {answerText: 'Aniocha Delta', isCorrect: false},
          {answerText: 'Auchi Delta', isCorrect: false}
        ]
      }, 
      {
        questionText: 'The currenct speaker of the Nigeria house of Assembly is',
        answerOptions: [
          {answerText: 'Aminu Tambuwa', isCorrect: false},
          {answerText: 'Femi Gbajabiamila', isCorrect: true},
          {answerText: 'Demiji Bankole', isCorrect: false},
          {answerText: 'Adamu Adamu', isCorrect: false}
        ]
      }, 
      {
        questionText: 'The first Nigeira Military Coup was carried out in what year',
        answerOptions: [
          {answerText: '1984', isCorrect: false},
          {answerText: '1962', isCorrect: false},
          {answerText: '1966', isCorrect: true},
          {answerText: '2001', isCorrect: false}
        ]
      }, 
      {
        questionText: 'There are how many local goverments in Nigeira',
        answerOptions: [
          {answerText: '774', isCorrect:true},
          {answerText: '1002', isCorrect: false},
          {answerText: '520', isCorrect: false},
          {answerText: '200', isCorrect: false}
        ]
      }, 
      
    ]
  return (
    <Spring
      from={{opacity: 0,marginTop: -200}}
      from={{opacity: 0,marginTop: 0}}
      >
        {prop => (
          <div style={props}>

          
    <div className='App'>
      
      <div className='App-header'> 
      {isLoading ? <div className='container' style={{justifyContent:'center',
alignItems:'center'}}>Is loading Please wait...<br/>
</div> : <div>
{showscore ? <div className='container' style={{justifyContent:'center',
alignItems:'center',
flexDirection:'column'}}>You Scored: {score}/{questions.length}<br/>
<p>Subscribe for more educative games from us</p></div> :
           
      <div className='container'>
        <div className='mobileQuestion'>
      <div className='question-section'>
        <div className='question-count'>
          <span>Question: {currentQuestion + 1}</span>/{questions.length}
        </div>
        <div className='Question-text'>{questions[currentQuestion].questionText}</div>
      </div>
      </div>
      <div className='mobileAnswer'>
      <div className='answerSection'>
        {questions[currentQuestion].answerOptions.map((answerOption) => (
          <button onClick={()=> handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
        ))}
      </div>
      </div>
    </div> }
    </div>
}


</div>
<h4 style={{marginTop:'-20px'}}>Powered By Tunde Henorch</h4>
<p>Author:<a href="tel: 07033407608"> 07033407608</a></p>
    </div>
    </div>
  )}
  </Spring>
  );
}

export default App;