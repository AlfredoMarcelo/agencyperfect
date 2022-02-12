import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = (props) => {
  const { store, actions } = useContext(Context);
  const history = useHistory();

  const { email, password, error } = store;

  const { handleChange, handleSubmit } = actions;

  useEffect(() => {
    if (store.isAuth) history.push("/");
  }, []);
  return (
    <>
      <section className="bg-dark">
        <div className="container">
          <div className="row mt-5 py-5 justify-content-center text-light">
            <div className="col-12 text-white text-center">
              <p className="h1" id="scrollspyHeading4">
              <i className="bi bi-box-arrow-in-right"></i> Login
              </p>
            </div>

            {!!error && (
              <div className="alert alert-danger" role="alert">
                Error: {error}
              </div>
            )}
            <div className="col-6 mt-5">
              <form
                onSubmit={(e) => handleSubmit(e, history)}
                className="border border-warning p-3 rounded needs-validation"
                method="Post"
              >
                <div className="mb-3">
                  <input
                    type="text"
                    name="email"
                    className="form-control my-2"
                    placeholder="Email"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    name="password"
                    className="form-control my-2"
                    placeholder="Password"
                    value={password}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-grid gap-2">
                  <button className="btn btn-warning mt-3 mb-3 py-2 rounded-pill">
                    <p className="h3">
                    <i className="bi bi-door-open"></i>
                      Login
                    </p>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row py-5"></div>
        <div className="row py-5"></div>
        <div className="row py-5"></div>
      </section>
    </>
  );
};
