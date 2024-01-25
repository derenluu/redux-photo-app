import Banner from 'components/Banner';
import PhotoForm from 'components/PhotoForm';
import Images from 'constants/images';

function AddEditPage() {
    return (
        <div className='photo-edit'>
            <Banner title="Pick your amazing photo 👌" backgroundUrl={ Images.BLUE_BG } />

            <div className='photo-edit__form'>
                <PhotoForm onSubmit={ values => console.log('Form submit: ', values) } />
            </div>
        </div>
    );
};

export default AddEditPage;