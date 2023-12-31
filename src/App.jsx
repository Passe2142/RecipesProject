import Layout from './Components/Layout';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import Home from './Pages/Home';

function App() {
  return (
    <Layout
      header={<Header />}
      mainContent={<Home />} 
      footer={<Footer />}
    >
    </Layout>
  );
}

export default App;