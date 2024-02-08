
const AddAchat = () => {
  return (
    <div>
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="card">
          <div className="d-flex align-items-end row">
            <div className="col-sm-7">
              <div className="card-body">
                <h5 className="card-title text-primary"><i className='bx bx-collection'></i> Ajouter un article</h5>
                <h6>Créer un nouveau produit</h6>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="card mb-4">
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-md-4">
                  <label className="col-form-label" htmlFor="basic-default-name">Nom</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="basic-default-name" placeholder="John Doe" />
                  </div>
                </div>
                <div className="col-md-4">
                  <label className="col-form-label" htmlFor="basic-default-name">Quantite</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="basic-default-name" placeholder="John Doe" />
                  </div>
                </div>
                <div className="col-md-4">
                  <label className="col-form-label" htmlFor="basic-default-name">Prix</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="basic-default-name" placeholder="John Doe" />
                  </div>
                </div>
                <div className="col-md-4">
                  <label className="col-form-label" htmlFor="basic-default-name">Description</label>
                  <div className="col-sm-10">
                    <textarea name="" className="form-control" id="" cols={10} rows={3}></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-3 justify-content-end">
                <div className="col-sm-10 d-flex gap-3">
                  <button type="submit" className="btn btn-primary ">Enregistrer</button>
                  <button type="submit" className="btn btn-danger">Annuler</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddAchat