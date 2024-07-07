import { useDispatch, useSelector } from 'react-redux';
import styles from './Filter.module.css';
import { setFilter } from '../../reduxState/filter/filterSlice';
import { selectFilteredRates } from 'reduxState/selectors';
export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = evt => {
    dispatch(setFilter(evt.target.value.toLowerCase()));
  };
  return (
    <input
      type="text"
      onChange={handleChange}
      placeholder="What currency are you looking for?🧐"
      className={styles.input}
    />
  );
};
