import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './IGMediaPost.css';

class IGMediaPost extends Component {              
   
    componentDidMount(){
        //console.log(this.props);
    }

    render(){
        console.log(this.props.dataPost.link);
        return (                   
        <div className="IGMediaPostContainer">   
            <a href={this.props.dataPost.link} target="blank">
                <img className="ImageIG" src={this.props.dataPost.images.standard_resolution.url}></img> 
                <p> {this.props.dataPost.caption.text.substring(0, 100)}... </p>
            </a>
        </div> 
    )}

}

export default IGMediaPost;