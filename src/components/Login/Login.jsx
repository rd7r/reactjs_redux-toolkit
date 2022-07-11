const Login = () => {
    return (
        <>
        <header className="App-header">
            <div className="card col-md-3 justify-content-between">
                <img src="https://i.pinimg.com/originals/ff/bb/e4/ffbbe4032fa4bc3069ad11bbda25e8bd.jpg" alt="alizee" className="card-img-top rounded-circle align-self-center my-5" style={{ width: '170px', height: '170px' }} />
                <div className="card-body d-flex justify-content-center">
                    <form>
                        <div className="row mb-3">
                            <label for="exampleInputEmail1" className="form-label col-sm-4 d-none d-lg-block">Usuario</label>
                            <input type="email" className="form-control col" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Usuario"/>
                        </div>
                        <div className="row mb-3">
                            <label for="exampleInputPassword1" className="form-label col-sm-4 d-none d-lg-block">Password</label>
                            <input type="password" className="form-control col" id="exampleInputPassword1" placeholder="Enter Password"/>
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary">Ingresar</button>
                        </div>
                    </form>
                </div>
            </div>
            </header>
        </>
    );
};

export { Login };