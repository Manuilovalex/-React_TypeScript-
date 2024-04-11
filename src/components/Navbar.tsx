import { AppBar, Toolbar, Typography, List, ListItem, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <AppBar position="static" elevation={3} sx={{ backgroundColor: 'pink', borderBottom: '2px solid #444' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h5" component="div" sx={{ color: 'indigo' }}>
          My App
        </Typography>
        <List sx={{ display: 'flex', flexDirection: 'row' }}>
          <ListItem component={Link} to="/" sx={{ '&:hover': { backgroundColor: 'salmon' }, borderRadius: '5px' }}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem component={Link} to="/about" sx={{ '&:hover': { backgroundColor: 'salmon' }, borderRadius: '5px' }}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem component={Link} to="/News" sx={{ '&:hover': { backgroundColor: 'salmon' }, borderRadius: '5px' }}>
            <ListItemText primary="News" />
          </ListItem>
          <ListItem
            component={Link}
            to="/registration"
            sx={{ '&:hover': { backgroundColor: 'salmon' }, borderRadius: '5px' }}
          >
            <ListItemText primary="Registration" />
          </ListItem>
          <ListItem
            component={Link}
            to="/contact"
            sx={{ '&:hover': { backgroundColor: 'salmon', borderRadius: '5px' } }}
          >
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
