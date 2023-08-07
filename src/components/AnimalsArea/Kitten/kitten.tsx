import './Kitten.css';
import cuteKitten from '../../../assets/images/cute-kitten.jpeg';

function Kitten(): JSX.Element {
    return (
        <div className="Kitten">
            <h1>Kitten</h1>
            <img src={cuteKitten} />
            <p>Price: 12$</p>
        </div>
    );
}

export default Kitten;
