import { ErrorMessage } from "formik";
import Select from "react-select";
import { FormFeedback, FormGroup, Label } from "reactstrap";
import PropTypes from 'prop-types';

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array,
};

SelectField.defaultProps = {
    label: '',
    placeholder: '',
    disabled: false,
    options: [],
}

function SelectField(props) {
    const {
        field, form,
        options, label, placeholder, disabled
    } = props;
    const { name } = field;

    const showError = form.errors[name] && form.touched[name];

    const { invalid } = props;

    const selectedOption = options.find(option => option.value === field.value);

    const handleSelectedOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;

        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        };
        field.onChange(changeEvent);
    }

    return (
        <FormGroup>
            { label && <Label for={ name }>{ label }</Label> }

            <Select
                id={ name }
                { ...field }
                value={ selectedOption }
                onChange={ handleSelectedOptionChange }

                placeholder={ placeholder }
                isDisabled={ disabled }
                options={ options }
                className={ invalid || showError ? 'is-invalid' : '' }
            />

            <ErrorMessage name={ name } component={ FormFeedback } />
        </FormGroup>
    );
}

export default SelectField;