import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GJGrid from './GJGrid';

class  FormApp extends Component {

	constructor(props){
		super(props);
		this.state={
			data: [],
		    racfid: '',
		    nameOfPerson: ''
		}
		this.handleEv = this.handleEv.bind(this);  
		this.handleSub = this.handleSub.bind(this);  
		this.handleInputChange = this.handleInputChange.bind(this);  
	}
	handleInputChange(event) {  
		const target = event.target;  
		const value = target.type === 'checkbox' ? target.checked : target.value;  
		const name = target.name;  
		this.setState({  
			[name]: value,
			//data: data1 
		});  
	}  

	handleEv(){  
	  	//alert(1);
	  	console.log("Ganesh :" + this.props);  
	  	var myDiv = document.getElementById('txt');  
	  	var val1= ReactDOM.findDOMNode(myDiv).value;  
	  	this.setState({
	  		data : val1
	  	});
	  } 

	  handleSub(event){  
	  	alert(JSON.stringify(this.state));
	  	event.preventDefault();

	  const data1=this.state.data;
		data1.push({'key1' : this.state.racfid});

		this.setState({
	  		data : data1
	  	});
	  	console.log("Ganesh submit :" + this.state.data);  

	  } 

	  render(){  
	  	return(  
	  		<div>



	  		<div>

	  		<form>  
	  		<label>  
	  		Name of Person:  
	  		<input  
	  		name="nameOfPerson"  
	  		type="text"  
	  		value={this.state.nameOfPerson}  
	  		onChange={this.handleInputChange} />  
	  		</label>
	  	 
	  		<label>  
	  		Racfid person:  
	  		<input  
	  		name="racfid"  
	  		type="text"  
	  		value={this.state.racfid}  
	  		onChange={this.handleInputChange} />  
	  		</label>  
	  		<br/>
	  		<br/>
	  		<button onClick={this.handleSub} >Please submit</button>
	  		</form>  
	  		</div>

           <div>
            <GJGrid arr = {this.state.data}/> 
           </div>

	  		</div> 

	  		);  
	  }

	}

	export default FormApp;
