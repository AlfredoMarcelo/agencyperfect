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

    <div className="row mt-5 pt-5">
          <table className="table text-white mb-5">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Cancion</th>
              </tr>
            </thead>
            <tbody>
              {lista.map((item, i) => (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td className='text-dark'>
                    {item.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  )
}

export default BoardUser