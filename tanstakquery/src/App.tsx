import {Routes,Route} from "react-router-dom";
import {lazy, Suspense} from "react";
import DashboardLayout from "./layouts/dashboardLayout.tsx";
import AuthLayout from "./layouts/authLayout.tsx";
import AuthGuard from "./guard/authGuard.tsx";
import {useHttpInterceptor} from "./hooks/useHttpInterceptor.tsx";

const HomeLazy = lazy(()=>import("./pages/home/index.tsx"));
const CreateCardLazy = lazy(()=>import("./pages/createCard/index.tsx"));
const UpdateCardLazy = lazy(()=>import("./pages/updateCardPage/index.tsx"));
const LoginLazy = lazy(()=>import("./pages/auth/login/index.tsx"));
const RegisterLazy = lazy(()=>import("./pages/auth/register/index.tsx"));

function App() {
    useHttpInterceptor();

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

            <Route
                path="/create-card"
                element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <CreateCardLazy/>
                    </Suspense>
                }
            />

            <Route
                path="/update-card/:id"
                element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <UpdateCardLazy/>
                    </Suspense>
                }
            />

        </Route>

        <Route element={<AuthLayout/>}>

            <Route
                path="/login"
                element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <LoginLazy/>
                    </Suspense>
            }
            />

            <Route
                path="/register"
                element={
                <Suspense>
                    <RegisterLazy/>
                </Suspense>
            }
            />

        </Route>

    </Routes>
  )
}

export default App
