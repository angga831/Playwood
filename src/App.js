import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/foooter/footer';
import Nav from './components/navbar/nav';
import Top from './components/totop/Top';
import Wa from './components/totop/Wa';
import Contact from './pages/contact';
import Home from './pages/home';
import Project from './pages/project';
import { AnimatePresence } from 'framer-motion';



function App() {
  return (

	
	<div className=" bg-white ">
			<Router>
			
				<Nav/>
				<AnimatePresence>
					<Top/>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="product" element={<Project/>} />
						<Route path="about" element={<Contact/>} />
					
					
						
					</Routes>
					</AnimatePresence>
					<Wa/>
				
				<Footer/>
			
			</Router>
	</div>
	

  );
}

export default App;
