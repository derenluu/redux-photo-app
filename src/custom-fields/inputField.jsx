import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

inputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

inputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}
function inputField(props) {
    return (
        <FormGroup>
            <Label for="titleId">Title</Label>
            <Input name="title" id="titleId" placeholder="Eg: Wow nature ..." />
        </FormGroup>
    );
}

export default inputField;