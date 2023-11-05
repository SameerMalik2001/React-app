import React from "react";
import loaderSrc from '../../Assets/loader.gif'

const Loader = props => (
    <div>
        <img alt="Loader icon" src={loaderSrc} style={{width:50, paddingTop:15}}></img>
    </div>
);

export default Loader;