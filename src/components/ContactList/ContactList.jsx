import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
// import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 4,
  background: 'none',
  padding: theme.spacing(2),
}));

const ContactList = () => {
const contacts = useSelector(selectFilteredContacts);


return (
  <Box sx={{ width: '100%' }}>
    <Stack spacing={2}>
      {contacts?.map(contact => (
        <Item key={contact.id}>
          <Contact contact={contact} />
        </Item>
      ))}
    </Stack>
  </Box>
);
};

export default ContactList;