import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store.ts'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/Home/HomePage.tsx'
import PricingPage from './pages/PricingPage/PricingPage.tsx'

const router = createBrowserRouter([
  {
    path: "/react-api-project/",
    element: <App />,
    children: [
      {
        path: "/react-api-project/",
        element: <HomePage />
      },
      {
        path: "/react-api-project/pricing",
        element: <PricingPage />
      },
    ]
  }
]);;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
