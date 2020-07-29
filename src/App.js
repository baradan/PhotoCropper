import React from "react";
import Navbar from "./component/Navbar";
import Imagecropper from "./component/Imagecropper";
import 'bootstrap/dist/css/bootstrap.min.css';
import photo from './photo.JPG';

class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
      <Imagecropper src={photo} />
      </div>  
    );
  }
}

export default App;