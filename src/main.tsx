import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from "./routes";
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';
import GlobalStyles from './styles/global';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider locale={ptBR}>
        <GlobalStyles />
        <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>,
)
