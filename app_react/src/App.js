import MyButton from "./components/buton";
import './App.css'
import product from "./object/product";

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const listItens = product.map(product =>
  <li key={product.id}
  style={{
    color: product.isFruit ? 'magenta' : 'darkgreen'
  }}>
    {product.title}
  </li>
);

function App() {
  return (
    <div className="App">
      <h1>Bem vindo ao meu app com ReactJS 😊...</h1>
    <h2>Aprendendo ReactJS...</h2>
    <MyButton />
    <h1>RAFAEL BENÍCIO PRÍNCIPE PEREIRA OLIVEIRA 😊...</h1>
    <h1>RENATA PEREIRA OLIVEIRA 👱‍♀️...</h1>
    <h1>{user.name}</h1>

    <img className="avatar" src={user.imageUrl} 
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}/>
        
    {listItens}

    <MyButton />
    </div>
  );
};

export default App;
