import React from 'react'
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {timerID:0};
    }
  
    componentDidMount=()=> {
      setInterval( ()=> {this.setState(prevState => ({
        timerID: prevState.timerID +1,

      }));
    },1000);
    };  
   
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
   
    render() {
      return (
        <div>
          <h2>time interval since the last component was mounted  {this.state.timerID} seconds</h2>
        </div>
      );
    }
  }
  

  export default Clock;