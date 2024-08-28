
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Form from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Form />
  </StrictMode>,
)

export default Form;




