import {Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";
import DashboardLayouts from './layouts/dashboardLayouts.tsx';
import AuthLayout from "./layouts/authLayout.tsx";
import {AuthGuard} from "./guards/authguard.tsx";
import {useHttpInterceptor} from "./hooks/useHttpInterceptor.ts";
import {setAuthorizationHeader} from "./api";

const HomePageLazy = lazy(()=>import("./pages/home/index.tsx"));
const LoginPageLazy = lazy(()=>import("./pages/auth/login/index.tsx"));
const RegisterPageLazy = lazy(()=>import("./pages/auth/register/index.tsx"));
const CreatePageLazy = lazy(()=>import("./pages/create-card-page/index.tsx"));
const UpdateCardLazy = lazy(()=>import("./pages/update-card-page/index.tsx"));

function App() {

    const token = localStorage.getItem('token');

    if(token){
        setAuthorizationHeader(token)
    }

    useHttpInterceptor()
  return (
      <Routes>

          <Route element={<AuthGuard><DashboardLayouts/></AuthGuard>}>
              <Route
                  path="/"
                  element={
                      <Suspense fallback={<div>Loading...</div>}>
                          <HomePageLazy/>
                      </Suspense>
                  }
              />

              <Route
                path="/create-card"
                element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <CreatePageLazy/>
                    </Suspense>
              }
              />

              <Route
                  path="/update-card/:id"
                  element={
                  <Suspense>
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
                            <LoginPageLazy/>
                        </Suspense>
                }
                />

                <Route
                    path="/register"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <RegisterPageLazy/>
                        </Suspense>
                }
                />
          </Route>


      </Routes>
  )
}

export default App
