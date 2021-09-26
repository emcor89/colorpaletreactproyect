import React, {Component} from "react";
import Palette from "./Palette";
import seeColor from "./seedColor";

class App extends Component {
  render(){
    return(
      <div>
        <Palette { ...seeColor[3]}/>
      </div>
    )
  }
 
}

export default App;
