import React from 'react';

const MyComponent = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-3">
          <div className="dropdown mb-3">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown 1
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a className="dropdown-item" href="#">Option 1</a></li>
              <li><a className="dropdown-item" href="#">Option 2</a></li>
              <li><a className="dropdown-item" href="#">Option 3</a></li>
            </ul>
          </div>
          <div className="dropdown mb-3">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown 2
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a className="dropdown-item" href="#">Option 1</a></li>
              <li><a className="dropdown-item" href="#">Option 2</a></li>
              <li><a className="dropdown-item" href="#">Option 3</a></li>
            </ul>
          </div>
          <div className="dropdown mb-3">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown 3
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a className="dropdown-item" href="#">Option 1</a></li>
              <li><a className="dropdown-item" href="#">Option 2</a></li>
              <li><a className="dropdown-item" href="#">Option 3</a></li>
            </ul>
          </div>
          <div className="dropdown mb-3">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown 4
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a className="dropdown-item" href="#">Option 1</a></li>
              <li><a className="dropdown-item" href="#">Option 2</a></li>
              <li><a className="dropdown-item" href="#">Option 3</a></li>
            </ul>
          </div>
          <div className="dropdown mb-3">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown 5
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a className="dropdown-item" href="#">Option 1</a></li>
              <li><a className="dropdown-item" href="#">Option 2</a></li>
              <li><a className="dropdown-item" href="#">Option 3</a></li>
            </ul>
          </div>
          <div className="dropdown mb-3">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown 6
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a className="dropdown-item" href="#">Option 1</a></li>
              <li><a className="dropdown-item" href="#">Option 2</a></li>
              <li><a className="dropdown-item" href="#">Option 3</a></li>
            </ul>
          </div>
          <div className="dropdown mb-3">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown 7
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a className="dropdown-item" href="#">Option 1</a></li>
              <li><a className="dropdown-item" href="#">Option 2</a></li>
              <li><a className="dropdown-item" href="#">Option 3</a></li>
            </ul>
          </div>
          <div className="mb-3">
            <textarea className="form-control" placeholder="Description"></textarea>
          </div>
        </div>
        <div className="col-md-6">
          <img src="https://via.placeholder.com/500x500" className="img-fluid" alt="Placeholder" />
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">Upload File</label>
            <input className="form-control" type="file" id="formFile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;

