 import React from "react";
 import ReactDOM from "react-dom";
 import HalftoneQRCode from "../src/index";
import Dropzone from "./react-dropzone";
var omggif = require('omggif');

 
class Example extends React.Component {

   constructor(props) {
     super(props);
     this.state={
      src:"./catpaw-bw.jpg",
      text:"https://github.com/fangj/react-halftone-qrcode"
     }
   }
 
   render() {
    const{src,text}=this.state;
     return (
       <div id="page">
        <h1>Drop Image File to Page</h1>
        <div className="text-bar">
          <input id="text" type="text" ref='text' placeholder="type something..."defaultValue={text} onChange={this.onChange.bind(this)}/>
        </div>
        <Dropzone accept="image/*" multiple={false} onDrop={this.onDrop.bind(this)} className="dropzone">
             <HalftoneQRCode src={src} text={text}/>
        </Dropzone>
       </div>
     );
   }

   onDrop(files){
    const file=files[0];
    // this.setState({src:files[0].preview});
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(e) { 
       var buf=e.target.result;
       var gr = new omggif.GifReader(buf);
       var frame_num = this.framenum % gr.numFrames();
       var frame_info = gr.frameInfo(frame_num);
      console.log('aa',frame_num,frame_info);
     };
   }

   onChange(evt){
    this.setState({text:evt.target.value});
   }
 }
 

  ReactDOM.render(
  <Example />,
  document.getElementById("root")
);