import React, {Fragment} from 'react'
import Grid from '@material-ui/core/Grid'
import {useStyles} from '../bookstore_styles'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

function SearchBox() {
    const classes = useStyles()
    return (
        <Fragment>
            <div className={classes.searchbox_label} >What book are you looking for ?</div>
            <Grid item={12} className={classes.searchcontainer}>
            <TextField id="outlined-basic" variant="outlined" className={classes.searchbox} InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
          ),
        }} />
            </Grid>
        </Fragment>
    )
}

export default SearchBox
