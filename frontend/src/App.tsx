import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import Layout from './layouts/Layout';
import { RecoilRoot } from 'recoil';

//  App wrapped with React.StrictMode it's okay that component renders twice in dev mode
function App() {
  return (
    <>
      <RecoilRoot>
        <CssBaseline />
        <Layout>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Layout>
      </RecoilRoot>
    </>
  );
}

export default App;
