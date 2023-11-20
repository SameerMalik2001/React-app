import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { addContact, setSame } from '../Redux/Reducers'
import { useSelector } from 'react-redux';

function AddContact() {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [description, setDescription] = useState("")
    const [obj, setobj] = useState([])
    const dispatch = useDispatch()
    const sameFlag = useSelector(state => state.same)

    const add = () => {
        if (name.length > 0 && number.length > 0 && description.length > 0) {
            dispatch(addContact({ name, number, description }))
            setobj([name, number, description])
            setName('')
            setNumber('')
            setDescription('')
            console.log(obj)
        }
    }

    const discard = () => {
        setName('')
        setNumber(String(""))
        setDescription('')
    }

    useEffect(() => {
        if (sameFlag === true) {
            if(obj.length === 3) {
                setName(obj[0])
                setNumber(obj[1])
                setDescription(obj[2])
            }
            setTimeout(() => {
                dispatch(setSame())
            }, 1500);
        }
    }, [sameFlag, obj, dispatch]);

    const setN = (e) =>{
        if(String(e.target.value).length < 20) {
            setNumber(String(e.target.value))
        }
    }

    return (
        <div className='shadow-lg shadow-black  items-center flex flex-col justify-around text-white w-[300px] h-[450px] bg-black rounded-3xl'>
            <p className='text-2xl font-bold text-gray-500'>ADD CONTACT</p>
            <div className='bg-white w-[100%] h-[0.5px]'/>
            <div>
                <input maxLength={25} required value={name} onChange={(e) => setName(e.target.value)} className='text-[20px] bg-gray-500 text-black w-60 h-[40px] font-sans rounded-3xl p-3 ' type='text' placeholder='Name...' />
            </div>
            <div>
                <input  required value={number} onChange={(e) => setN(e)} className='text-[20px] bg-gray-500 text-black w-60 h-[40px] font-sans rounded-3xl p-3' type='number' placeholder='Number...' />
                {sameFlag && <p>Number is exist in phone</p>}
            </div>
            <div>
                <textarea maxLength={50} placeholder='Any Description...' required value={description} onChange={(e) => setDescription(e.target.value)} className='max-h-[125px] text-[20px] bg-gray-500 text-black w-60 h-[100px] font-sans rounded-3xl p-3 ' rows="2" cols="25" />
            </div>
            <div className='text-black font-bold flex gap-5 justify-between w-60'>
                <button onClick={() => add()} className='shodow-lg shadow-gray-500 mb-10 font-sans rounded-3xl w-[100px] bg-gray-500 h-[40px] '>ADD</button>
                <button onClick={() => discard()} className='shodow-lg shadow-gray-500 mb-10 font-sans rounded-3xl w-[100px] bg-gray-500 h-[40px] '>DISCARD</button>
            </div>
        </div>
    );
}

export default AddContact;