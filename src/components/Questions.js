import React from 'react';

class Questions extends React.Component{
    resultArray=[];
    constructor(props){
        super(props)
        this.state={
            bulletOption:null,
            Ans:Array(this.props.sendLength).fill(5)
        }
    
    this.recievedData=this.recievedData.bind(this);
    this.takeOptions=this.takeOptions.bind(this);   
        }


recievedData=(value)=>{
    this.props.getChildData(value);
}

takeOptions(takeObt,index){
  
    let obj={}
    obj['Question']=this.props.question.name
    obj['userSelect']=takeObt
    obj['options']=this.props.question.options
    let correctAns=this.props.question.options.filter(obj1=> obj1.isAnswer===true)
    console.log(correctAns);
    obj['correctAns']=correctAns[0].name

    if(obj.userSelect===obj.correctAns){
        obj['status']="Correct"
    }else{
        obj['status']="Wrong"
    }
    obj['selectedOptionNo']=index
    this.resultArray.push(obj)
    this.setState({bulletOption:index})
    this.state.Ans[this.props.questionCount-1]=index;
}
componentWillReceiveProps(nextProps){
  let radioArray=this.resultArray.filter(obj=>{
    return obj.Question===nextProps.question.name;
  })
  let obj=radioArray[0]
  console.log(obj)
  if(obj){
    this.setState({bulletOption:obj.selectedOptionNo})
  }else{
    this.setState({bulletOption:null})
  }
    
}

render(){
    let setData;
    if(this.props.changeView===0){
        setData=(
            <div className="container"> 
            <div className="row css-color">
            <div className="col-1 text-right pr-0">
           <h3>{this.props.questionCount}. </h3>
           </div>
           <div className="col-11 pl-0">
           <div className="text-left set-font ml-3">{this.props.question && this.props.question.name }</div>
           </div>
           </div>
            <div className="row">
            {
               this.props.question && this.props.question.options.map((data,index)=>{
   
               return (
                   <div key={index} className="col-6 m-2 text-left center-option css-color">
               
               <input type="radio" name="age" value="100" checked={this.state.bulletOption===index}  onClick={()=>{this.takeOptions(data.name,index)}} /> <span className="text-left set-optfont">{data.name}</span>
   
           
                    </div>
               )
           })}
            </div>
              </div>
        )

    }

    if(this.props.changeView===1){
        setData=(
            <div className="container"> 
            <div className="row css-color">
            <div className="col-1 text-right pr-0">
           </div>
           <div className="col-11 pl-0">
               {
              this.resultArray.map((obj,index)=>{
                  console.log(obj)
                  return(
                    <div className="row css-color">
                    <div className="col-1 text-right pr-0">
                   <h3>{index+1}. </h3>
                   </div>
                   <div className="col-11 pl-0">
                   <div className="card">
                   <div className="card-body ">
                   <p className="card-text text-left crt-css">{obj.Question}</p>
                 </div>
  
                <div className="row crt-css ">
              {
                obj.options.map((obj)=>{
                 return(
                <div className="col-6">
                <ul className="list-group list-group-flush pt-1 radi-css">
                <li className="list-group-item  option-css">{obj.name}</li>
                </ul>
              </div>
            )
          })
      } 
    </div>
    <div className="col-12 pt-3 pb-3 crt-css">
      <span>Your Selected Option :- </span> <span>{obj.userSelect}</span>
    </div>
</div>
                </div>
                   </div>
                  )
              })
               }
           </div>
           </div>
           </div>
        )
    }
    if(this.props.changeView===2){
        setData=(
            <div className="container"> 
            <div className="row css-color">
            <div className="col-1 text-right pr-0">
           </div>
           <div className="col-11 pl-0">
               {
              this.resultArray.map((obj,index)=>{
               let corInhtml
                if(obj.status==="Correct"){
                    corInhtml = <div className="col-12  pt-3 pb-3 ctr-correct"><span>Status :- </span> <span>{obj.status}</span> </div>
                }else{
                    corInhtml =<div className="col-12  pt-3 pb-3 crt-wrong"><span>Status :- </span> <span>{obj.status}</span> </div>
                }
                 
                  return(
                    <div className="row css-color">
                    <div className="col-1 text-right pr-0">
                   <h3>{index+1}. </h3>
                   </div>
                   <div className="col-11 pl-0">
                   <div className="card">
  <div className="card-body">
    <p className="card-text text-left crt-css">{obj.Question}</p>
  </div>
  
  <div className="row crt-css">
  <div className="col-6">
                <ul className="list-group list-group-flush">
              <li className="list-group-item">You Selected</li>
              </ul>
              </div>
              <div className="col-6">
                <ul className="list-group list-group-flush">
              <li className="list-group-item">Correct Answer</li>
              </ul>
              </div>
              <div className="col-6">
                <ul className="list-group list-group-flush">
              <li className="list-group-item option-css">{obj.userSelect}</li>
              </ul>
              </div>
              <div className="col-6">
                <ul className="list-group list-group-flush">
              <li className="list-group-item option-css">{obj.correctAns}</li>
              </ul>
              </div>
    
    
    </div>
    {
        corInhtml
    }
  
</div>
               
                   </div>
                   </div>
                  )
              })
               }
       
           </div>
           </div>
          
              </div>
        )
    }

    return(
      <div>{setData}</div>
    )
    }
}
export default Questions; 