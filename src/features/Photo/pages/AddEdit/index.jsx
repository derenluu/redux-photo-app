import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import Images from 'constants/images';
import { addPhoto } from 'features/Photo/photoSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AddEditPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (values) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const action = addPhoto(values)

                dispatch(action)
                navigate('/photos');
            }, 2000)
        })

    }
    return (
        <div className='photo-edit'>
            <Banner title="Pick your amazing photo 👌" backgroundUrl={ Images.BLUE_BG } />

            <div className='photo-edit__form'>
                <PhotoForm onSubmit={ handleSubmit } />
            </div>
        </div>
    );
};

export default AddEditPage;