export const api = {
  clientPort: process.env.REACT_APP_CLIENT_PORT,
  serverPort: process.env.REACT_APP_SERVER_PORT,
  baseUrl: process.env.REACT_APP_HOST,
  endpoints: {
    transactions: '/transactions/',
  },
};

export const getTransactionsApiUrl = () =>
  `${api.baseUrl}:${api.serverPort}${api.endpoints.transactions}`;
