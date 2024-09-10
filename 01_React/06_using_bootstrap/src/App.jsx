import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function App() {


  return (
    <>
      <div classNameName="my-text bg-primary ">This is a piece of text</div>
      <div className="text-primary bg-dark-subtle mt-2 mb-2 ms-2 me-2 pt-1 pb-1 ps-1 pe-1 fs-2 fw-lighter">This is a piece of text</div>
      <div className="text-success bg-danger bg-opacity-25 fs-3 fw-bold w-75 bor border rounded text-center text-decoration-underline text-capitalize opacity-100 text-opacity-100">This is a piece of text</div>
      <div className="lh-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo maxime reprehenderit provident? Aspernatur, quidem explicabo quia sed, dicta soluta quis repellendus repellat enim cumque, facere possimus? Magni qui ea, illo cum voluptatem doloremque nobis omnis exercitationem, fugiat corporis sapiente unde quasi. Possimus sint, cumque laborum ut sed minima suscipit?</div>
      <div className="m-3">
        <div className="list-group">
          <button type="button" className="list-group-item list-group-item-action list">Home</button>
          <button type="button" className="list-group-item list-group-item-action list">Products</button>
          <button type="button" className="list-group-item list-group-item-action list">About</button>
        </div>
      </div>
      <div className="position-relative border" style={{height: '200px'}}>
        <div className="bg-primary">Static</div>
        <div className="position-relative bg-success" style={{top: '20px', left: '20px'}}>Relative</div>
        <div className="position-absolute bg-danger" style={{bottom: '10px', right: '10px'}}>Absolute</div>
      </div>
      {/* turn into light theme to see shadow */}
      <div className="m-3 p-3 text-center border rounded shadow-lg">Shadow</div>
      <table className="table table-striped table-hover">
        <thead className="table-success">
          <tr>
            <th scope="col">No.</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Aryan</td>
            <td>Sinha</td>
            <td>aryansinha@gmail.com</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Alice</td>
            <td>Grey</td>
            <td>alicegrey@gmail.com</td>
          </tr>
        </tbody>
      </table>
      <div className="d-flex justify-content-between align-items-center border rounded border-warning-subtle p-3">
        <div className="p-2 bg-primary">Left</div>
        <div className="p-2 bg-success">Center</div>
        <div className="p-2 bg-info">Right</div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="p-3 bg-primary">Column 1</div>
        </div>
        <div className="col-sm-4">
          <div className="p-3 bg-success">Column 2</div>
        </div>
        <div className="col-sm-4">
          <div className="p-3 bg-info">Column 3</div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <div className="p-3 bg-warning text-center text-dark">Column 4</div>
        </div>
        <div className="col-md-6">
          <div className="p-3 bg-danger text-center">Column 5</div>
        </div>
      </div>
      <div>
        <button type="button" className="m-5 btn btn-primary position-relative">Inbox
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">99+
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
      </div>
      <div className="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div className="progress m-3" role="progressbar">
        <div className="progress-bar bg-success" style={{width: '50%'}}></div>
      </div>
      {/* <div className="progress m-3" role="progressbar">
        <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated" style={{width: '50%'}}></div>
      </div> */}
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown button
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
      <Card className='m-3' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://fastly.picsum.photos/id/821/200/200.jpg?hmac=xmadfEZKXLrqLIgmvr2YTIFvhOms4m95Y-KXrpF_VhI" />
      <Card.Body className='bg-dark text-white'>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="success">Go somewhere</Button>
      </Card.Body>
    </Card>

    </>
  )
}

export default App
