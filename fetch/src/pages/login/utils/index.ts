export const signInScucces = ({
    Token,
    refreshToken
}:{
    Token:string;
    refreshToken:string;
}) => {
    localStorage.setItem('Token', Token);
    localStorage.setItem('refreshToken', refreshToken);

}