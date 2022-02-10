export const Contact = (props) => {
  return (
    <>
      <main className="bg-dark text-white">
        <div className="container  mt-5 py-5">
          <div className="row text-center ">
            <div className="col-1 border">1</div>
            <div className="col-1 border">1</div>
            <div className="col-1 border">1</div>
            <div className="col-1 border">1</div>
            <div className="col-1 border">1</div>
            <div className="col-1 border">1</div>
            <div className="col-1 border">1</div>
            <div className="col-1 border">1</div>
            <div className="col-1 border">1</div>
            <div className="col-1 border">1</div>
            <div className="col-1 border">1</div>
            <div className="col-1 border">1</div>
          </div>
          <div className="row text-center">
            <p className="h1">Project : Educación</p>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-lg-4">
              <h5>Project de Educación</h5>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                suscipit dui ac nisi aliquam lacinia. Vivamus in scelerisque
                quam, non accumsan lorem. Interdum et malesuada fames ac ante
                ipsum primis in faucibus. Nulla facilisi. Sed id laoreet magna.
                Etiam posuere velit quis sapien semper dictum. Pellentesque ac
                augue mollis, vestibulum.
              </p>
              <button className="btn btn-outline-light mb-5 mb-lg-0">
                Contactar
              </button>
            </div>
            <div className="col-12 col-lg-8">
              <img src="./img/project-01.jpg" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12 col-lg-8 mx-auto">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                suscipit dui ac nisi aliquam lacinia. Vivamus in scelerisque
                quam, non accumsan lorem. Interdum et malesuada fames ac ante
                ipsum primis in faucibus. Nulla facilisi. Sed id laoreet magna.
                Etiam posuere velit quis sapien semper dictum. Pellentesque ac
                augue mollis, vestibulum.
              </p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12 col-lg-8 mx-auto">
              <form>
                <>
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                      Agrega tu comentario: 
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    defaultValue={""}
                  />
                  <button className="btn btn-outline-light mt-4" type="submit">
                      Comentar
                  </button>
                </>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
