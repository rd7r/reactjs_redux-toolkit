import { useFetch } from '../../shared/hooks/useFetch';
import { Home } from './Home';
const Principal = () => {
    const [heroelist, loading] = useFetch('User','GET');
    return (
        <div>
            <h1>Lista de Usuarios</h1>
            <p>Numeros de heroes: {heroelist.count}</p>   
            {loading ? (
                <div>Loading</div>
            ): (
                <div className="card-group col-lg-12">
                    <div className='row'>
                        {heroelist.posts.map((item) =>
                            <Home key={item._id} user={item}/>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
export {Principal};