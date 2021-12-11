import './App.css';
const Data = [
  {
    picture:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-1.jpg",
    name: "Panner butter masala",
    time:"5-10",
  },
  {
    picture:
      "https://static.toiimg.com/thumb/64696930.cms?width=1200&height=900",
    name: "Parotta shawarma",
    time:"10-25",
  },
  {
    picture:
      "https://healthyrecipesblogs.com/wp-content/uploads/2013/02/tandoori-chicken-featured-2021.jpg",
    name: "Chicken tandoori",
    time:"25-30",
  },
  {
    picture:
      "https://images.indulgexpress.com/uploads/user/imagelibrary/2019/8/1/original/Biryanifest.jpg",
    name: "Briyani",
    time:"15-20",
  },
  {
    picture:
      "https://www.kannammacooks.com/wp-content/uploads/baked-gobi-manchurian-recipe-1.jpg",
    name: "Gobi machurian",
    time:"20-30",
  },
];

function App() {
  return (
    <div className="App">
      {Data.map((info, i) => (
        <Recipe key={i} img={info.picture} name={info.name} time={info.time} />
      ))}
    </div>
  );
}

function Recipe({img,name,time}) {
  return (
    <div className="container">
      <img src={img} alt="No Img Found" />
      <div className='info'>
        <h1>{name}</h1>
        <h2>⏲️ {time}</h2>
      </div>
    </div>
  );
}
export default App;
