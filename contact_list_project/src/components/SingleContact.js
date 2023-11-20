import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { editedAddContact, deleteContact,editEnable } from '../Redux/Reducers';


function SingleContact() {
    let data = useSelector(state => state.singleItem)
    let editui = useSelector(state => state.editedUI)
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [description, setDescription] = useState("")

    const sets = () => {
        dispatch(editEnable(false))
    }

    const fill = () => {
        setName(data[0].name)
        setNumber(data[0].number)
        setDescription(data[0].description)
    }

    const setN = (e) => {
        if (String(e.target.value).length < 20) {
            setNumber(String(e.target.value))
        }
    }

    return (
        <div className='break-words flex flex-col items-center justify-between w-[300px] h-[450px] bg-black rounded-3xl'>
            {!editui &&
                <div className='break-words flex flex-col items-center justify-start w-[300px] h-[450px] bg-black rounded-3xl'>
                    <p className='mt-5 mb-3 text-center text-2xl font-bold text-gray-500  w-64'>CONTACT INFO</p>
                    <div className='mb-5 bg-white w-[100%] h-[0.5px]'/>
                    {
                        data !== null &&
                        <div className='break-words flex-col flex gap-5'>
                            <p className='text-xl text-gray-500 break-all w-64 h-15'>{data[0].name === null ? "null" : "Name : " + data[0].name}</p>
                            <p className='text-xl text-gray-500 break-all w-64 h-15'>{data[0].number == null ? "null" : "Number : " + data[0].number}</p>
                            <p className='text-lg text-gray-500 break-all w-64 h-40'> Description : {data[0].description == null ? "null" : data[0].description}</p>
                            <div className='flex justify-center'>
                                <button onClick={() => [dispatch(editEnable(true)),fill()]} className='mb-7 w-20 h-8 rounded-3xl bg-gray-500 text-black font-bold text-xl '>EDIT</button>
                            </div>
                            </div>
                    }
                        </div>
                    }
                    {editui &&
                        <>
                            <p className='mt-5 text-center text-2xl font-bold text-gray-500  w-64'>EDIT CONTACT</p>
                            <div>
                                <input maxLength={25} required value={name} onChange={(e) => setName(e.target.value)} className='text-[20px] bg-gray-500 text-black w-60 h-[40px] font-sans rounded-3xl p-3 ' type='text' placeholder='Name...' />
                            </div>
                            <div>
                                <input required value={number} onChange={(e) => setN(e)} className='text-[20px] bg-gray-500 text-black w-60 h-[40px] font-sans rounded-3xl p-3' type='number' placeholder='Number...' />
                            </div>
                            <div>
                                <textarea maxLength={50} placeholder='Any Description...' required value={description} onChange={(e) => setDescription(e.target.value)} className='max-h-[125px] text-[20px] bg-gray-500 text-black w-60 h-[100px] font-sans rounded-3xl p-3 ' rows="2" cols="25" />
                            </div>
                            <div className='text-black font-bold flex gap-5 justify-between w-60'>
                                <button onClick={() => [dispatch(editedAddContact({ data, name, number, description })), sets()]} className='shodow-lg shadow-gray-500 mb-10 font-sans rounded-3xl w-[100px] bg-gray-500 h-[40px] '>Save</button>
                                <button onClick={() => [dispatch(editEnable(false)), dispatch(deleteContact({number})) ]} className='shodow-lg shadow-gray-500 mb-10 font-sans rounded-3xl w-[100px] bg-gray-500 h-[40px] '>DELETE</button>
                            </div>
                        </>
                    }
                </div>
    );
}

            export default SingleContact;