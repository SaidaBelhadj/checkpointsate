import React  from 'react';
import './App.css';
import Clock from './Clock';
import myImage from './picture.jpg';
const  setStyleInfo = {
  color : 'rgb(255, 0, 255)' ,
  fontFamily: 'Monserrat, sans-serif',
  fontSize : '25px'
}
const  setStyleApp = {
  backgroundColor : 'aliceblue',
  opacity :'2.8'
 
}
const  setStyleGreen = {color : 'green',  textAlign: 'left', marginLeft:100  }
class App extends React.Component {
  
  constructor(props) {
    super(props)
      this.state = {
        name: "Not specified",
        img: "Not specified",
        bio: "Not specified",
        profession: "Not specified",
        isvisible: false,
        count: 0 ,
        intervalId: 0

    }
  this.myFunction = this.myFunction.bind(this);
  // this.handleName = this.handleName.bind(this);
  }



  myFunction(e) {
   // e.preventDefault();
   alert("The value of the state is: \n name: " + this.state.name+"\n bio: "+this.state.bio+"\n img: "+this.state.img +"\n profession: "+this.state.profession)
      this.setState({ name: "Saida Belhadj",img : myImage, bio : "Ingénieur en Génie Logiciel diplomée de l'INSAT en 2008",profession : "Ingénieur"})
  }
  componentDidMount() {
    this.myFunction();
    setTimeout(() => {
    this.setState({isvisible: true})
  }, 2000)
}
 
urn;
      
  render() {
    const togglevisibility = ()=> {
      this.setState({
        isvisible: !this.state.isvisible })
      };
    return (
     
      <div className="App" style ={setStyleApp} >
        
        <h4>Hello, this is the State Checkpoint </h4>
       
        <button className = 'btn-grad' onClick={togglevisibility}>{this.state.isvisible? 'Hide Profile' : 'Show Profile' }!
        </button> 
        {this.state.isvisible? 
        
        (<div>
         <Clock/>
        <h2> <span style={setStyleInfo}>My Fullname is : </span><span >{this.state.name}</span> </h2>  
        <h2> <span style={setStyleInfo}>My Profession is : </span><span>  {this.state.profession}</span></h2> 
         <img  src={this.state.img} alt = 'test' className='rounded-circle'/> 
          <h2 style={setStyleGreen}>My Biography</h2>
          <div className="profileBio" >
          <h2>Bio: {this.state.bio}</h2>  
         </div> 
         <br/> <br/>
         </div>): (<div><h4>Click on the button to show profile</h4 ></div>)
         }
       
      </div>
    );
  }
}
export default App;
