import React from 'react';
import Questions from './Questions';
import axios from "axios";



class Quizview extends React.Component{
    reload="no"
    course=["Asp.net","C_Sharp","DesignPatterns","Javascript"];
    selectQuizName=[];
    constructor(props){
    super(props)
    this.state={
        topic:"Select Courses",
        topicData:[],
       currentQuestion:0,
        questionCount:1,
        showButton:false,
        switch:0,
        
        
    }
    this.getData=React.createRef();
    this.selectQuiz=this.selectQuiz.bind(this);
    this.gotoNextQuestion=this.gotoNextQuestion.bind(this);
    this.gotoPrevQuestion=this.gotoPrevQuestion.bind(this);
    this.review=this.review.bind(this);
    this.backToQuiz=this.backToQuiz.bind(this);
    this.submitResult=this.submitResult.bind(this);
}
    selectQuiz=(data)=>{
        
       axios.get('http://localhost:3400/'+data)
       .then(res =>{
          this.selectQuizName=res.data[0].questions
          this.setState({topicData:res.data[0].questions})
          this.setState({showButton:true})
       });

    }

    gotoNextQuestion(){
    let question= this.state.topicData[this.state.currentQuestion];
    this.setState({currentQuestion:this.state.currentQuestion+1});
    this.setState({questionCount:this.state.questionCount+1});
    }

    gotoPrevQuestion(){
    let question= this.state.topicData[this.state.currentQuestion];
    this.setState({currentQuestion:this.state.currentQuestion-1});
    this.setState({questionCount:this.state.questionCount-1});
    }

    review(){
    this.setState({switch:1})
    }
    backToQuiz(){
    this.setState({switch:0})
    }

    submitResult(){
    
        this.setState({switch:2})
        
        
    }
    restart(){
        window.location.reload();
    }

render(){
    return(
       
            <div className="container bg-css mt-4">
            <div className="row justify-content-end pt-4">
            <div className="col-2 ">
        <div className="dropdown ">
        <button className="btn btn-secondary dropdown-toggle btn-css" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
        Select Quiz
        </button>
        <div className="dropdown-menu btn-css" aria-labelledby="dropdownMenuButton">
        {
        this.course.map((obj,index)=>{
        return(
        <a key={index} className="dropdown-item drop-css" onClick={()=>{this.selectQuiz(obj)}}>{obj}</a>
          )
      })
        }
     </div>
    </div>
    </div>
    </div>

{this.state.topicData.length>0? (<Questions questionCount={this.state.questionCount} question={this.state.topicData[this.state.currentQuestion]} changeView={this.state.switch} sendLength={this.state.topicData.length}/>):(<div className="style css-color">Please Select Your Topic</div>)}
<div className="row">
{this.state.showButton ? (<div className="mx-auto"><button className="btn btn-primary mr-2 " disabled={this.state.questionCount===1} onClick={this.gotoPrevQuestion}>Prev</button>
<button className="btn btn-primary ml-2" disabled={this.state.questionCount===this.state.topicData.length} onClick={this.gotoNextQuestion}>Next</button></div>):(<span></span>)}
</div>
<div className="row mt-2 text-left pb-4">
{this.state.topicData.length>0 ? (<span><input className="btn btn-primary ml-3"  type="submit" value="Review" onClick={this.review}></input>
<button type="button" className="btn btn-primary ml-3" onClick={this.submitResult}>Submit</button>
<button type="button" className="btn btn-primary ml-3" onClick={this.restart}>Restart</button>
<input className="btn btn-primary ml-3"  type="submit" value="Quiz" onClick={this.backToQuiz}></input></span>):(<span></span>)}
</div>
</div>      

    )
    }

}
export default Quizview;