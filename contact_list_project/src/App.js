import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import SingleContact from './components/SingleContact';

function App() {
    
    return (
        <div className='flex flex-row flex-wrap justify-around mt-10'>
            <AddContact />
            <ContactList />
            <SingleContact />
        </div>
    );
}

export default App;