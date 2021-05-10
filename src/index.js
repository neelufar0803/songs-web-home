import React from 'react';
import ReactDOM from 'react-dom';
import Header from './homepage/head';
import './index.css'
import Slider from './homepage/slider'
import Lang from './homepage/lang'
import Trending from './homepage/trending'
import Footer from './homepage/footer'

const App = () => {
	return(
		<div>
			<Header/>
			<Slider/>
			<Lang/>
			<Trending/>
			<Footer/>
			
			
		</div>
	)
}

              
ReactDOM.render(
	<App/>,
	document.querySelector('#root')
	);