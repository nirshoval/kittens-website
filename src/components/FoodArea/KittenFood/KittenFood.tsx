import './KittenFood.css';
import CatFood from '../../../assets/images/purina-dry-cat-kitten-chow.png';

function KittenFood(): JSX.Element {
    return (
        <div className="KittenFood">
            <h1>Food name:</h1>
            <img src={CatFood} />
            <p>Price: 20$</p>
        </div>
    );
}

export default KittenFood;