import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Profile = (props) => {

  const {store,actions} = useContext(Context);
  const history = useHistory();

  const [state, setState] = useState({
    project_name: null,
    description: null,
    project_image: null,
    user_id: store.currentUser.user.id
  })

  const handleChange = e => {
    let datos = state;
    datos[e.target.name] = e.target.value
    setState({...datos});
  }

  const handleSub = async (e) => {
    e.preventDefault();
    let formData = {
    "project_name":state.project_name,
    "description":state.description,
    "project_image":state.project_image,
    "user_id":state.user_id
    }
    saveUser(formData)
  } 

  const saveUser = async (form) => {
    const res = await fetch(`http://localhost:5000/api/user/${store.currentUser.user.id}/projects`,{
      method : "POST",
      body: JSON.stringify(form),
      headers:{
        'Content-Type':'application/json',
        'Authorization': 'Bearer' + (store.currentUser.access_token)
      },
    })
      const bebe = await res.json()
      console.log(bebe)
      await getUser()
      
  }
  
  let [lista, setLista] = useState([]);
  
  const getUser = async () => {
    const d = await fetch(`http://localhost:5000/api/user/${store.currentUser.user.id}/projects`, {
      method:'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer' + (store.currentUser.access_token)
      },
      
    })
    const cancion = await d.json();
    setLista(cancion)
    /* .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(error => console.log(error)); */
  };
  
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (!store.isAuth) history.push('/login')
  },[] )
  return (
    <>
      <main className="bg-dark text-white mt-5 py-5">
        <div className="container">
          <div className="row text-center">
            <p className="h1">Profile</p>
          </div>
          <Context.Consumer>
            {({ store, actions }) => {
              return (
                <>            
                  <div className="row text-dark text-center">
                  <h1 className="py-5 text-light">{store.currentUser.user.name} {store.currentUser.user.lastname}</h1>
                    <div className="col-12 col-md-6 col-lg-4 mb-5 mx-auto">
                      <div className="card">
                        <div className="card-body">
                          <img src={store.currentUser.user.image} className="img-fluid"></img>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">Name User: {store.currentUser.user.name} {store.currentUser.user.lastname}</li>
                          <li className="list-group-item">Email: {store.currentUser.user.email} </li>
                        </ul>
                        <div className="card-body">
                          <button className="btn btn-outline-dark">
                            Ver más
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form onSubmit={handleSub} className="border border-warning p-3 rounded needs-validation">
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
              <div className="row py-2"></div>
          <div className="row text-center">
            <p className="h1">Projects</p>
            <i className="bi bi-archive h1"></i>
          </div>
          <div className="row text-dark text-center pt-4">
            {lista.map((item, i) => (
              <div className="col-12 col-md-6 col-lg-4 mb-5">
                <div className="card">
                  <div className="card-body">
                    <img src={item.project_image} className="img-fluid"></img>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      User: {item.user.name}
                    </li>
                    <li className="list-group-item">
                      Project Name: {item.project_name}
                    </li>
                  </ul>
                  <div className="card-body">
                    <button className="btn btn-success me-1">
                      <i class="bi bi-folder2-open"></i> See Project
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
                </>
              );
            }}
          </Context.Consumer>
          <div className="row mb-5"></div>
        </div>
      </main>
    </>
  );
};
