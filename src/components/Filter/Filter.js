import { useDispatch, useSelector } from 'react-redux'
import styles from './Filter.module.css'
import filterActions from 'redux/filter/filter-actions'
import filterSelector from '../../redux/filter/filter-selectors'
const Filter = () => {

    const filterValue = useSelector(filterSelector);

    const dispatch = useDispatch();
    const filterHandler = (e) => dispatch(filterActions.filterContacts(e.target.value));

    return (
        <div className={styles.Filter}>
            <label htmlFor="findInputId">Find contacts by name</label>
            <input
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Search by name"
                id="findInputId"
                value={filterValue}
                onChange={filterHandler}
                required
            />
        </div>

    )
}

export default Filter;
