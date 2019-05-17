import React from 'react';  
import { Link } from 'react-router-dom';

class Popup extends React.Component {  
  render() {  
return (  
<div className='popup'>  
<div className='popup_inner'>  
<h3>Times up!</h3>  
<Link to="/">
<button className="homeButtons"> Go home</button>  
</Link>
</div>  
</div>  
);  
}  
}  

export default Popup;