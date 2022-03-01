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
    
    const deleteUser = async (id) => {
      const res = await fetch(`http://127.0.0.1:5000/api/delete/${id}`,{
        method:"DELETE"
      });
      const data = await res.json();
      console.log(data)
      await fetchData()
    }

    const editUser = async (id) =>{
      const res = await fetch(`http://127.0.0.1:5000/api/user/${id}`)
        const data = await res.json();
        console.log(data)
      
    }
    
    

    return (

      <>
      <main className="bg-dark text-white mt-5 py-5">
        <div className="container">
          <div className="row py-2"></div>
          <div className="row text-center">
            <p className="h1">Users</p>
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
                    <button className="btn btn-warning me-1" onClick={()=> editUser(item.id)}>
                      <i className="bi bi-folder2-open"></i> Edit
                    </button>
                    <button className="btn btn-danger ms-1"onClick={()=> deleteUser(item.id)}>
                      <i className="bi bi-folder2-open"></i> Delete
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