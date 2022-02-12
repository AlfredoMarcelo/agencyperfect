import { useState } from "react";

export const Register = (props) => {
  const [state, setState] = useState({
    name: null,
    lastname: null,
    email: null,
    password: null,
    image:null

  })

  const handleChange = e => {
    let datos = state;
    datos[e.target.name] = e.target.value
    setState({...datos});
  }

  const handleSubmit = e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name",state.name);
    formData.append("lastname",state.lastname);
    formData.append("email",state.email);
    formData.append("password",state.password);
    formData.append("image",state.image);

    saveUser(FormData)
  }
  
  const saveUser = form => {
    fetch('http://localhost:5000/api/register',{
      method : 'POST',
      body: JSON.stringify(form)
    })
      .then(resp => resp.json())
      .then(data => console.log(data))
  }

  return (
    <>
      <section className="bg-dark">
        <div className="container">
          <div className="row mt-5 py-5 justify-content-center text-light ">
            <div className="col-12 text-white text-center">
              <h1 id="scrollspyHeading4">
                <i className="bi bi-ui-checks" /> Registro
              </h1>
            </div>
            <div className="col-6 mt-5">
{/* -------------------------------FORMULARIO------------------------------- */}
              <form onSubmit={handleSubmit} className="border border-warning p-3 rounded needs-validation">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastname" className="form-label">
                    Last Name :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email :
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    aria-describedby="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password : 
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    aria-describedby="password"
                    id="password"
                    name="password"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    Url Image Perfil : 
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="image"
                    id="image"
                    name="image"
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
            </div>
          </div>
          <div className="col-12 py-5">
              <p className="h4 text-light">{state.name} - {state.lastname} - {state.email} - {state.password} - {state.photo}</p>

          </div>
        </div>
      <div className="row py-3"></div>
      </section>

    </>
  );
};
