import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    data: [{ id: nanoid(), name: "sameer malik", number: "7417277576", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
            { id: nanoid(), name: "arbaz malik", number: "7417277575", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." }],
    same: false,
    singleItem: null,
    editItem: null,
    editedUI: false,
}

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.singleItem = null
            state.editItem = null
            const { name, number, description } = action.payload
            state.same = state.data.some(item => String(item.number) === number)
            if (!state.same) {
                state.data.push({ id: nanoid(), name: name, number: number, description: description })
            }
            return state
        },
        setSame: (state, action) => {
            state.same = false;
            return state
        },
        singleEntity: (state, action) => {
            const { item } = action.payload
            state.singleItem = state.data.filter(it => it.id === item.id)
            return state
        },
        editEnable: (state, action) => {
            if (action.payload)
                state.editedUI = true
            else
                state.editedUI = false
            return state
        },
        editedAddContact: (state, action) => {
            const { data, name, number, description } = action.payload
            state.data = state.data.filter(item => item.id !== data[0].id)
            state.data.push({ id: data[0].id, name: name, number: number, description: description })
            state.singleItem = state.data.filter(it => it.id === data[0].id)
        },
        deleteContact: (state, action) => {
            const { number } = action.payload
            const point = state.data.filter(item => item.number === number)
            state.data = state.data.filter(item => item.id !== point[0].id)
            state.singleItem = null
            state.editItem = null
        },

    }

})

export const { editEnable, addContact, setSame, singleEntity, editedAddContact, deleteContact } = contactSlice.actions

export default contactSlice.reducer