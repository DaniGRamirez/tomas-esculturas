import React, {Component} from 'react';
import './IGGallery.css';
import axios from 'axios';
import IgMediaPost from './IGMediaPost'

class IGGallery extends Component {                  

    constructor(props) {
        super(props);
        this.state = 
        {          
            numberPostLoad : 6,
            dataIG: [],
        };        
    }    

    componentDidMount() {
          
        console.log('Getting data IG');               
        axios.get('/api/media/user').
        then((response)=>{     
            console.log(response.data.data);                                                                  
            this.setState({dataIG: response.data.data.filter(item => item.type === "image").slice(0,6)})
        }).catch((error)=>{
            console.log(error);            
        });
        
        
    }
    
    componentDidUpdate(){
        console.log(this);
        if((document.getElementById('IGImagesContainer')) != null){           
            var images = Array.from(document.getElementById('IGImagesContainer').getElementsByClassName('ImageIG'));           
            console.log(images);
            for (var i = 0; i < images.length; i++) {
                images[i].style.height =  images[i].clientWidth + "px";
              }
          
        }
    }
  
    render(){      
        // console.log(document.getElementById('IGImagesContainer').getElementsByClassName('ImageIG'));       
        return (
            <div className="IGGalleryContainer">                                 
                <div id="IGImagesContainer" >                  
                    {this.state.dataIG.map(igPost =>
                    (    
                        <IgMediaPost key={igPost.id} dataPost={igPost}/>
                    ))
                   }
                </div>          
            </div>
        )
    }

}

export default IGGallery;