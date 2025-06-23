import {lazy, Suspense,} from 'react'
import {Route, Routes} from "react-router-dom";
import DashboardLayout from "./layout/dashboardLayout.tsx";
import AuthGuard from "./guard/authGuard.tsx";
import AuthLayout from "./layout/authLayout.tsx";

function App() {

    const HomeLazy = lazy(() => import('./pages/home/view'));
    const LoginLazy = lazy(()=>import('./pages/login/index.tsx'));
    const RegisterLazy = lazy(()=>import('./pages/register/index.tsx'));

  return (
    <Routes>

        <Route element={
            <AuthGuard>
                <DashboardLayout/>
            </AuthGuard>
        }>

            <Route
                path="/"
                element={
                    <Suspense fallback={<div>Loading...</div>}>
                            <HomeLazy/>
                    </Suspense>
                }
            />

        </Route>


        <Route element={<AuthLayout/>}>
            <Route
                path="login"
                element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <LoginLazy/>
                    </Suspense>
                }
            />

            <Route
                path="register"
                element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <RegisterLazy/>
                    </Suspense>
                }
            />
        </Route>

    </Routes>
  )
}

export default App
