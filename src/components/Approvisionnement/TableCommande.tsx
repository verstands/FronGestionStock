
import { Link } from 'react-router-dom'

const TableCommande = () => {
  return (
    <>
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="card">
          <div className="d-flex align-items-end row">
            <div className="col-sm-7">
              <div className="card-body">
                <h5 className="card-title text-primary"><i className='bx bx-file'></i>  Les commandes</h5>
              </div>
            </div>
            <div className="col-sm-5 text-center text-sm-left">
              <div className="card-body">
                <Link to="/addcommande" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">
                  <i className="menu-icon bx bx-plus"></i> Faire une commande
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="card">
            <div className="card-header">
              <div className='d-flex items-center   row'>
                <h5 className='col-sm-8'>
                  <input type="text" placeholder='Recherche...' className='form-control' />
                </h5>
                <div className='col-sm-4 '>
                  <i className="bx bx-file-excel me-2"></i>
                  <Link to="/">
                    <i className="bx bx-file me-2"></i>
                  </Link>
                  <Link to="/">
                    <i className="bx bx-printer me-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="table-responsive text-nowrap">
              <table className="table">
                <thead>
                  <tr className="text-nowrap">
                    <th>#</th>
                    <th>Article</th>
                    <th>Qte</th>
                    <th>Date de livraison</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td >
                      <span className="border bg-danger border-danger rounded text-white p-1">Chemise</span>
                    </td>
                    <td>30</td>
                    <td>2-02-2020</td>
                    <td className='d-flex gap-1'>
                      <a href='' className='border p-1 rounded border-secondary'>
                        <i className='bx bx-edit text-success'></i>
                      </a>
                      <a href='' className='border p-1 rounded border-secondary'>
                        <i className='bx bx-trash'></i>
                      </a>
                      <a href='' className='border p-1 rounded border-secondary'>
                        <i className='bx bx-eyeicon'></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div >
      </div>

    </>
  )
}

export default TableCommande