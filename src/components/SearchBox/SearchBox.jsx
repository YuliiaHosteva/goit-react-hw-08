import { useId } from 'react';
import css from '../SearchBox/SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';


const SearchBox = () => {
  const elementId = useId();
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.wrap}>
      <label htmlFor={elementId}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          id={elementId}
          value={value}
          onChange={handleChange}
          placeholder="Name"
        />
      </label>
    </div>
  );
};

export default SearchBox;