import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import {QueryClientProvider,QueryClient} from "@tanstack/react-query";
import {AuthProvider} from "./context";

export const queryClient = new QueryClient();


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <QueryClientProvider client={queryClient}>
       <BrowserRouter>
           <AuthProvider>
               <App />
           </AuthProvider>
       </BrowserRouter>
   </QueryClientProvider>
  </StrictMode>,
)
