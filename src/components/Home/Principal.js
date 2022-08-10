import { useFetch } from '../../shared/hooks/useFetch';
import { Home } from './Home';
const Principal = () => {
    const [heroelist, loading] = useFetch('User','GET');
    console.log(heroelist);
    return (
        <div>
            <h1>Lista de Usuarios</h1>
            {loading ? (
                <div>Loading</div>
            ): (
                <div>
                    {heroelist.row.map((item) =>
                        <Home key={item._id} user={item.img}/>
                    )}
                </div>
            )}
        </div>
    );
}
export {Principal};