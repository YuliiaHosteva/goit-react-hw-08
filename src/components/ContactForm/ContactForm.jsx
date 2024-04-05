import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import toast from 'react-hot-toast';


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

const defaultTheme = createTheme();

const ContactForm = () => {
  const dispatch = useDispatch();
  
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
      .unwrap()
      .catch(() =>
        toast.error('Oops... Something went wrong', {
          id: 'error',
        })
      );
    actions.resetForm();
  };
    
  return (
    <div className={css.container}>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box component="div" sx={{ mt: 3 }}>
              <Formik
                initialValues={{ name: '', number: '' }}
                onSubmit={handleSubmit}
                validationSchema={FeedbackSchema}
              >
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Field 
                        as={TextField}
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                      />
                      <ErrorMessage name="name" className={css.error} component="div" />
                    </Grid>
                    <Grid item xs={12}>
                      <Field 
                        as={TextField}
                        fullWidth
                        name="number"
                        label="Number"
                        id="number"
                        autoComplete="new-number"
                      />
                      <ErrorMessage name="number" className={css.error} component="div" />
                    </Grid>
                  </Grid>
                  <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Add Contact
                  </Button>
                </Form>
              </Formik>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default ContactForm;