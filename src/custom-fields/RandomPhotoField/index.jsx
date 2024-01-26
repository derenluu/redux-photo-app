import RandomPhoto from 'components/RandomPhoto';
import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Label } from 'reactstrap';

RandomPhotoField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
};

RandomPhotoField.defaultProps = {
    label: '',
}

function RandomPhotoField(props) {
    const { field, form, label } = props;
    const { name, value, onBlur } = field;

    const { invalid } = props; // Thêm dòng này
    
    const showError = form.errors[name] && form.touched[name];

    const handleImageUrlChange = (newImageUrl) => {
        form.setFieldValue(name, newImageUrl)
    }

    return (
        <FormGroup>
            { label && <Label for={ name }>{ label }</Label> }

            <RandomPhoto
                name={ name }
                imageUrl={ value }
                onImageUrlChange={ handleImageUrlChange }
                onRandomButtonBlur={ onBlur }
            />

            {/* cheating */ }
            <div className={ invalid || showError ? 'is-invalid' : '' }></div>

            <ErrorMessage name={ name } component={ FormFeedback } />
        </FormGroup>
    );
}

export default RandomPhotoField;