import { Add, Remove } from '@mui/icons-material';
import { Button, FormLabel, Collapse, Grid, OutlinedInput, InputAdornment } from '@mui/material';
import { FC, useState, ChangeEvent } from 'react';
import { DateVo } from '../../entity/samplelist.entity';
// import { observer } from "mobx-react";
import s from './index.module.scss';
// import state from "../../state";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Index: FC = () => {
  const [openFlg, setOpenFlg] = useState(false);
  const [money, setMoney] = useState<number | string>('');
  const maxMaitukebi = 5;
  const maitukebiLst: Array<DateVo> = [
    {
      id: '1',
      label: '買付日1',
      maitukebi: new Date('2012/03/05')
    },
    {
      id: '2',
      label: '買付日2',
      maitukebi: new Date('2018/07/08')
    },
    {
      id: '3',
      label: '買付日3',
      maitukebi: new Date('2020/12/26')
    }
  ];
  // let newMaitukebiLst = maitukebiLst.slice();
  const [newLst, setNewLst] = useState<Array<DateVo>>(maitukebiLst.slice());
  const [lstLength, setLstLength] = useState<number>(maitukebiLst.length);
  // let lstLength = newMaitukebiLst.length;

  const handleClick = () => {
    setOpenFlg(!openFlg);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMoney(e.target.value);
  };

  const onInputChange2 = (i: number, e: Date) => {
    const temLst = JSON.parse(JSON.stringify(newLst));
    temLst[i].maitukebi = e.toISOString();
    for (i = 0; i < temLst.length; i++) {
      temLst[i].maitukebi = new Date(temLst[i].maitukebi);
    }
    setNewLst(temLst.slice());
  };

  const btnClick = () => {
    setMoney('');
  };

  const addBtnClick = () => {
    // debugger;
    const insiderlen = newLst.length;
    if (insiderlen < maxMaitukebi) {
      const labelTemp: string = getInsiderLabel(insiderlen + 1);
      const datevo: DateVo = {
        id: '',
        label: '',
        maitukebi: new Date()
      };
      datevo.id = (insiderlen + 1).toString();
      datevo.label = labelTemp;
      // newMaitukebiLst.push(datevo);
      setNewLst([...newLst, datevo]);
    }
    setLstLength(newLst.length + 1);
  };

  const getInsiderLabel = (index: number) => {
    return '買付日' + index;
  };

  const resetBtnClick = () => {
    setNewLst(maitukebiLst.slice());
    setLstLength(maitukebiLst.length);
  };

  return (
    <div className={s.ftable}>
      <p style={{ fontWeight: 600, textAlign: 'left' }}>②、ボーナス月の設定</p>
      <div onClick={handleClick} className={s.tojiruStyle}>
        {openFlg ? (
          <Button variant="text" style={{ fontSize: 14 }}>
            <Remove fontSize="medium" style={{ alignSelf: 'center' }} /> ボーナス月の設定を閉じる
          </Button>
        ) : (
          <Button variant="text" style={{ fontSize: 14 }}>
            <Add fontSize="medium" /> ボーナス月の設定を開く
          </Button>
        )}
      </div>
      <Collapse in={openFlg} unmountOnExit style={{ marginBottom: 10 }} timeout="auto">
        <div className={s.form1}>
          <Grid container rowSpacing={3}>
            <Grid container item spacing={2} alignItems="start" columns={{ xs: 24 }} wrap="nowrap">
              <Grid item xs={5}>
                <FormLabel id="money-label" style={{ fontSize: 14, fontWeight: 800 }}>
                  積立金額
                  <br />
                  （一回あたり）
                </FormLabel>
              </Grid>
              <Grid item xs={5} container columnSpacing={2} columns={{ xs: 12 }}>
                <Grid item xs={6}>
                  <OutlinedInput
                    id="money-group"
                    value={money}
                    placeholder="積立金額"
                    onChange={onInputChange}
                    fullWidth
                    notched={false}
                    autoComplete="off"
                    sx={{ height: 36, fontSize: 14 }}
                    endAdornment={<InputAdornment position="end">円</InputAdornment>}
                    label="money"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Button onClick={() => btnClick()} variant="text" fullWidth sx={{ height: 36, fontSize: 14 }}>
                    クリアする
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid item container direction="column" rowSpacing={2}>
              {newLst.map((item, index) => (
                <Grid container item spacing={2} alignItems="start" columns={{ xs: 24 }} wrap="nowrap" key={item.id}>
                  <Grid item xs={5}>
                    <FormLabel id="maitukebi-label" style={{ fontSize: 14, fontWeight: 800 }}>
                      {item.label}
                    </FormLabel>
                  </Grid>
                  <Grid item xs={5} container columnSpacing={2} columns={{ xs: 12 }}>
                    {/* <Grid item xs={5}>
                                        <OutlinedInput
                                            id='maitukebi-group'
                                            value={item.maitukebi}
                                            placeholder={item.label}
                                            onChange={(e) => onInputChange2(index, e)}
                                            notched={false}
                                            sx={{ height: 36, fontSize: 14,width:'100%'}}
                                            endAdornment={<InputAdornment position="end">円</InputAdornment>}
                                            label="money"
                                        />
                                    </Grid> */}
                    <Grid item xs={5}>
                      <div className={s.dateStyle}>
                        <DatePicker
                          selected={item.maitukebi}
                          showPopperArrow={false}
                          dateFormat="yyyy/MM/dd"
                          popperPlacement="bottom-start"
                          placeholderText="I have been cleared!"
                          className={s.inputStyle}
                          tabIndex={index}
                          popperModifiers={[
                            {
                              name: 'offset',
                              options: {
                                offset: [0, -10]
                              }
                            }
                          ]}
                          onChange={(date: Date) => onInputChange2(index, date)}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={5}>
                      {lstLength === index + 1 && maxMaitukebi !== index + 1 && (
                        <Button onClick={() => addBtnClick()} variant="outlined" fullWidth sx={{ height: 36, fontSize: 14 }}>
                          +買付日を追加
                        </Button>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              ))}
              <Grid alignSelf="center" marginTop={2}>
                <Button onClick={() => resetBtnClick()} variant="outlined" sx={{ height: 36, fontSize: 14 }}>
                  設定取消
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Collapse>
    </div>
  );
};

export default Index;
