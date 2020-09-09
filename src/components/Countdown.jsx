import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';

class Countdown extends React.Component {
  constructor(props) {
      super(props)
  
      this.state = {
           count: 0
      }
      this.onSetCountdownTime = this.onSetCountdownTime.bind(this);
      this.countDownTimer = this.countDownTimer.bind(this);
  }
  onSetCountdownTime(secondstr){
    const seconds = +secondstr;
    if(seconds>0){
    this.setState({
        count: seconds
    })
    this.countDownTimer();
    }

  }
  countDownTimer(){
    setInterval(() => {
     if(this.state.count>0)
      {this.setState(prevState => {
          return {
              count: prevState.count - 1
          }
      })}
      else{
         clearInterval(this.countDownTimer);
         window.location.reload(false);
    }
    }, 1000);
    
  }


//   componentDidUpdate(prevProps,prevState){
//     if(prevState.count===0){
//         clearInterval(this.countDownTimer);
//     }
//   }

  // 
    render() {
        console.log(this.state.count);
        return (
            <div>
                <Clock timeInSeconds={this.state.count}/>   
                <CountdownForm onSetCountdownTime={this.onSetCountdownTime}/>
            </div>
        );
    }
}

export default Countdown;