import React from "react"
import s from './Filter.module.css'
import PropTypes from 'prop-types';

const Filter = ({value, onChange}) => {

    return(
        <label htmlFor="">Find contact by name
            <input className={s.filter} type="text" value={value} onChange={onChange}/>
        </label>
    )
}
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
export default Filter;