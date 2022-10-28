import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "react-query"
import {ReactQueryDevtools} from "react-query/devtools"
import { AppContextProvider } from './reducer';

const queryClient = new QueryClient()
ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <QueryClientProvider client = {queryClient}>
        <BrowserRouter>
          <App />
          {/* <ReactQueryDevtools initialIsOpen/> */}
        </BrowserRouter>
      </QueryClientProvider>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
