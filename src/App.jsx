import Layout from './Components/Layout';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import {SignUp, Home, AboutPage, SignIn, CategoriesPage } from './Pages/Index';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout header={<Header /> } mainContent={<Home />} footer={<Footer />} />} />
        <Route path="/SignUp" element={<Layout header={<Header includeSearchBar={false} />} mainContent={<SignUp />} footer={<Footer />} />} />
        <Route path="/SignIn" element={<Layout header={<Header includeSearchBar={false} />} mainContent={<SignIn />} footer={<Footer />} />} />
        <Route path="/RecipesPage" element={<Layout header={<Header />} mainContent={<Home />} footer={<Footer />} />} />
        <Route path="/AboutPage" element={<Layout header={<Header includeSearchBar={false} />} mainContent={<AboutPage />} footer={<Footer />} />} />
        <Route path="/CategoriesPage" element={<Layout header={<Header />} mainContent={<CategoriesPage />} footer={<Footer />} />} />
        <Route path="/HolidaysPage" element={<Layout header={<Header />}  footer={<Footer />} />} />

      </Routes>
  </Router>
  );
}

export default App;