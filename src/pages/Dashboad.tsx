
const Dashboad = () => {
  return (
    <>
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-4 order-3 order-md-2">
              <div className="row">
                <div className="col-12 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between flex-sm-row flex-column gap-3">
                        <div className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                          <div className="card-title">
                            <h5 className="text-nowrap mb-2">Fournisseur</h5>
                            <span className="badge bg-label-warning rounded-pill">2024</span>
                          </div>
                          <div className="mt-sm-auto">
                            <small className="text-success text-nowrap fw-semibold">
                              <i className='bx bx-group menu-icon'></i>
                            </small>
                            <h3 className="mb-0">84,686</h3>
                          </div>
                        </div>
                        <div id="profileReportChart"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4 order-3 order-md-2">
              <div className="row">
                <div className="col-12 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between flex-sm-row flex-column gap-3">
                        <div className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                          <div className="card-title">
                            <h5 className="text-nowrap mb-2">Commande</h5>
                            <span className="badge bg-label-warning rounded-pill">2024</span>
                          </div>
                          <div className="mt-sm-auto">
                            <small className="text-success text-nowrap fw-semibold">
                              <i className='menu-icon bx bx-package'></i>
                            </small>
                            <h3 className="mb-0">84,686</h3>
                          </div>
                        </div>
                        <div id="profileReportChart"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4 order-3 order-md-2">
              <div className="row">
                <div className="col-12 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between flex-sm-row flex-column gap-3">
                        <div className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                          <div className="card-title">
                            <h5 className="text-nowrap mb-2">Alert</h5>
                            <span className="badge bg-label-warning rounded-pill">2024</span>
                          </div>
                          <div className="mt-sm-auto">
                            <small className="text-danger text-nowrap fw-semibold">
                              <i className='menu-icon bx bx-book'></i>
                            </small>
                            <h3 className="mb-0 text-danger">8</h3>
                          </div>
                        </div>
                        <div id="profileReportChart"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-8 order-1 mb-4">
              <div className="card h-100">

                <div className="card-body px-0">
                  <div className="tab-content p-0">
                    <div className="tab-pane fade show active" id="navs-tabs-line-card-income" role="tabpanel">
                      <div className="d-flex p-4 pt-3">
                        <div className="avatar flex-shrink-0 me-3">
                          <img src="../assets/img/icons/unicons/wallet.png" alt="User" />
                        </div>
                        <div>
                          <small className="text-muted d-block">Graphique</small>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 order-2 mb-4">
              <div className="card h-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="card-title m-0 me-2">Les stock</h5>                  
                </div>
                <div className="card-body">
                  <ul className="p-0 m-0">
                    <li className="d-flex mb-4 pb-1">
                      <div className="avatar flex-shrink-0 me-3">
                        <img src="../assets/img/icons/unicons/wallet.png" alt="User" className="rounded" />
                      </div>
                      <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div className="me-2">
                          <small className="text-muted d-block mb-1">Categorie</small>
                          <h6 className="mb-0">Artcile</h6>
                        </div>
                        <div className="user-progress d-flex align-items-center gap-1">
                          <h6 className="mb-0">270</h6>
                          <span className="text-muted">$</span>
                        </div>
                      </div>
                    </li>
                    <li className="d-flex mb-4 pb-1">
                      <div className="avatar flex-shrink-0 me-3">
                        <img src="../assets/img/icons/unicons/wallet.png" alt="User" className="rounded" />
                      </div>
                      <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div className="me-2">
                          <small className="text-muted d-block mb-1">Categorie</small>
                          <h6 className="mb-0">Artcile</h6>
                        </div>
                        <div className="user-progress d-flex align-items-center gap-1">
                          <h6 className="mb-0">270</h6>
                          <span className="text-muted">$</span>
                        </div>
                      </div>
                    </li>
                    <li className="d-flex mb-4 pb-1">
                      <div className="avatar flex-shrink-0 me-3">
                        <img src="../assets/img/icons/unicons/wallet.png" alt="User" className="rounded" />
                      </div>
                      <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div className="me-2">
                          <small className="text-muted d-block mb-1">Categorie</small>
                          <h6 className="mb-0">Artcile</h6>
                        </div>
                        <div className="user-progress d-flex align-items-center gap-1">
                          <h6 className="mb-0">270</h6>
                          <span className="text-muted">$</span>
                        </div>
                      </div>
                    </li>
                    <li className="d-flex mb-4 pb-1">
                      <div className="avatar flex-shrink-0 me-3">
                        <img src="../assets/img/icons/unicons/wallet.png" alt="User" className="rounded" />
                      </div>
                      <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div className="me-2">
                          <small className="text-muted d-block mb-1">Categorie</small>
                          <h6 className="mb-0">Artcile</h6>
                        </div>
                        <div className="user-progress d-flex align-items-center gap-1">
                          <h6 className="mb-0">270</h6>
                          <span className="text-muted">$</span>
                        </div>
                      </div>
                    </li>
                    <li className="d-flex mb-4 pb-1">
                      <div className="avatar flex-shrink-0 me-3">
                        <img src="../assets/img/icons/unicons/wallet.png" alt="User" className="rounded" />
                      </div>
                      <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                        <div className="me-2">
                          <small className="text-muted d-block mb-1">Categorie</small>
                          <h6 className="mb-0">Artcile</h6>
                        </div>
                        <div className="user-progress d-flex align-items-center gap-1">
                          <h6 className="mb-0">270</h6>
                          <span className="text-muted">$</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-backdrop fade"></div>
      </div>

    </>
  )
}

export default Dashboad