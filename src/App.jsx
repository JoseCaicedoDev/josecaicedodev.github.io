import './App.css'
import { HashRouter } from 'react-router-dom'

import AppRoutes from './routes'

export const App = () => {
  return (
    <>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </>
  )
}
