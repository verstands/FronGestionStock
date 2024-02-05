import React from 'react';
import TableAchat from '../components/AchatComponent/TableAchat';

interface AchatProps {
    columns: any[];
    data: any[];
}

const Achat = () => {

    return (
        <>
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="card">
                    <div className="d-flex align-items-end row">
                        <div className="col-sm-7">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Liste des achats</h5>
                            </div>
                        </div>
                        <div className="col-sm-5 text-center text-sm-left">
                            <div className="card-body">
                                <button  className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">
                                    <i className="menu-icon bx bx-plus"></i> Faire un achat
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <TableAchat />

            </div>
            <div className="modal fade bd-example-modal-lg" tabIndex={-1}  role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        ...
                    </div>
                </div>
            </div>
        </>
    );
};

export default Achat;