import React from 'react'
import { TextField } from '@material-ui/core'

const Find = ({ onChange }) => {
    return (
        <div>
            <TextField id="filled-basic" label="Find a name" variant="filled" onChange={onChange}></TextField>
        </div>
    )
}

export default Find