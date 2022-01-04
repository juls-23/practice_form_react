import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';


function App() {
  return (
   <BrowserRouter>
   <Header />
   <Routes>
   <Route path="/" element={<Homepage />}>home</Route>
   <Route exact path='/signin' element={<SignInPage />}/>
   <Route exact path='/signUp' element={<SignUpPage />}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App;
