import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../Assets/Images/logo.png";
import Loader from "../components/loader/Loader";
import { createLogin } from "./ApiService";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submit button clicked with values:", values);

    const loginData = {
      email: values.email,
      password: values.password,
    };

    console.log("Attempting to log in with:", loginData);

    try {
      const result = await createLogin(loginData);
      console.log("Login attempt response:", result);

      if (result.loginStatus) {
        console.log("Login successful, navigating to sidebar...");
        localStorage.setItem("valid", true);
        navigate("/sidebar");
      } else {
        console.log("Login failed with error:", result.Error);
        setError(result.Error || "Invalid credentials");
      }
    } catch (err) {
      console.error("Error logging in:", err);
      setError(err.message || "Failed to log in. Please try again later.");
    }
  };

  return (
    <>
      <Loader />
      <nav>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </nav>
      <div className="contact-section">
        <section className="tildmeddig">
          <div className="wrapper">
            <form onSubmit={handleSubmit} className="cf custom-form">
              <h1>Login</h1>
              <div className="input-box">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                  className="rounded-0"
                  required
                />
              </div>
              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) =>
                    setValues({ ...values, password: e.target.value })
                  }
                  className="rounded-0"
                  required
                />
              </div>

              <button type="submit" className="btn">
                Login
              </button>
              <div className="register-link"></div>
            </form>
          </div>
          {error && <div className="error">{error}</div>}
        </section>
      </div>
    </>
  );
};

export default Login;
