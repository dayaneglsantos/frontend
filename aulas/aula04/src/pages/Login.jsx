import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

function Login() {
  const { login } = useContext(AuthContext);

  return (
    <>
      <h1>Login</h1>
      <button
        onClick={() => {
          login({ email: "email@teste.com", senha: "123456" });
        }}
      >
        Entrar
      </button>
    </>
  );
}

export default Login;
