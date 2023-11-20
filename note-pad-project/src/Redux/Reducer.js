import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    notes:[{id:nanoid(),title:"Lorem ipsum dolor", text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cumque id obcaecati. Aperiam dignissimos iusto quibusdam asperiores explicabo dicta sed quos saepe doloremque accusamus! Harum eaque cumque odit distinctio ab. Ab saepe corrupti, qui perferendis aliquam dolor. Voluptatem dolores quae laudantium inventore accusantium omnis, doloribus in commodi numquam exercitationem odio? Placeat, ut! Libero repellendus vero nihil fugiat cumque modi porro."},
    {id:nanoid(),title:"check second", text:"Hello World this is second"}],
    singleNoteId : -1,
    EditId:-1
}

export const notePadSlice = createSlice({
    name: 'notepad',
    initialState,
    reducers : {
        setSingleNoteId:(state, action)=>{
            state.singleNoteId = action.payload
            state.EditId = action.payload
        },
        setEditId:(state, action)=>{
            state.EditId = action.payload
        },
        addnote:(state, action)=>{
            const {title, text} = action.payload
            state.notes.push({id:nanoid(), title:title, text:text})
        },
        editNote:(state, action)=>{
            const {id, title, text} = action.payload
            state.notes = state.notes.filter(note=>note.id !== id)
            state.notes.push({id:nanoid(), title:title, text:text})
        },
        noteDelete:(state, action)=>{
            const {id} = action.payload
            state.notes = state.notes.filter(note=>note.id !== id)
        },
    }

})

export const {setSingleNoteId, setEditId, addnote, editNote,noteDelete} = notePadSlice.actions

export default notePadSlice.reducer