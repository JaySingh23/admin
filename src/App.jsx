import './App.css';
import { Button, Container, Paper, Typography, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';

let theme = createTheme({
  palette: {
    primary: {
      main: '#DFE6ED',
      light: '#FFFFFF',
    },
    secondary: {
      main: '#6458F5',
    },
  },
});
theme = responsiveFontSizes(theme);

function App() {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    // Handle the uploaded file
    console.log('Uploaded file:', file);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>

        {/* HEADER */}
        <div className="header">
          <Typography variant="h4" textAlign="center" fontWeight={700} padding={2}>
            Hello Admin
          </Typography>
        </div>

        {/* BODY CONTAINER */}
        <div className="body">
          <Paper elevation="0" style={{ backgroundColor: theme.palette.primary.main }}>
            <Container style={{ display: 'flex', padding: '1rem' }}>
              {/* SIDEBAR */}
              <div className="sidebar">
                <Button
                  variant="contained"
                  disableElevation
                  sx={{ backgroundColor: theme.palette.primary.light, fontSize: 14 }}
                >
                  Home
                </Button>
                <Button
                  variant="contained"
                  disableElevation
                  sx={{ backgroundColor: theme.palette.secondary.main, fontSize: 14, color: 'white' }}
                >
                  Add Apps
                </Button>
              </div>

              {/* HERO */}
              <div className="hero" style={{ display: 'flex', flexDirection: 'column', marginBottom: '2rem' }}>
                {/* UPLOAD IMAGE */}
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                  <label htmlFor="upload-input">
                  <InsertPhotoOutlinedIcon
                    sx={{
                      fontSize: { xs: '8rem', sm: '10rem', md: '12rem' },
                      color: '#788897',
                      cursor: 'pointer',
                    }}
                  />
                  </label>
                  <input id="upload-input" type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageUpload} />
                </div>
                {/* TEXTFIELDS */}
                <div className="textfields">

                  <div className='upperTextFields'>
                    <TextField label="App Name" variant="outlined" size='small' sx={{
                      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.secondary.main, // Change the outline color when focused
                      },
                      '& input': {
                        width: 250, // Specify the desired width
                      },
                    }} />
                    <TextField label = "App Link" variant="outlined" size='small' sx={{
                      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.secondary.main, // Change the outline color when focused
                      },
                      '& input': {
                        width: 250, // Specify the desired width
                      },
                    }} />
                  </div>
                  
                  <div className='lowerTextFields'>
                    <FormControl sx={{ m: 1, minWidth: 280 }} size="small">
                      <InputLabel>App Category</InputLabel>
                      <Select
                        id="app-category"
                        label="App Category"
                      >
                        <MenuItem value={10}>Entertainment</MenuItem>
                        <MenuItem value={20}>Social</MenuItem>
                        <MenuItem value={30}>Random</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 280 }} size="small">
                      <InputLabel>Sub Category</InputLabel>
                      <Select
                        id="sub-category"
                        label="Sub Category"
                      >
                        <MenuItem value={10}>Gaming</MenuItem>
                        <MenuItem value={20}>Social</MenuItem>
                        <MenuItem value={30}>Random</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                
                {/* BUTTON */}
                <div className="buttons" style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>
                    <Button variant="contained" sx={{backgroundColor: '#8DD7CE', fontWeight: 700, padding: 1.1, width: 200}}>ADD POINTS</Button>
                </div>
              </div>
            </Container>
          </Paper>
        </div>

      </Container>
    </ThemeProvider>
  );
}

export default App;

