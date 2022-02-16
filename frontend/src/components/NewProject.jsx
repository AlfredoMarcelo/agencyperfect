/* import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const NewProject = () => {
  const { store, actions } = useContext(Context);
  const { currentUser } = getStore();

  const [state, setState] = useState({
    currentUsername: {
      user: {
        project: {
          project_name: null,
          description: null,
          project_name: null,
        },
      },
    },
  });

  const handleChange = (e) => {
    let datos = state;
    datos[e.target.name] = e.target.value;
    setState({ ...datos });
  };

  const handleSub = (e) => {
    e.preventDefault();
    let formData = {
      project_name: state.project_name,
      description: state.description,
      project_name: state.project_name,
    };
    saveUser(formData);
  };

  const saveUser = (form) => {
    fetch(
      `http://localhost:5000/api/${store.currentUser.user.id}/projects/${store.currentUser.user.project.id}`,
      {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer" + currentUser?.access_token,
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  };

  {({ store, actions }) => {
  return (
    <>
      <Context.Consumer>
        <form
          onSubmit={handleSub}
          className="border border-warning p-3 rounded needs-validation"
        >
          <div className="mb-3">
            <label htmlFor="project_name" className="form-label">
              Name Project:
            </label>
            <input
              type="text"
              className="form-control"
              id="project_name"
              name="project_name"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description :
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="project_image" className="form-label">
              Url Image Project :
            </label>
            <input
              type="text"
              className="form-control"
              aria-describedby="project_image"
              id="project_image"
              name="project_image"
              onChange={handleChange}
            />
          </div>

          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn btn-warning mt-3 mb-3 py-2 rounded-pill"
            >
              <p className="h3">
                <i className="bi bi-send-fill" />
                Submit
              </p>
            </button>
          </div>
        </form>
        
      </Context.Consumer>
    </>
  );
}}
};

export default NewProject;
 */