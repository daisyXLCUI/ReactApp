import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Title extends Component {
	renderSex(goodWord, badWord){
		const word = true;
		return word ? goodWord : badWord
	}
	
	render(){ 
	  const word = 'hello word';
	  const daisyApp = 'header';
	  let isGood = true;
	  let headerStyle = {
		  'color' : 'green',
	  	  'width': '400px',
	  	  'height': 'auto',
	  	  'background': '#fac016'
	  };
	  return( 
	      <div className='titleStyle'>
	        <h1>{word} {1+2}</h1>
	        <h2 style={headerStyle}>React 小书 {isGood ? 'is good' : null}</h2>
	        <h3 className='daisyApp'>Welcome {((function(){ return 'daisy'})())}</h3>
	        <h3 className='daisyApp'>Xiao Ming is {this.renderSex(<span>a boy</span>,<span>a girl</span>)}</h3>	 
	      </div>
	  )
	}
}


class Header extends Component {
	handleClick(word){
		console.log(this, word)
	}
	
	bark (a) {
	   console.log(this,a)
	}
	  
	run (b) {
	   console.log(this,b)
	}
	
	handleDog(a,b){
		this.bark(a);
		this.run(b);
	}
	
	render(){	  
	  return( 
		  <div>
		  	<div className='dogOne' onClick = {()=>{this.bark('bark');this.run('run')}} >DOG</div> 
		  	<div className='dogOne' onClick = {()=>{this.handleDog('barkTwo','runTwo')}} >DOG Two</div> 
		  	<div className='dogOne' onClick = {this.handleDog.bind(this,'barkTwoooo','runTwoooo')} >DOG Twoooo</div> 
		  	<h1>header</h1><button onClick={()=>{this.handleClick('函数调用')}}>函数调用</button>
		  	<h1>header</h1><button onClick={this.handleClick('函数声明')}>函数声明</button>
		  	<h1>header</h1><button onClick={this.handleClick.bind(this,'函数声明到调用')}>函数声明.bind+','+转化成函数调用</button>
	        <Title />
	        <Title />
	      </div>
	  )
	}
}

ReactDOM.render(<Header />, document.querySelector('#app'));

