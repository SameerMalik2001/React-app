import { useEffect, useState, useRef } from 'react';

function App() {
  const para = ['As the sun set behind the hills, Sarah sat by the old oak tree, reminiscing about her childhood adventures in this serene countryside. The gentle rustle of leaves brought memories flooding back—playing hide-and-seek, picking wildflowers, and sharing secrets with her best friend, Emily. It felt like yesterday. Suddenly, a distant laughter echoed, breaking the silence. Sarah smiled, realizing it was Emily, now a successful architect, visiting their hometown after years. Embracing warmly, they relived their past, cherishing the timeless bond that had withstood the tests of time and distance.',
    'In the heart of the bustling city, Jake found solace amidst the books at his favorite bookstore. Every corner held a world waiting to be explored. One rainy afternoon, he stumbled upon a mysterious old diary tucked away in the dusty shelves. Its faded pages unveiled the intriguing life of a forgotten poet from centuries ago. Jake delved into the verses, discovering tales of love, loss, and resilience woven intricately through time. Each word spoke volumes, transporting him to an era he had only dreamed of, igniting a passion for preserving forgotten stories in the fabric of his own.',
    'Amidst the chaos of the urban jungle, Amy found tranquility in her rooftop garden. Her love for nature blossomed amidst the concrete skyline. One morning, a tiny sparrow perched on her window ledge, injured. Without hesitation, she nursed the fragile bird back to health. In the days that followed, a bond formed, transcending the barriers of species. As the sparrow healed, Amy learned invaluable lessons of resilience and compassion. With a flutter of wings, the sparrow soared into the azure sky, leaving Amy with a heart brimming with gratitude and a newfound connection to the world around her.',
    'At the quaint cafe on Elm Street, Daniel met a stranger whose eyes held tales untold. Over steaming cups of coffee, they exchanged snippets of their lives. The stranger, an artist, spoke of painting emotions on the canvas, while Daniel, an aspiring writer, shared his dreams of penning tales that echoed the human experience. Hours flew by like minutes, conversations weaving threads of creativity. With a promise to meet again, they parted ways, but their chance encounter lingered, igniting a spark that fueled their creative pursuits, each drawing inspiration from the others passion.',
    'In a small coastal town, Maya found herself captivated by the rhythm of the waves. Her childhood summers were spent collecting seashells, each carrying stories of the oceans whispers. One day, a peculiar conch shell washed ashore, resonating with a faint melody. Intrigued, Maya listened closely, feeling the oceans song reverberate through her soul. She embarked on a quest to discover its origins, meeting fishermen, storytellers, and elders who unraveled the tale of a lost civilization whose music echoed through time. Maya realized that some stories were meant to be heard not with ears, but with the heart.']

  const [paragraph, setParagraph] = useState(para[Math.floor(Math.random() * 5)]);
  const [text, setText] = useState('')
  const [score, setScore] = useState(0)
  const paragraphList = paragraph.split(/\b|\s|(?=[,.])/)
  const [sahi, setSahi] = useState(0)
  const [galat, setGalat] = useState(0)
  const [textList, setTextList] = useState([])
  const [incorrect, SetIncorrect] = useState(0)
  const textareaRef = useRef(null)
  const textareaRef1 = useRef(null)

  const reset = () => {
    setParagraph(para[Math.floor(Math.random() * 5)])
    setSahi(0)
    setScore(0)
  }
  
  useEffect(() => {
    const textL = text.split(/\b|\s|(?=[,.?()&%!"])/)
    setTextList(textL)
    let c = 0
    for (let i = 0; i < textL.length - 1; i++) {
      const element = textL[i];
      if (element === paragraphList[i]) {
        c += 1
      } else {
        SetIncorrect(prev=>prev+1)
        break
      }
    }
    setSahi(c)
    setGalat(textL.length - c - 1)
    setScore([((c / paragraphList.length) * 100).toFixed(2)])
  }, [text]);

  const copy = (e) => {
    e.preventDefault();
    alert("copy is not allowed")
  }

  const drag = (e) => {
    e.preventDefault();
    alert("Drop is not allowed")
  }

  const paste = (e) => {
    e.preventDefault();
    alert("Paste is not allowed")
  }

  useEffect(() => {
    const moveCursorToEnd = (textareaRef) => {
      if (textareaRef.current) {
        const length = textareaRef.current.value.length;
        textareaRef.current.setSelectionRange(length, length);
      }
    };
    if(galat > 0) {
      if(textareaRef.current)
        textareaRef.current.focus()
      moveCursorToEnd(textareaRef)
    }
    if(galat === 0) {
      if(textareaRef1.current) {
        textareaRef1.current.focus()
        moveCursorToEnd(textareaRef1)
      }
    }
  }, [galat]);

  return (
    <div className='w-screen flex gap-4 mt-3 flex-col items-center '>
      <p className='text-white text-3xl '>Typing Speed Test</p>
      {
        score !== 0 &&
        <p className='text-white text-2xl'>You Scored {score}% with {sahi} correct words and {galat} incorrect words and {incorrect} mistakes</p>
      }
      <div onCopy={(e) => copy(e)} className='w-[350px] sm:w-[700px] select-none outline-none text-green-950 rounded-2xl p-3 bg-green-400 text-2xl h-[250px] overflow-y-auto'>
        {paragraph}
      </div>
      <p className='text-white text-xl '>Write the above content in below box: </p>
      {
        (textList.length - 1 - sahi) > 0 &&
        <textarea onPaste={(e) => paste(e)} ref={textareaRef} onDrop={(e) => drag(e)} value={text} onChange={(e) => [setText(e.target.value)]} id='focus' className='w-[350px] sm:w-[700px] outline-none text-green-950 rounded-2xl p-3 bg-red-600 text-2xl h-[250px] overflow-y-auto' />

      }
      {
        (textList.length - 1 - sahi) === 0 &&
        <textarea onPaste={(e) => paste(e)} ref={textareaRef1} onDrop={(e) => drag(e)} value={text} onChange={(e) => [setText(e.target.value)]} id='focus' className='w-[350px] sm:w-[700px] outline-none text-green-950 rounded-2xl p-3 bg-green-400 text-2xl h-[250px] overflow-y-auto' />
      }
      <button onClick={() => reset()} className='w-16 h-10 rounded-2xl text-white font-semibold hover:bg-green-600 bg-green-500'>Reset</button>
    </div>
  );
}

export default App;
