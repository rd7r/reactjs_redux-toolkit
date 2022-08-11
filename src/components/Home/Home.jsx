// import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
// import { fetchHome } from "../../actions/homeActions";
import { getURLImage } from '../../services/UserSercice';
const Home = ({user}) => {
    const [urlImage, setUrlImage] = useState(null);
    // const [loading, setLoading] = useState();
    // const dispatch = useDispatch();
    // console.log(user);
    useEffect(() => {
        // fetchHome(dispatch);
        const fetchdata = async() => {
            const url = await getURLImage(user.img);
            setUrlImage(url);
        }
        fetchdata();
    }, []); //[dispatch]
    // const {items, total} = useSelector(state => {
    //     const items=state.HomeReducer.posts;
    //     const total=state.HomeReducer.total;
    //     return {items,total}});
    //     console.log(posts);
    // console.log(urlImage);
    return (
        <>
            <div className="card col-lg-5 my-2 mx-4" key={user._id}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={urlImage || 'https://picsum.photos/200/300'} className="img-fluid rounded-start" alt={urlImage}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title"><b>{user.nombre}</b></h5>
                            <p className="card-text"><b>Tipo: </b> {user.tipo}</p>
                            <p className="card-text"><b>Genero: </b> {user.gender}</p>
                            <p className="card-text"><b>Edad: </b> {user.age}</p>
                            {user['habilidad'].map((hab,index)=><li key={index}>{hab}</li>)}
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Home };