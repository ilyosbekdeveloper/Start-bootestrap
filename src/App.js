import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css'

function App() {
  return (
    <div className="App">
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#!">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Contact</a></li>
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Blog</a></li>
                    </ul>
                </div>
            </div>
      </nav>

      <section className="home">
        <div className="homePage text-center p-5">
          <h1 className="h1">Welcome to Blog Home!</h1>
          <span>A Bootstrap 5 starter layout for your next blog homepage</span>
        </div>
      </section>

      <section className="container">
        <div className="row">

          <div className="col-8">

            <div className="row">
              
              <div className="col-12 border mt-4 mb-4">
                <img src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="" />
                <div className="conatiner-description p-3">
                  <p className="p-0 m-0">January 1, 2022</p>
                  <h2>Featured Post Title</h2>
                  <p className="par">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis 
                    aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita 
                    corporis animi vero voluptate voluptatibus possimus, veniam magni quis!
                  </p>

                  <button className="btn str btn-primary">Read more <img src="https://www.pngmart.com/files/15/Arrow-PNG-Image.png" alt="" /></button>
                </div>
              </div>
            </div>
            <div className="row">

                <div className="col-6">
                  <div className="bb mt-4 mb-4 mr">
                    <img src="	https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="" />
                    <div className="conatiner-description p-3">
                      <p className="p-0 m-0">January 1, 2022</p>
                      <h2>Featured Post Title</h2>
                      <p className="par">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis 
                        aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita 
                        corporis animi vero voluptate voluptatibus possimus, veniam magni quis!
                      </p>

                      <button className="btn str btn-primary">Read more <img src="https://www.pngmart.com/files/15/Arrow-PNG-Image.png" alt="" /></button>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="bb mt-4 mb-4 ml">
                    <img src="	https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="" />
                    <div className="conatiner-description p-3">
                      <p className="p-0 m-0">January 1, 2022</p>
                      <h2>Featured Post Title</h2>
                      <p className="par">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis 
                        aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita 
                        corporis animi vero voluptate voluptatibus possimus, veniam magni quis!
                      </p>
                      <button className="btn str btn-primary">Read more <img src="https://www.pngmart.com/files/15/Arrow-PNG-Image.png" alt="" /></button>
                    </div>
                  </div>
                </div>
                
            </div>
            <div className="row">

                <div className="col-6">
                  <div className="bb mt-0 mb-4 mr">
                    <img src="	https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="" />
                    <div className="conatiner-description p-3">
                      <p className="p-0 m-0">January 1, 2022</p>
                      <h2>Featured Post Title</h2>
                      <p className="par">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis 
                        aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita 
                        corporis animi vero voluptate voluptatibus possimus, veniam magni quis!
                      </p>

                      <button className="btn str btn-primary">Read more <img src="https://www.pngmart.com/files/15/Arrow-PNG-Image.png" alt="" /></button>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="bb mt-0 mb-4 ml">
                    <img src="	https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="" />
                    <div className="conatiner-description p-3">
                      <p className="p-0 m-0">January 1, 2022</p>
                      <h2>Featured Post Title</h2>
                      <p className="par">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis 
                        aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita 
                        corporis animi vero voluptate voluptatibus possimus, veniam magni quis!
                      </p>
                      <button className="btn str btn-primary">Read more <img src="https://www.pngmart.com/files/15/Arrow-PNG-Image.png" alt="" /></button>
                    </div>
                  </div>
                </div>
                
            </div>

          </div>

          <div className="col-4">
            <div className="row">

              <div className="col-12 mt-4 ml mb-3">
                <div className="card">
                  <div className="card-header">
                    <span>Search</span>
                  </div>
                  <div className="card-body">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Enter search term..."/>
                      <input type="button" className="btn btn-primary" value="Go!" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 ml mb-3">
                <div className="card">
                  <div className="card-header">
                    <span>Categories</span>
                  </div>
                  <div className="card-body d-flex">
                    <div className="card-left">
                      <a href="#">Web Design</a>
                      <a href="#">HTML</a>
                      <a href="#">Freebies</a>
                    </div>
                    <div className="card-right mx-5 px-5">
                      <a href="#">JavaScript</a>
                      <a href="#">CSS</a>
                      <a href="#">Tutorials</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 ml">
                <div className="card">
                  <div className="card-header">
                    <span>Side Widget</span>
                  </div>
                  <div className="card-body">
                    <p>You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="col-8 dark"></div>

        </div>

        <div className="row">

          <div className="col-4 offset-2">
            <nav aria-label="Pagination">
              <ul className="pagination justify-content-center my-4">
                <li className="page-item disabled">
                  <a href="#" className="page-link" tab-index="-1" aria-disabled="true">Newer</a>
                </li>
                <li className="page-item active" aria-crrent="page">
                  <a href="#!" className="page-link">1</a>
                </li>
                <li className="page-item">
                  <a href="#!" className="page-link">2</a>
                </li>
                <li className="page-item">
                  <a href="#!" className="page-link">3</a>
                </li>
                <li className="page-item disabled">
                  <a href="#!" className="page-link">...</a>
                </li>
                <li className="page-item">
                  <a href="#!" className="page-link">15</a>
                </li>
                <li className="page-item">
                  <a href="#!" className="page-link">Older</a>
                </li>
              </ul>
            </nav>
          </div>

        </div>

      </section>

      <footer className="py-5 bg-dark">
        <p className="text-white text-center p-0 m-0">Copyright © Your Website 2022</p>
      </footer>
    </div>
  );
}

export default App;
