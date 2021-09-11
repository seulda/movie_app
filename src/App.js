import React from 'react';

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
    );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'data:image/jpeg;base64,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',
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThws_GJPmc5f_BfYRIwLQjjweX_iqbswnxoA&usqp=CAU',
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'data:image/jpeg;base64,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',
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7PlRm8AOeEp7i3k1HTL3wjWO2LkXLLOUOjg&usqp=CAU',
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNp8gETk3k-mQ1O7l_YsAcFYSnkTBMNjBNXQ&usqp=CAU',
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image}/>
      ))}
    </div>
  );
}

export default App;
