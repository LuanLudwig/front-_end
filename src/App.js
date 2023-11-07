import { BrowserRouter, Routes, Route } from 'react-router-dom';

/*componentes */
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import Message from './components/layout/Message';
import Home from './components/pages/Home';
import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';


/* context */
import { UserProvider } from './context/UserContext';




function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Navbar />
        <Message />
          <Container>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </Container>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
