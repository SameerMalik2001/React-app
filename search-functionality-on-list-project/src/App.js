import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const word_list = [ 'Apple', 'Apricot', 'Araza', 'Arhat fruit', 'Atemoya', 'Avocado', 'Acai berry', 'Acerola',
    'Acerola cherry', 'African cherry orange', 'African cucumber', 'African mango', 'Alaskan bunchberry',
    'Amanatsu', 'Ambarella', 'American persimmon', 'American red raspberry', 'Annona', 'Annona conica',
    'Banana', 'Babaco', 'Banana melon', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry',
    'Breadfruit', 'Buddha hand (fingered citron)', 'Barbados cherry', 'Blood orange', 'Bearberry', 'Bignay',
    'Cacao', 'Cactus pear', 'Canary Melon', 'Cantaloupe', 'Carambola', 'Casaba Melon', 'Cherimoya (Custard Apple)',
    'Cherry', 'Chico fruit', 'Clementine', 'Cloudberry', 'Coconut', 'Crab apple', 'Cranberry', 'Currant', 'Cucumber',
    'Date', 'Dragonfruit', 'Damson plum', 'Dewberry', 'Desert lime', 'Duku', 'Durian', 'Davidson plum', 'DAnjou pear',
    'Dried fig', 'Dragon fruit', 'Damiana', 'Davidson plum', 'Dewfruit', 'Dingleberry', 'Desert raisin', 'Duku langsat',
    'Elderberry', 'Elephant apple', 'Emblica', 'Emu apple', 'Entawak', 'Etrog', 'European pear', 'Eggfruit', 'Evergreen huckleberry',
    'Exotic fruit', 'Emblic', 'Elderflower', 'Elderberry fruit', 'Eastern mayhaw', 'Fig', 'Feijoa', 'Finger lime', 'Fuji apple',
    'Fuyu persimmon', 'Farkleberry', 'Forest strawberries', 'Florida strangler fig', 'Fennel fruit', 'Fei zi xiao', 'Fivefinger fruit',
    'Fragrant pear', 'Finger citron', 'Frangipani fruit', 'Fingered citron', 'Flat peach', 'Grapefruit', 'Grapes', 'Guava', 'Gooseberry',
    'Golden kiwi', 'Galia melon', 'Genip', 'Gac fruit', 'Goumi berry', 'Ground cherry', 'Green apple', 'Grenadilla', 'Groundcherry',
    'Ginkgo biloba fruit', 'Goyavier', 'Goldenberry', 'Grape tomato', 'Honeydew melon', 'Huckleberry', 'Hog plum', 'Hackberry', 'Hala fruit',
    'Heirloom apples', 'Hazelnut fruit', 'Hawthorn berry', 'Horned melon', 'Hazelnut', 'Hojiblanca olives', 'Hachiya persimmon', 'Hedge apple',
    'Huito', 'Hardy kiwi', 'Hubbard squash', 'Hart sapote', 'Ilama', 'Illawarra plum', 'Imbe', 'Inca Berry', 'Indian Almond', 'Indian Fig',
    'Indian Gooseberry', 'Indian Jujube', 'Indian Pomegranate', 'Indian Prune', 'Indian Star Fruit', 'Indonesian lime', 'Inga Bean', 'Iowan Crabapple',
    'Italian Plum', 'Ivory Palm Fruit', 'Izu Persimmon', 'Jackfruit', 'Jabuticaba', 'Jambul', 'Jostaberry', 'Japanese Persimmon', 'Juneberry', 'Jujube',
    'Java Apple', 'Jamaican Cherry', 'Jackalberry', 'Japanese Plum', 'Jaltomata', 'Jocote', 'Jujubee Plum', 'Japanese Raisin Tree', 'Juniper berry', 'Jambolan',
    'Kiwano (Horned Melon)', 'Kiwi', 'Kumquat', 'Kaffir Lime', 'Key Lime', 'Kandis', 'Kesar Mango', 'Kaki Fruit', 'Kinkan', 'Kei Apple', 'Kedondong',
    'Kaffir Plum', 'Karanda', 'Kavika Fruit', 'Kokum', 'Kandis plum', 'Karkalla', 'Keriberry', 'Lemon', 'Lime', 'Lychee', 'Longan', 'Loquat', 'Lemonade Fruit',
    'Langsat', 'Loganberry', 'Lemon Drop Mangosteen', 'Lakoocha', 'Lemon Guava', 'Limequat', 'Lucuma', 'Lulo', 'Limeberry', 'Lingonberry', 'Lemon drop melon',
    'Mango', 'Mandarin', 'Mulberry', 'Meyer Lemon', 'Macadamia Nut', 'Melon', 'Miracle Fruit', 'Muskmelon', 'Marionberry', 'Medlar', 'Mountain Ash Berry', 'Muscat Grape',
    'Mango Steen', 'Morinda Citrifolia (Noni)', 'Mayhaw Berry', 'Muscadine grape', 'Mammy apple', 'Nectarine', 'Navel Orange', 'Nashi Pear', 'Noni Fruit', 'Naranjilla', 'Nance Fruit',
    'Naranja Agria', 'Nance', 'Natal Plum', 'Negronne Fig', 'Nefarious Plum', 'Nectarberry', 'Nephelium Lappaceum (Rambutan)', 'Nungu Fruit', 'Naranjilla Fruit', 'Neem fruit', 'Orange',
    'Olive', 'Ogeechee Lime', 'Otaheite Apple', 'Ogeechee Plum', 'Ogeechee Tupelo', 'Okari Nut', 'Osage Orange', 'Ogeechee Cherry', 'Oysterberry', 'Ogeechee Persimmon', 'Ogeechee Limequat',
    'Ogeechee Huckleberry', 'Ogeechee Raspberry', 'Ogeechee Tupelo Berry', 'Oyster fruit', 'Oregon grape', 'Pineapple', 'Papaya', 'Peach', 'Pear', 'Passionfruit', 'Plum', 'Pomegranate',
    'Persimmon', 'Plantain', 'Pawpaw', 'Prickly Pear', 'Pineberry', 'Pepino', 'Physalis', 'Pitaya', 'Raspberry', 'Redcurrant', 'Rhubarb', 'Rambutan', 'Red apple', 'Red banana', 'Rose apple',
    'Red grapes', 'Red pear', 'Red plum', 'Rosehip', 'Rockmelon', 'Rainier cherry']
  const [searchList, setSearchList] = useState([])
  const [word, setWord] = useState("")

  useEffect(() => {
    const temp = []
    for (let i = 0; i < word_list.length; i++) {
      if ((word_list[i].toLowerCase()).indexOf(word.toLowerCase()) !== -1) {
        temp.push(word_list[i])
      }
    }
    setSearchList(temp)
  }, [word]);


  return (
    <div className='w-full h-screen flex flex-col items-center'>
      <p className='text-3xl text-green-400 mb-4'>Search Any Fruit</p>
      <input type="text"
        className='w-4/12 h-10 bg-green-500 text-green-200 font-semibold rounded-bl-xl text-[25px] p-1 pl-2 outline-none rounded-br-xl'
        onChange={(e) => setWord(e.target.value)}
      />
      {
        word.length === 0 &&
        word_list.map(item => (
          <div className='text-2xl text-green-200'>
            {item}
          </div>
        ))
      }
      {
        word.length !== 0 && searchList.length !== 0 &&
        searchList.map(item => (
          <div className='text-2xl text-green-200'>
            {item}
          </div>
        ))
      }
      {
        word.length !== 0 && searchList.length === 0 &&
        <div className='text-2xl text-green-200'>Item Not Found</div>
      }

    </div>
  );
}

export default App;
