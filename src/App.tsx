import './App.css';
import Kitten from './components/AnimalsArea/Kitten/kitten';
import KittenFood from './components/FoodArea/KittenFood/KittenFood';

function App(): JSX.Element {
    return (
        <div>
            <h1>Welcome to my kittens website</h1>
            <p>You can find any kind of kittens in our store</p>
            <Kitten />
            <Kitten />
            <Kitten />
            <KittenFood/>

        </div>
    );
}

export default App;
