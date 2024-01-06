import Layout from './Components/Layout';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import Home from './Pages/Home';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import SignIn from './Pages/SignIn';


function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout header={<Header /> } mainContent={<Home />} footer={<Footer />} />} />


    </Routes>
  </Router>
  );
}

export default App;