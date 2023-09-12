import React from "react";
import './PopUp.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
const PopUp=()=>{
    return (

            <a href="https://drive.google.com/file/d/1kWp_2GGLGsC2ic4h7Xf8oU5uk-3lOOM7/view?usp=drive_link" className="go-top-btn"> <button className="custom-button bottom-button">  <FontAwesomeIcon icon={faFilePdf} /></button></a>
    
      );
};


export default PopUp;