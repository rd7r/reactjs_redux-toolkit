import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { fetchHome } from "../../actions/homeActions";
import { getURLImage } from '../../services/UserSercice';
const Home = ({user}) => {
    const [urlImage, setUrlImage] = useState(null);
    // const [loading, setLoading] = useState();
    const dispatch = useDispatch();
    useEffect(() => {
        fetchHome(dispatch);
        const fetchdata = async() => {
            const url = getURLImage(user);
            setUrlImage(url);
        }
        fetchdata();
    }, [dispatch]);
    const {items, total} = useSelector(state => {
        const items=state.HomeReducer.posts;
        const total=state.HomeReducer.total;
        return {items,total}});
    return (
        <>
        <h2 className="text-center">Heroes Magicos</h2>
        <p><b>Numeros de Heroes Magicos </b>{total}</p>
        <div className="card-group col-lg-12">
            <div className="row">
            {items.map(post => (
                <div className="card col-lg-5 my-2 mx-1" key={post['_id']}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={urlImage || 'https://picsum.photos/200/300'} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"><b>{post['nombre']}</b></h5>
                                <p className="card-text"><b>Tipo: </b> {post['tipo']}</p>
                                <p className="card-text"><b>Genero: </b> {post['gender']}</p>
                                <p className="card-text"><b>Edad: </b> {post['age']}</p>
                                {post['habilidad'].map((hab,index)=><li key={index}>{hab}</li>)}
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
        </>
    );
};

export { Home };