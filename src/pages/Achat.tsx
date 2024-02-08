import { Link } from 'react-router-dom';
import TableAchat from '../components/AchatComponent/TableAchat';



const Achat = () => {

    return (
        <>
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="card">
                    <div className="d-flex align-items-end row">
                        <div className="col-sm-7">
                            <div className="card-body">
                                <h5 className="card-title text-primary"><i className='bx bx-file'></i>  Les articles</h5>
                            </div>
                        </div>
                        <div className="col-sm-5 text-center text-sm-left">
                            <div className="card-body">
                                <Link to="/addArticle" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">
                                    <i className="menu-icon bx bx-plus"></i> Ajouer un article
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <TableAchat />
            </div>
            
        </>
    );
};

export default Achat;