export const SignInSuccess = (
    {
        token,
        refreshToken
    }:{
        token:string;
        refreshToken:string
    }) => {
    localStorage.setItem("token",token);
    localStorage.setItem("refreshToken",refreshToken);
}