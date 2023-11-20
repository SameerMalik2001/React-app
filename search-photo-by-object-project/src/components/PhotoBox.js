import React, { useState } from 'react';
import {
    boy1, boy2, boy3, boy4, boy5, boy6, boy7, boy8, boy9, boy10,
    building1, building2, building3, building4, building5, building6, building7, building8, building9, building10,
    forest1, forest2, forest3, forest4, forest5, forest6, forest7, forest8, forest9, forest10,
    girl1, girl2, girl3, girl4, girl5, girl6, girl7, girl8, girl9, girl10,
    house1, house2, house3, house4, house5, house6, house7, house8, house9, house10
} from './index'


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function PhotoBox() {
    const photos = [
        { id: 1, img: boy1, tag: ['boy', 'boys', 'man', 'mans', 'human', 'humans'] }, { id: 2, img: boy2, tag: ['boy', 'boys', 'man', 'mans', 'human', 'humans'] }, { id: 3, img: boy3, tag: ['boy', 'boys', 'man', 'mans', 'human', 'humans'] }, { id: 4, img: boy4, tag: ['boy', 'boys', 'man', 'mans', 'human', 'humans'] }, { id: 5, img: boy5, tag: ['boy', 'boys', 'man', 'mans', 'human', 'humans'] }, { id: 6, img: boy6, tag: ['boy', 'boys', 'man', 'mans', 'human', 'humans'] }, { id: 7, img: boy7, tag: ['boy', 'boys', 'man', 'mans', 'human', 'humans'] }, { id: 8, img: boy8, tag: ['boy', 'boys', 'man', 'mans', 'human', 'humans'] }, { id: 9, img: boy9, tag: ['boy', 'boys', 'man', 'mans', 'human', 'humans'] }, { id: 10, img: boy10, tag: ['boy', 'boys', 'man', 'mans', 'human', 'humans'] },
        { id: 1, img: building1, tag: ['building', 'buildings'] }, { id: 2, img: building2, tag: ['building', 'buildings'] }, { id: 3, img: building3, tag: ['building', 'buildings'] }, { id: 4, img: building4, tag: ['building', 'buildings'] }, { id: 5, img: building5, tag: ['building', 'buildings'] }, { id: 6, img: building6, tag: ['building', 'buildings'] }, { id: 7, img: building7, tag: ['building', 'buildings'] }, { id: 8, img: building8, tag: ['building', 'buildings'] }, { id: 9, img: building9, tag: ['building', 'buildings'] }, { id: 10, img: building10, tag: ['building', 'buildings'] },
        { id: 1, img: forest1, tag: ['forest', 'forests', 'jungle', 'woods', 'trees', 'tree'] }, { id: 2, img: forest2, tag: ['forest', 'forests', 'jungle', 'woods', 'trees', 'tree'] }, { id: 3, img: forest3, tag: ['forest', 'forests', 'jungle', 'woods', 'trees', 'tree'] }, { id: 4, img: forest4, tag: ['forest', 'forests', 'jungle', 'woods', 'trees', 'tree'] }, { id: 5, img: forest5, tag: ['forest', 'forests', 'jungle', 'woods', 'trees', 'tree'] }, { id: 6, img: forest6, tag: ['forest', 'forests', 'jungle', 'woods', 'trees', 'tree'] }, { id: 7, img: forest7, tag: ['forest', 'forests', 'jungle', 'woods', 'trees', 'tree'] }, { id: 8, img: forest8, tag: ['forest', 'forests', 'jungle', 'woods', 'trees', 'tree'] }, { id: 9, img: forest9, tag: ['forest', 'forests', 'jungle', 'woods', 'trees', 'tree'] }, { id: 10, img: forest10, tag: ['forest', 'forests', 'jungle', 'woods', 'trees', 'tree'] },
        { id: 1, img: girl1, tag: ['girl', 'girls', 'woman', 'women', 'human', 'humans', 'person', 'persons'] }, { id: 2, img: girl2, tag: ['girl', 'girls', 'woman', 'women', 'human', 'humans', 'person', 'persons'] }, { id: 3, img: girl3, tag: ['girl', 'girls', 'woman', 'women', 'human', 'humans', 'person', 'persons'] }, { id: 4, img: girl4, tag: ['girl', 'girls', 'woman', 'women', 'human', 'humans', 'person', 'persons'] }, { id: 5, img: girl5, tag: ['girl', 'girls', 'woman', 'women', 'human', 'humans', 'person', 'persons'] }, { id: 6, img: girl6, tag: ['girl', 'girls', 'woman', 'women', 'human', 'humans', 'person', 'persons'] }, { id: 7, img: girl7, tag: ['girl', 'girls', 'woman', 'women', 'human', 'humans', 'person', 'persons'] }, { id: 8, img: girl8, tag: ['girl', 'girls', 'woman', 'women', 'human', 'humans', 'person', 'persons'] }, { id: 9, img: girl9, tag: ['girl', 'girls', 'woman', 'women', 'human', 'humans', 'person', 'persons'] }, { id: 10, img: girl10, tag: ['girl', 'girls', 'woman', 'women', 'human', 'humans', 'person', 'persons'] },
        { id: 1, img: house1, tag: ['house', 'home', 'houses'] }, { id: 2, img: house2, tag: ['house', 'home', 'houses'] }, { id: 3, img: house3, tag: ['house', 'home', 'houses'] }, { id: 4, img: house4, tag: ['house', 'home', 'houses'] }, { id: 5, img: house5, tag: ['house', 'home', 'houses'] }, { id: 6, img: house6, tag: ['house', 'home', 'houses'] }, { id: 7, img: house7, tag: ['house', 'home', 'houses'] }, { id: 8, img: house8, tag: ['house', 'home', 'houses'] }, { id: 9, img: house9, tag: ['house', 'home', 'houses'] }, { id: 10, img: house10, tag: ['house', 'home', 'houses'] }
    ]
    let search = ''
    const [content, setContent] = useState([])

    shuffleArray(photos)
    const PerformaneAction = (e) => {
        e.preventDefault();
        let temp = []
        if (search.length !== 0) {
            for (let i = 0; i < photos.length; i++) {
                if (photos[i].tag.includes(search)) {
                    temp.push({ id: photos[i].id, img: photos[i].img })
                }
            }
            setContent(temp)
        }
    }
    return (
        <div className='flex flex-col items-center gap-10 mt-10'>
            <form onSubmit={(e) => { PerformaneAction(e) }} className='flex w-1/2 gap-6 justify-between'>
                <input placeholder='Type...' type="text"
                    className='pl-4 w-3/4 h-16 bg-amber-300 outline-none rounded-2xl text-amber-800 text-3xl'
                    onChange={(e) => (search = e.target.value)}
                />
                <button type="submit" className='bg-amber-300 rounded-3xl w-40'>SUBMIT</button>
            </form>
            {content.length === 0 ?
                <div className='flex flex-wrap justify-evenly gap-6 '>
                    {
                        photos.map(photo => (
                            <img src={photo.img} className='w-[280px]' alt="des" loading='lazy' />
                        ))
                    }
                </div> :
                <div className='flex flex-wrap justify-evenly gap-6 '>
                    {
                        content.map(photo => (
                            <img key={photo.id} src={photo.img} className='w-[280px]' alt="des" loading='lazy' />
                        ))
                    }
                </div>
            }
        </div>
    );
}

export default PhotoBox;