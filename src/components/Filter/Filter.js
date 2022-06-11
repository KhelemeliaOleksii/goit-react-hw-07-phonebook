import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './Filter.module.css'
import filterActions from 'redux/filter/filter-actions'

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

const mapStateToProps = (state) => ({
    filterValue: state.contacts.filter,
})

const mapDispatchToProps = (dispatch) => ({
    filterHandler: (e) => {
        return dispatch(filterActions.filterContacts(e.target.value))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);