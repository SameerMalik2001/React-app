import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { singleEntity } from '../Redux/Reducers'

function ContactList() {
    const datas = useSelector(state => state.data)
    let addcontactclicked = useSelector(state => state.editedUI)
    const dispatch = useDispatch()
    console.log(addcontactclicked)
    return (
        <div className='text-gray-500 overflow-hidden w-[300px] flex flex-col flex-start min-h-[300px] bg-black rounded-3xl'>
            <p className='mb-4 mt-5 font-bold text-2xl text-center '>CONTACT LIST</p>
            {!addcontactclicked &&
                datas.map(item => (
                    <>
                        <hr />
                        <div key={item.id} onClick={() => dispatch(singleEntity({ item }))} className='hover:bg-gray-400 hover:text-black hover:cursor-pointer flex flex-col flex-start'>
                            <p className='ml-5'>{item.name}</p>
                            <p className='ml-5'>{item.number}</p>
                        </div>
                    </>
                ))
            }
            {addcontactclicked &&
                datas.map(item => (
                    <>
                        <hr />
                        <div key={item.id} className='hover:cursor-pointer flex flex-col flex-start'>
                            <p className='ml-5'>{item.name}</p>
                            <p className='ml-5'>{item.number}</p>
                        </div>
                    </>
                ))

            }
            <hr />
        </div>
    );
}

export default ContactList;
