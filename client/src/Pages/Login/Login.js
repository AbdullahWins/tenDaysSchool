import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { loginUserEmail, providerLogin } = useContext(AuthContext);

  const errorToast = (error) => toast(`${error}`);
  const successToast = () => toast(`'Account Created!'`);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleLogin = () => {
    providerLogin(googleProvider)
      .then(() => {
        navigate(from, { replace: true });
        successToast();
      })
      .catch((error) => {
        errorToast(error.message);
      });
  };

  const handleGithubLogin = () => {
    providerLogin(githubProvider)
      .then(() => {
        navigate(from, { replace: true });
        successToast();
      })
      .catch((error) => {
        errorToast(error.message);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUserEmail(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
        successToast();
      })
      .catch((error) => {
        errorToast(error.message);
      });
  };

  return (
    <Form onSubmit={handleLogin} className="w-50 m-auto mt-4">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="password" />
      </Form.Group>
      <div className="my-3 d-flex flex-column align-items-center justify-content-center">
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p className="my-2">Don't have an account?</p>
        <Link to="/register">Register Now</Link>
        <p className="text-center">
          Or simply log in using google or github from bellow
        </p>
        <div className="my-4  d-flex align-items-center justify-content-center">
          <Button
            className="mx-2"
            onClick={handleGoogleLogin}
            variant="primary"
            type="submit"
          >
            Google Login
          </Button>
          <Button
            className="mx-2"
            onClick={handleGithubLogin}
            variant="primary"
            type="submit"
          >
            Github Login
          </Button>
        </div>
      </div>
      <>
        <ToastContainer />
      </>
    </Form>
  );
};

export default Login;
