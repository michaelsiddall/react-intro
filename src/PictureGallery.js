import React, { Component } from 'react';

//React Component Incantation
class PictureGallery extends Component {

    render() {
       return (
           <div>
               <img src="https://picsum.photos/200/200"></img>
               <img src="https://picsum.photos/200/200"></img>
               <img src="https://picsum.photos/200/200"></img>
               <img src="https://picsum.photos/200/200"></img>
               <img src="https://picsum.photos/200/200"></img>
               <img src="https://picsum.photos/200/200"></img>
           </div>
       ); 
    }

}    
// if this were node...

//module.exports = PictureGallery;

// But on the client-side we do:

export default PictureGallery;