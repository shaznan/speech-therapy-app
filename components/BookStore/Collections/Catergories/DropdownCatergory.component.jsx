import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  button: {
    display: "block",
  },
  formControl: {
    minWidth: 120,
    width: "50vw",
  },
  Menu_cont: {
    display: "flex",
    justifyContent: "center",
  },
});

export default function DropdownCatergory({
  catergoryItems,
  switchCatergoryHandler,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
        Select your catergory
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">
          Catergory
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          className={classes.Menu_cont}
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}>
          {catergoryItems.map((catergory, i) => (
            <MenuItem
              id={catergory.id}
              onClick={(e) => switchCatergoryHandler(i, e)}>
              {catergory.itemName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
