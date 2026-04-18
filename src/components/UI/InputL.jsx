import { forwardRef } from 'react'
import classes from './Input.module.css';

const InputL = forwardRef((props, ref) => {
    const { id, label="Label for", errors= null, placeholder = '', type="text", ...rest } = props;

  return (
    <div className={classes.inputL}>
        <input type = {type} id={id} placeholder={placeholder} {...rest} ref={ref} />
        {errors && <p className={classes.error}>{errors}</p>}

    </div>
  )
})

export default InputL