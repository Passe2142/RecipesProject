import Layout from './Components/Layout';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';

function App() {
  return (
    <Layout
      header={<Header />}
      footer={<Footer />}
      mainContent={<p>Main</p>} 
    >
    </Layout>
  );
}

export default App;