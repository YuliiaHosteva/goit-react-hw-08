import css from '../SearchBox/SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectFilter } from '../../redux/filters/selectors';
import { TextField } from '@mui/material';

const SearchBox = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.container}>
      <TextField
        id="standard-basic"
        label="Search"
        variant="standard"
        size="normal"
        value={value}
        onChange={handleChange}
        fullWidth
      />
    </div>
  );
};

export default SearchBox;