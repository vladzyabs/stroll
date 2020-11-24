import React from 'react'
import HomePage from './pages/Home/Home'
import { Footer, Header } from './components'

function App() {
	return (
		<div className={'app'}>
			<Header/>
			<HomePage/>
			<Footer/>
		</div>
	)
}

export default App
