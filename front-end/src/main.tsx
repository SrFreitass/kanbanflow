import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes/routes.tsx'
import './index.css'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './services/queryClient.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  </React.StrictMode>
)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
