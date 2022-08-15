import React from 'react';
import logo from '@images/g_head02_logo.gif';
import styles from './headerBar.module.scss';
import { useCurrentWidth } from 'react-socks';

// import Avatar from '@mui/material/Avatar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

import { menuItems } from './inputData';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  navButton: {
    margin: 'auto'
  },
  title: {
    flexGrow: 1
  },
  toolbar: {
    backgroundColor: '#1890ff',
    color: '#fff'
  }
}));

const HeaderBar = () => {
  const getwidth = useCurrentWidth();
  const gamenHyoujiFlg = () => {
    if (getwidth < 634) {
      return true;
    } else {
      return false;
    }
  };
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  console.log(anchorEl, '--------- anchorEl -------');

  const handleClick = (index, event) => {
    //@ts-ignore
    setAnchorEl({ [index]: event.currentTarget });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.headerBar}>
      <div className={gamenHyoujiFlg() ? styles.header2 : styles.header}>
        <div>
          <img src={logo} alt="es-lint want to get" />
        </div>
        <div className={styles.headerRight} style={gamenHyoujiFlg() ? { lineHeight: 2 } : {}}>
          <p className={styles.headerRightItem}>よくあるご質問</p>|<p className={styles.headerRightItem}>お問い合わせ</p>|
          <p className={styles.headerRightItem}>サイトマップ</p>
        </div>
      </div>
      <div className={styles.menu}>
        <Toolbar className={classes.toolbar}>
          {Object.keys(menuItems).map((item, index) => (
            <div className={classes.navButton} key={index}>
              <Button color="inherit" onClick={(e) => handleClick(index, e)}>
                {item} <i className="fas fa-caret-down" />
              </Button>
              <Menu
                anchorEl={anchorEl && anchorEl[index]}
                keepMounted
                // eslint-disable-next-line
                open={(index === 0 || index === 1 ? anchorEl && Boolean(anchorEl[index]) : false) || false}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
              >
                {menuItems[item].map((menuitems, menuindex) => (
                  <MenuItem key={menuindex} selected={menuitems === item} onClick={handleClose}>
                    {menuitems.title}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          ))}
        </Toolbar>
      </div>
    </div>
  );
};

export default HeaderBar;
