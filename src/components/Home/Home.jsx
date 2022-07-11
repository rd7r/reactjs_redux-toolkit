import { useSelector } from "react-redux";
const Home = () => {
    const home_reducer = useSelector((state) => (state.HomeReducer));
    console.log(home_reducer);
    return (
        <>
            <p className="text-center h3">{home_reducer.posts}</p>
            <div className="card-group">
                <div className="card">
                    <img src="hola.jpg" className="card-img-top" alt="hola.jpg"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                </div>
            </div>
        </>
    );
};

export { Home };