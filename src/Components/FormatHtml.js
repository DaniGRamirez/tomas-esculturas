
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import React, {Component} from 'react';

function formatHtmlText(textHtml){
    if(textHtml != null){
      var html_form =  textHtml.replace('"','');        
      return  <div>{ReactHtmlParser(html_form)}</div> ;      
    }
    else return "";
  }

  export {formatHtmlText};