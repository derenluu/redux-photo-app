import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import InputField from 'custom-fields/InputField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
// import Select from 'react-select';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import SelectField from 'custom-fields/SelectField';
import { Button, FormGroup, Spinner } from 'reactstrap';
import './PhotoForm.scss';
// import images from 'constants/images';
import * as Yup from 'yup';

PhotoForm.propTypes = {
    onSubmit: PropTypes.func
};

PhotoForm.defaultProps = {
    onSubmit: null
};

function PhotoForm(props) {
    const initialValues = {
        title: '',
        categoryId: null,
        photo: ''
    }

    const validationSchema = Yup.object().shape({
        title: Yup
            .string()
            .required('This field is required !'),
        categoryId: Yup
            .number()
            .required('This field is required!'),
        photo: Yup
            .string()
            .required('This field is required!')
        // photo: Yup.string().when('categoryId', {
        //     is: (value) => value === 1 || value === '1', // Check if categoryId is 1 or '1'
        //     then: Yup.string().required('This field is required!'),
        //     otherwise: Yup.string().notRequired(),
        // }),
    });

    return (
        <Formik
            initialValues={ initialValues }
            validationSchema={ validationSchema }
            onSubmit={ props.onSubmit }
        >
            { formikProps => {
                // do somthing here ...
                const { values, errors, touched, isSubmitting } = formikProps;

                console.log({ values, errors, touched });

                return (
                    <Form>
                        <FastField
                            name="title"
                            component={ InputField }

                            label="Title"
                            placeholder="Eg: Wow nature ..."
                        />
                        <FastField
                            name="categoryId"
                            component={ SelectField }

                            label="Category"
                            placeholder="What's your photo category?"
                            options={ PHOTO_CATEGORY_OPTIONS }
                            invalid={ formikProps.errors.categoryId && formikProps.touched.categoryId } // Thêm dòng này
                        />
                        <FastField
                            name="photo"
                            component={ RandomPhotoField }
                            label="Photo"
                        />
                        <FormGroup>
                            <Button type="submit" color="primary">
                                { isSubmitting && <Spinner size='sm' /> } 
                                Add to album
                            </Button>
                        </FormGroup>

                    </Form>
                )
            } }
        </Formik>
    );
};

export default PhotoForm;