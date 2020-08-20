import React from 'react';
import ReactDOM from 'react-dom';
import {Face} from './Face';
import {range} from 'd3';


const width = 166;
const height = 166;

const array = range(10);

const App = () => array.map(() => (
	 <Face
    width={width}
    height={height}
    centerX={width / 2}
		centerY={height / 2}
		strokeWidth ={10}
		mouthWidth={10}
    r={70}
    mouthRadius={40}
		eyeRadiusX={10 + Math.random() * 5}
    eyeRadiusY={20 + Math.random() * 5}
  />

));

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);