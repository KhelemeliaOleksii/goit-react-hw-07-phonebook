import PropTypes from 'prop-types'
import styles from './Filter.module.css'

const Filter = ({ filterValue, filterHandler }) => {

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

Filter.propTypes = {
    filterValue: PropTypes.string.isRequired,
    filterHandler: PropTypes.func.isRequired,
}

export default Filter