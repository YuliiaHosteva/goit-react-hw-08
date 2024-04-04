import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from '../ContactForm/ContactForm.module.css';
import * as Yup from 'yup';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      "Phone number must be in the format XXX-XX-XX"
    )
    .required("Required"),
});


const ContactForm = () => {
  const elementId = useId();
  const dispatch = useDispatch();
  
  const handleSubmit = (value, actions) => {
    dispatch(addContact(value));
    actions.resetForm();

  };
    
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.wrapForm}>
        <label className={css.label} htmlFor={elementId + '-name'}>
          Name
          <Field className={css.input} type="text" name="name" id={elementId + '-name'} placeholder="Name"/>
          <ErrorMessage className={css.error} name="name" component="div" />
        </label>

        <label className={css.label} htmlFor={elementId + '-number'}>
          Number
          <Field className={css.input} type="tel" name="number" id={elementId + '-number'} placeholder="XXX-XX-XX"/>
          <ErrorMessage className={css.error} name="number" component="div" />
        </label>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
