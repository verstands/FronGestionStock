import React from 'react'
import { Link } from 'react-router-dom'
import TableFournisseur from '../components/Fournisseur/TableFournisseur'

const Fournisseur = () => {
    return (
        <>
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="card">
                    <div className="d-flex align-items-end row">
                        <div className="col-sm-7">
                            <div className="card-body">
                                <h5 className="card-title text-primary"><i className='bx bx-file'></i>  Les fournisseurs</h5>
                            </div>
                        </div>
                        <div className="col-sm-5 text-center text-sm-left">
                            <div className="card-body">
                                <Link to="/addfournisseur" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">
                                    <i className="menu-icon bx bx-plus"></i> Ajouer un fournisseur
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <TableFournisseur />
            </div>
        </>
    )
}

export default Fournisseur