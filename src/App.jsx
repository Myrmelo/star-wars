import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Characters from './pages/Characters';
import Versus from './pages/Versus';
import Movies from './pages/Movies';
import './App.css';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<div className='app-container'>
					<nav>
						<Link to='/' className='home-link'>
							<h1>Star Wars</h1>
						</Link>
						<Link to='/characters' className='nav-button'>
							<button>Characters</button>
						</Link>
						<Link to='/movies' className='nav-button'>
							<button>Movies</button>
						</Link>
						<Link to='/versus' className='nav-button'>
							<button>Versus</button>
						</Link>
					</nav>
					<Routes>
						<Route path='/characters' element={<Characters />} />
						<Route path='/movies' element={<Movies />} />
						<Route path='/versus' element={<Versus />} />
					</Routes>
				</div>
			</Router>
		</QueryClientProvider>
	);
}

export default App;
