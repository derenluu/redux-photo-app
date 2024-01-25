import NotFound from 'components/NotFound';
import { Route, Routes } from 'react-router-dom';
import AddEditPage from './pages/AddEdit';
import MainPage from './pages/MainPage';

function Photo(props) {
    return (
        <Routes>
            <Route path="/" element={ <MainPage /> } />
            <Route path="/add" element={ <AddEditPage /> } />
            <Route path=":acs" element={ <AddEditPage /> } />
            <Route path="*" element={ <NotFound /> } />
        </Routes>
    );
}

export default Photo;
