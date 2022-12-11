import './App.css';
import { useState } from 'react';
import Gallery from './Gallery.js';

const products = [{
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "blue",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
  name: "Nike Metcon 3",
  price: "150",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];

var isView = true;
function App() {
  const [icon, setIcon] = useState("view_list");
  const [_class, setClass] = useState("table-item");
  const Switch = () => {
    isView = !isView;
    if(isView) {
      setIcon("dashboard");
      setClass("table-item");
    }
    else{
      setIcon("view_list");
      setClass("list-item");
    }
  }
  return (
    <div className="App">
      <div className="conteiner__view-button">
        <span className="material-icons" onClick={Switch}>{icon}</span>
      </div>
      <Gallery data={products} _class={_class}/>
    </div>
  );
}

export default App;
