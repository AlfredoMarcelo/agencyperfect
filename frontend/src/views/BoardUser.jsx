import React, { useState } from 'react'

const BoardUser = () => {
    
    let [lista, setLista] = useState([]);
    React.useEffect(() => {
        fetchData();
      }, []);

    const fetchData = async () => {
        const data = await fetch("http://127.0.0.1:5000/api/users_all");
        const cancion = await data.json();
        setLista(cancion);
      };

    return (

      <>
      <main className="bg-dark text-white mt-5 py-5">
        <div className="container">
          <div className="row py-2"></div>
          <div className="row text-center">
            <p className="h1">Portfolio</p>
            <i className="bi bi-archive h1"></i>
          </div>
          <div className="row text-dark text-center pt-4">
            {lista.map((item, i) => (
              <div className="col-12 col-md-6 col-lg-4 mb-5">
                <div className="card">
                  <div className="card-body">
                    <img src={item.image} className="img-fluid"></img>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Name User: {item.name} {item.lastname}
                    </li>
                    <li className="list-group-item">
                      Email: {item.email}
                    </li>
                  </ul>
                  <div className="card-body">
                    <button className="btn btn-warning me-1">
                      <i class="bi bi-folder2-open"></i> Editar
                    </button>
                    <button className="btn btn-danger ms-1">
                      <i class="bi bi-folder2-open"></i> Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default BoardUser