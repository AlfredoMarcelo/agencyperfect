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
      <div className="row mb-5"></div>
      <div className="row mb-5"></div>
      <div className="row mb-5"></div>
      <div className="row mb-5"></div>
      <h1 className="mt-5 my-5">Login</h1>
      {!!error && (
          
          <div className="alert alert-danger" role="alert">
          Error: {error}
        </div>
      )}
      <form
        onSubmit={(e) => handleSubmit(e, history)}
        className="mx-auto"
        style={{ width: "50%" }}
        method="Post"
      >
        <input
          type="text"
          name="email"
          className="form-control my-2"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          className="form-control my-2"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <button className="btn btn-info btn-block btn-sm">login</button>
      </form>
      <div className="row mb-5"></div>
      <div className="row mb-5"></div>
      <div className="row mb-5"></div>
      <div className="row mb-5"></div>
      <div className="row mb-5"></div>
    </>
  );
};
