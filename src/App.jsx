import Layout from './Components/Layout';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout header={<Header /> } mainContent={<Home />} footer={<Footer />} />} />
        <Route path="/SignUp" element={<Layout header={<Header includeSearchBar={false} />} mainContent={<SignUp />} footer={<Footer />} />} />
      </Routes>
  </Router>
  );
}

export default App;