
import { Link } from 'react-router-dom'

const TableFournisseur = () => {
  return (
    <>
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
                                    <th>Nom</th>
                                    <th>Prenom</th>
                                    <th>Condition d'achat</th>
                                    <th>Livraison</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td >
                                        <span className="border bg-success border-success rounded text-white p-1">Kikwele</span>
                                    </td>
                                    <td >
                                        <span className="border bg-success border-success rounded text-white p-1">Rabby</span>
                                    </td>
                                    <td>dd</td>
                                    <td>dd</td>
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
        </>
  )
}

export default TableFournisseur