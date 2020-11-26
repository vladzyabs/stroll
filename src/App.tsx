import React from 'react'
import HomePage from './pages/Home'
import { ButtonUp, Footer, Header } from './components'

function App() {
	return (
		<>
			<div id={'#top'}></div>
			<ButtonUp/>
			<Header/>

			<HomePage/>

			<Footer/>
		</>
	)
}

export default App
