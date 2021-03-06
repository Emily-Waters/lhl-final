//mui material
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useEffect, useState } from "react";

const SearchRoom = (props) => {
  const { user, addUserToRoom, getFilteredArray, roomList } = props;

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`/api/rooms/public`).then((res) => {
      setData(res.data);
    });
  }, [open]);

  const options = getFilteredArray(data, roomList);

  const openDialog = () => {
    setInputValue("");
    setValue(null);
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    addUserToRoom(user, value.id);
    closeDialog();
  };

  return (
    <>
      <div className="list-item" onClick={openDialog}>
        <IconButton color="inherit">
          <SearchIcon className="list-icon-options" />
        </IconButton>
      </div>
      <Dialog open={open} onClose={closeDialog}>
        <DialogTitle>Public Rooms</DialogTitle>
        <DialogContent>
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            options={options}
            getOptionLabel={(option) => `${option.name}`}
            renderOption={(props, option) => (
              <Box component="li" {...props}>
                <Card sx={{ width: 300, backgroundColor: "#262626" }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {option.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {option.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            )}
            sx={{ width: 300 }}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderInput={(params) => (
              <TextField {...params} label="Rooms" variant="standard" />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Grid container direction="row" justifyContent="space-around">
            <Grid item>
              <Button variant="contained" color="error" onClick={closeDialog}>
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="success"
                onClick={handleSubmit}
              >
                Join
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SearchRoom;
