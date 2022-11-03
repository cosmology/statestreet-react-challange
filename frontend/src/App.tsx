import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import Layout from './layouts/Layout';

//  App wrapped with React.StrictMode it's okay that component renders twice in dev mode
function App() {
  return (
    <>
      <CssBaseline />
      <Layout>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
