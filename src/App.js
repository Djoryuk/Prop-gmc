import Sora from './asset/photo.jpg';
import './App.css';
import React from "react";


class App extends React.Component {
  state = {
    fullName: "Abdeldjallil boudekhana",
    bio: " Hey im abdeldjallil boudekhana and im currently learning Full stack web develommpent.",
    imgSrc: Sora,
    profession: "FullStack Web Developper",
    shows: true,
    timer: null,
    seconds: 0,
  }

  toggle() {
    this.setState({shows: !this.state.shows})
  }

  componentDidMount () {
    this.setState({timer: setInterval(this.incrementer.bind(this), 1000)})
  }

  componentWillUnmount () {
    clearInterval(this.state.timer)
  }


  incrementer () {
    if (!this.state.shows) {
      this.setState({seconds: this.state.seconds + 1}) 
    } else {
      this.setState({seconds: 0})
    }
  }
  render(){
    return(
      <> 
      <div className="card">
        {!this.state.shows &&
            <div className="lower-container">
              <div className="col-md-4">
                  <img src={this.state.imgSrc} width={179.33} height={250} alt="photo.jpg" />
                </div>
            <h5>{this.state.fullName}</h5>
            <h4>{this.state.bio}</h4>
            <p>{this.state.profession}</p>
           </div> } 
      </div>  
   
     
    
     <div class="col-md-12 text-center">
     <button onClick={() => this.toggle()} type="button" className="btn btn-primary btn-lg m-auto text-center">Show Profile</button>
     <a className="btn btn-outline-secondary rounded-pill disabled ms-2">{this.state.seconds} Seconds</a>
   </div>

</>
    )
  }
}

export default App;
