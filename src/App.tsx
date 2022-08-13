import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import BaseRouter from './router';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<BaseRouter />
		</BrowserRouter>
	);
}

// function App() {
// 	const [count, setCount] = useState(0);

// 	return (
// 		<div className="App">
// 			<div>
// 				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
// 					<img src="/vite.svg" className="logo" alt="Vite logo" />
// 				</a>
// 				<a href="https://reactjs.org" target="_blank" rel="noreferrer">
// 					<img src={reactLogo} className="logo react" alt="React logo" />
// 				</a>
// 			</div>
// 			<h1>Vite + React</h1>
// 			<div className="card">
// 				<button onClick={() => setCount(count => count + 1)}>count is {count}</button>
// 				<p>
// 					Edit <code>src/App.tsx 哈哈😄哈哈😄</code> and save to test HMR
// 				</p>
// 			</div>
// 			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
// 		</div>
// 	);
// }

export default App;
