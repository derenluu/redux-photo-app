import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}
function InputField(props) {
    const {
        field, form,
        type, label, placeholder, disabled
    } = props;

    const { name } = field;

    const showError = form.errors[name] && form.touched[name];

    return (
        <FormGroup>
            { label && <Label for={ name }>{ label }</Label> }

            <Input
                id={ name }
                { ...field }
                type={ type }
                disabled={ disabled }
                placeholder={ placeholder }
                invalid={ showError }
            />

            {/* { showError && <FormFeedback>{ form.errors[name] }</FormFeedback> } */ }
            <ErrorMessage name={ name } component={ FormFeedback } />

        </FormGroup>
    );
}

export default InputField;