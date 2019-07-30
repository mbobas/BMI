import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
     super(props);
     this.state = { name: 'Wpisz Imię', weight: 0, height: 0, bmi: 0, message: '', optimalweight: '', /*time: new Date().toLocaleTimeString()*/ };
     this.submitMe = this.submitMe.bind(this);
     this.heightchange = this.heightchange.bind(this);
     this.weightchange = this.weightchange.bind(this);
     this.namechange = this.namechange.bind(this);  
     this.calculateBMI = this.calculateBMI.bind(this); 
  }


  heightchange(e){
    this.setState({height: e.target.value});
    e.preventDefault();
  }

   weightchange(e){
    this.setState({weight: e.target.value});
    e.preventDefault();
  }

  calculateBMI(){

      var heightSquared = (this.state.height/100  * this.state.height/100);
      var bmi = this.state.weight / heightSquared;
      var low = Math.round(18.5 * heightSquared);                                                         
      var high = Math.round(24.99 * heightSquared);    
      var message = "";
      if( bmi >= 18.5  && bmi <= 24.99 ){
          message = "Jesteś w zdrowym przedziale wagowym";
      }
      else if(bmi >= 25 && bmi <= 29.9){
        message = "Masz nadwagę";
      }
      else if(bmi >= 30){
          message ="Jesteś otyły, Zrób coś z tym!!";
      }
      else if(bmi < 18.5){
        message = "Jestes poniżej normy, anemia?";
      }
      this.setState({message: message});  
      this.setState({optimalweight: "Sugerujemy aby zakres Twojej wagi był pomiędzy "+low+ " - "+high});    
      this.setState({bmi: Math.round(bmi * 100) / 100});   

  }

  submitMe(e) {
     e.preventDefault();
     this.calculateBMI();
  }


  namechange(e){
    e.preventDefault();
    console.log(e.target);
    this.setState({name: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        <h2>BMI Kalkulator</h2>
        </div>
        
          <form onSubmit={this.submitMe}>
            <label>
              Wpisz swoje imię:
            </label>
            <input type="text" name="name" value={this.state.name}  onChange={this.namechange}   />
             <label>
             Wpisz swój wzrost w cm: 
            </label>
            <input type="text" name="height" value={this.state.height} onChange={this.heightchange}   />
             <label>
             Wpisz swoją wagę w kg: 
            </label>
            <input type="text" name="weight" value={this.state.weight} onChange={this.weightchange}    />
            <label> Cześć {this.state.name}, Twój BMI wynosi {this.state.bmi} </label>
              <label>{this.state.message}</label>
              <label>{this.state.optimalweight}</label>
             
            <input type="submit" value="Oblicz"/>
          </form>
      
      </div>

    );
  }
}
export default App;