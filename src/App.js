import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header/Header';
import AuthProvider from './Contexts/AuthProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ContactUs from './ContactUs/ContactUs';
import AboutUs from './AboutUs/AboutUs';
import Footer from './Footer/Footer';
import PasswordReset from './Login/PasswordReset';
import Services from './AllCourses/AllCourses';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={
              <PrivateRoute>
                <ContactUs />
              </PrivateRoute>
            } />
            <Route path="/courses" element={
              <PrivateRoute>
                <Services />
              </PrivateRoute>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/passwordreset" element={<PasswordReset />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
