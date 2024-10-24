import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// لم تعد بحاجة إلى Provider من Redux أو استيراد المخزن من Redux
// تأكد من أنك تستخدم Zustand في التطبيق الخاص بك

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
