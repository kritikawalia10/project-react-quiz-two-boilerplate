import React, { Component } from 'react'
import questions from './quizQuestion.json'
import '../App.css'

 class QuizComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       questions : questions,
       startQuestion : {}, 
       nextQuestion : {},
       prevQuestion : {},
       startQuestionIndex : 0,

    }
  }
  
  componentDidMount(){
    this.displayStartQuestion(this.startQuestion, this.questions, this.nextQuestion, this.prevQuestion);
  }

  displayStartQuestion=(questions=this.state.questions,startQuestion, nextQuestion, prevQuestion)=>{
    let {startQuestionIndex} = this.state;

    if (this.state.questions.length !==0) {
      questions = this.state.questions
      startQuestion = questions[startQuestionIndex]
      nextQuestion = questions[startQuestionIndex + 1]
      prevQuestion = questions[startQuestionIndex - 1]  


      this.setState({
        startQuestion,
        nextQuestion,
        prevQuestion 
       
      })
  }
    
  }

  handleNextQuestion=()=>{
    if(this.state.nextQuestion !==undefined){
      this.setState(prevState => ({
        startQuestionIndex : prevState.startQuestionIndex + 1
      }),() =>{ this.displayStartQuestion(this.state.state, this.state.startQuestion, this.state.nextQuestion, this.state.prevQuestion)})
    }
  }

  handlePrevious=()=>{
    if(this.state.prevQuestion !==undefined){
      this.setState(prevState => ({
        startQuestionIndex : prevState.startQuestionIndex - 1
      }),() =>{ this.displayStartQuestion(this.state.state, this.state.startQuestion, this.state.nextQuestion, this.state.prevQuestion)})
    }
  }

  handleQuit=()=>{
   if(window.confirm('Are you sure you want to quit?')){
    window.location.reload(false);
   }
  }
  render() {
    const {startQuestion} = this.state;

    return (
      <div className='container'>
        <h2>Question</h2>

        <div><div className="index">1 of 15</div>
            <h3>{startQuestion.question}</h3>
        </div>

        <div className="options">
          <p className='one'>{startQuestion.optionA}</p>
          <p className='one'>{startQuestion.optionB}</p>
        </div>

        <div className="options">
          <p className='one'>{startQuestion.optionC}</p>
          <p className='one'>{startQuestion.optionD}</p>
        </div>

        <div className="buttons">
          <button className='previous' onClick={this.handlePrevious}>Previous</button>
          <button className='next' onClick={this.handleNextQuestion}>Next</button>
          <button className='quit' onClick={this.handleQuit}>Quit</button>
        </div>
      </div>
    )
  }
}

export default QuizComponent