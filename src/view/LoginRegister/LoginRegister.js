import { useState } from "react";
import "./styles.css";

const LoginRegister = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [emailVisible, setEmailVisible] = useState(false);

  const checkInput = (e) => {
    let value = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div id="formContainer" className="text-center">
        <main className="form-signin">
          <form>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
              <input
                id="phoneinput"
                type="phone"
                value={phoneNumber}
                onChange={checkInput}
                className="form-control"
                placeholder="000-000-0000"
              />
              <label for="floatingInput">Phone Number</label>
            </div>

            {emailVisible && (
              <div>
                <div className="form-floating">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Email address</label>
                </div>

                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
              </div>
            )}
            <button
              className="w-100 btn btn-lg btn-primary"
              onClick={handleSubmit}
              type="submit"
            >
              {emailVisible ? "Register" : "Sign in"}
            </button>
            <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
          </form>
        </main>
      </div>
    </>
  );
};

export default LoginRegister;
