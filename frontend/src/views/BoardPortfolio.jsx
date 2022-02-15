import React, { useState } from 'react'

const BoardPortfolio = () => {

    let [lista, setLista] = useState([]);
    React.useEffect(() => {
        fetchData();
      }, []);

    const fetchData = async () => {
        const data = await fetch("http://127.0.0.1:5000/api/projects/all");
        const cancion = await data.json();
        setLista(cancion);
        console.log(cancion)

      };
      

  return (
    <div className="row mt-5 pt-5 ms-5">
          <table className="table text-dark mb-5">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Cancion</th>
              </tr>
            </thead>
            <tbody>
              {lista.map((item, i) => (
                <tr key={item.id}>
                  <th scope="row">{item.project_name}</th>
                  <td className='text-dark'>
                    {item.description}
                    <img src={item.project_image} alt="" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  )
}

export default BoardPortfolio