import { Routes, Route } from 'react-router-dom';
import TransactionDetail from '../components/Transactions/TransactionDetails';
import TransactionList from '../components/Transactions/TransactionList';

function Index() {
  return (
    <Routes>
      <Route path="/" element={<TransactionList />}></Route>
      <Route path="/transactions" element={<TransactionList />}></Route>
      <Route path="/transactions/:id" element={<TransactionDetail />}></Route>
    </Routes>
  );
}

export default Index;
