import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import inputField from 'custom-fields/inputField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import './PhotoForm.scss';

PhotoForm.propTypes = {
    onSubmit: PropTypes.func
};

PhotoForm.defaultProps = {
    onSubmit: null
};

function PhotoForm() {
    return (
        <Formik>
            { formikProps => {
                // do somthing here ...
                const { values, errors, touched } = formikProps;

                console.log({ values, errors, touched });

                return (
                    <Form>
                        <FastField
                            name="title"
                            component={ inputField }

                            lable="Title"
                            placeholder="Eg: Wow nature ..."
                        />

                        {/* <FormGroup>
                            <Label for="titleId">Title</Label>
                            <Input name="title" id="titleId" placeholder="Eg: Wow nature ..." />
                        </FormGroup> */}

                        <FormGroup>
                            <Label for="titleId">Category</Label>
                            <Select
                                id="categoryId"
                                name="categoryId"
                                placeholder="What's your photo category?"
                                options={ PHOTO_CATEGORY_OPTIONS }
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="categoryId">Photo</Label>

                            <div><Button type="button" outline color="primary">Random a photo</Button></div>
                            <div>
                                {/* <img width="200px" height="200px"  /> */ }
                            </div>

                        </FormGroup>

                        <FormGroup>
                            <Button color="primary">Add to album</Button>
                        </FormGroup>

                    </Form>
                )
            } }
        </Formik>
    );
};

export default PhotoForm;