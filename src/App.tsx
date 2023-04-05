import { Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header'
import AddPost from './pages/AddPost/AddPost'
import FullPost from './pages/FullPost/FullPost'
import Home from './pages/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/posts/:id' element={<FullPost />} />
				<Route path='/add-post' element={<AddPost />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</div>
	)
}

export default App
