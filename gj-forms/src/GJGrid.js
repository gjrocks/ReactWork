import React, {Component} from 'react';



class  GJGrid extends Component {


	

	  render(){ 
	  const data = this.props.arr;

		const listItems = data.map((dt) =>

 //  console.log("samirrr :" +dt.key1)
    <li key={dt.key1}>{dt.key1}</li>
  ); 
  //console.log(listItems);
	  	return(  
	  		
	  		<ul> {listItems}</ul>
            
			
	  		);  
	  }

	}

	export default GJGrid;
