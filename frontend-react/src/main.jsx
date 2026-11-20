import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Card from './Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card title="Чтение" tier="S+" battery={0} m={25} n={30} />
    <Card title="Тренировка" tier="F+" battery={3} category={2}/>
  </StrictMode>,
)
