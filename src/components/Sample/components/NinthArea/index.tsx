import { FC, useState, useEffect, ChangeEvent } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Collapse,
  Grid,
  OutlinedInput,
  InputAdornment,
  Box,
  Checkbox
} from '@mui/material';
import s from './index.module.scss';
import storage from '../../../../model/storage';

const Index: FC = () => {
  const [komuku, setKomuku] = useState('');
  const [dataLst, setDataLst] = useState({
    name: 'checkboxDataList',
    list: [
      {
        title: 'test1',
        checked: true
      },
      {
        title: 'test2',
        checked: false
      },
      {
        title: 'test3',
        checked: true
      },
      {
        title: 'test4',
        checked: false
      },
      {
        title: 'test5',
        checked: false
      }
    ]
  });

  useEffect(() => {
    const tempLst = storage.get('storageDataLst');
    console.log('useEffect--->getStorage', storage.get('storageDataLst'));
    if (tempLst) {
      setDataLst({ ...dataLst, list: tempLst });
    }
  }, []);

  const checkboxChange = (event: ChangeEvent<HTMLInputElement>, checked: boolean, i: number) => {
    const tempLst = JSON.parse(JSON.stringify(dataLst.list));
    tempLst[i].checked = !tempLst[i].checked;
    setDataLst({ ...dataLst, list: tempLst });
    storage.set('storageDataLst', tempLst);
    console.log('checkboxChange--->setStorage', storage.get('storageDataLst'));
  };

  const addClick = (value: string) => {
    const tempTitle = value;
    const tempLst = JSON.parse(JSON.stringify(dataLst.list));
    tempLst.push({
      title: tempTitle,
      checked: false
    });
    setDataLst({ ...dataLst, list: tempLst });
    storage.set('storageDataLst', tempLst);
    console.log('addClick--->setStorage', storage.get('storageDataLst'));
  };

  const deleteClick = (i: number) => {
    const tempLst = JSON.parse(JSON.stringify(dataLst.list));
    tempLst.splice(i, 1);
    setDataLst({ ...dataLst, list: tempLst });
    storage.set('storageDataLst', tempLst);
    console.log('deleteClick--->setStorage', storage.get('storageDataLst'));
  };

  const deleteStorage = () => {
    storage.remove('storageDataLst');
    console.log('deleteStorage--->removeStorage', storage.get('storageDataLst'));
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setKomuku(e.target.value);
  };

  return (
    <div className={s.ftable}>
      <p style={{ fontWeight: 600, textAlign: 'left' }}>⑨、localStorage</p>
      <div>
        <p style={{ textAlign: 'left', marginBlockEnd: 0 }}>{dataLst.name}</p>
        <div style={{ textAlign: 'left' }}>
          <OutlinedInput
            id="addItems"
            value={komuku}
            placeholder="Add checkbox items"
            onChange={onInputChange}
            notched={false}
            autoComplete="off"
            sx={{ height: 36, fontSize: 14, color: 'black', textAlign: 'left' }}
            label="addItems"
          />
          <Button onClick={() => addClick(komuku)} variant="contained" sx={{ height: 36, fontSize: 14, marginLeft: 2 }}>
            Add item
          </Button>
        </div>
        <Box sx={{ display: 'flex' }}>
          <FormControl sx={{ m: 3, width: '40%' }} component="fieldset" variant="standard">
            <FormLabel component="legend" sx={{ textAlign: 'left' }}>
              ①、unchecked data
            </FormLabel>
            <FormGroup>
              {dataLst.list.map((item, index) => {
                if (!item.checked) {
                  return (
                    <div key={index} style={{ textAlign: 'left' }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={item.checked}
                            onChange={(event: ChangeEvent<HTMLInputElement>, checked: boolean) =>
                              checkboxChange(event, checked, index)
                            }
                          />
                        }
                        label={item.title}
                        key={index}
                      />
                      <Button
                        onClick={() => deleteClick(index)}
                        variant="outlined"
                        sx={{ height: 36, fontSize: 14, marginLeft: 2 }}
                      >
                        Delete item
                      </Button>
                    </div>
                  );
                }
              })}
            </FormGroup>
          </FormControl>
          <FormControl sx={{ m: 3, width: '40%' }} component="fieldset" variant="standard">
            <FormLabel component="legend" sx={{ textAlign: 'left' }}>
              ②、checked data
            </FormLabel>
            <FormGroup>
              {dataLst.list.map((item, index) => {
                if (item.checked) {
                  return (
                    <div key={index} style={{ textAlign: 'left' }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={item.checked}
                            onChange={(event: ChangeEvent<HTMLInputElement>, checked: boolean) =>
                              checkboxChange(event, checked, index)
                            }
                          />
                        }
                        label={item.title}
                        key={index}
                      />
                      <Button
                        onClick={() => deleteClick(index)}
                        variant="outlined"
                        sx={{ height: 36, fontSize: 14, marginLeft: 2 }}
                      >
                        Delete item
                      </Button>
                    </div>
                  );
                }
              })}
            </FormGroup>
          </FormControl>
        </Box>
        <div style={{ textAlign: 'left' }}>
          <Button onClick={deleteStorage} variant="contained" sx={{ height: 36, fontSize: 14, marginLeft: 2 }}>
            delete Storage
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
