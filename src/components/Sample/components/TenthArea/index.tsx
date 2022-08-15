import { Button, OutlinedInput } from '@mui/material';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import cookie from 'react-cookies';
import s from './index.module.scss';
// import logo from '@images/g_head02_logo.gif';
// import gray_star from '@images/gray_star.png';

const Index: FC = () => {
  const [komuku, setKomuku] = useState('');
  const [cookieValue, setCookieValue] = useState('');

  useEffect(() => {
    const tempLst = cookie.load('cookies1');
    console.log('useEffect--->getCookie', tempLst);
  }, []);

  const addClick = (value: string) => {
    // let temp = value;
    // let temp2 = ''
    // for (let i = 0; i < 4080; i++) {
    //      temp2 += temp;
    // }
    // cookie.save('a', temp2, { path: '/'});
    // cookie.save('12345', temp2, { path: '/' });
    // cookie.save('1234567', temp2, { path: '/' });
    // cookie.save('abcde12345ab', temp2, { path: '/' });
    cookie.save('cookies1', value, { path: '/' });
    console.log('addClick--->saveCookie', cookie.load('cookies1'));
  };

  const getClick = () => {
    setCookieValue(cookie.load('cookies1'));
    console.log('getClick--->loadCookie', cookie.load('cookies1'));
  };

  const removeCookie = () => {
    cookie.remove('cookies1');
    // cookie.remove('a');
    // cookie.remove('abcde12345');
    // cookie.remove('abcde12345a');
    // cookie.remove('abcde12345ab');
    console.log('removeCookie--->removeCookie', cookie.load('cookies1'));
    setCookieValue('');
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setKomuku(e.target.value);
  };

  return (
    <div className={s.ftable}>
      <p style={{ fontWeight: 600, textAlign: 'left' }}>⑩、cookie</p>
      <div style={{ textAlign: 'left' }}>
        <div style={{ textAlign: 'left' }}>
          <OutlinedInput
            id="addCookie"
            value={komuku}
            placeholder="save Cookie"
            onChange={onInputChange}
            notched={false}
            autoComplete="off"
            sx={{ height: 36, fontSize: 14, color: 'black', textAlign: 'left' }}
            label="addCookie"
          />
          <Button onClick={() => addClick(komuku)} variant="contained" sx={{ height: 36, fontSize: 14, marginLeft: 2 }}>
            save Cookie
          </Button>
        </div>
        <div style={{ textAlign: 'left', marginTop: 10 }}>
          <Button onClick={getClick} variant="contained" sx={{ height: 36, fontSize: 14, width: 200 }}>
            load Cookie
          </Button>
          <label style={{ marginLeft: 10 }}>cookie:{cookieValue}</label>
        </div>
        <div style={{ textAlign: 'left', marginTop: 10 }}>
          <Button onClick={removeCookie} variant="contained" sx={{ height: 36, fontSize: 14, width: 200 }}>
            remove Cookie
          </Button>
        </div>
        {/* <div>
                    <img src={logo} alt="es-lint want to get" />
                </div>
                <div>
                    <img src={gray_star} alt="es-lint want to get" />
                </div> */}
      </div>
    </div>
  );
};

export default Index;
