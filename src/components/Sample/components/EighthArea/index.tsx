import {
  Button,
  FormHelperText,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormLabel,
  Grid,
  InputAdornment,
  OutlinedInput
} from '@mui/material';
// import { observer } from "mobx-react";
import { ChangeEvent, FocusEvent, FC, useState } from 'react';
import { z } from 'zod';
import s from './index.module.scss';

const Index: FC = () => {
  const [kingaku, setKingaku] = useState({
    money: '',
    checkFlg: false,
    message: Array('')
  });
  const [kingaku2, setKingaku2] = useState({
    money2: '',
    checkFlg2: false,
    message2: Array('')
  });
  const regexStr = `^[0-9]*$`;
  const regex = new RegExp(regexStr);
  // const ValidationCheck = z.intersection(
  //     z.string().regex(regex, { message: '半角数字で入力してください。' }),
  //     z.string().min(5, { message: '5桁以上で入力してください。' }).max(8, { message: '8桁以下で入力してください。' })
  // );

  // const ValidationCheck2 = z.string().length(5, { message: '5桁を入力してください。' });

  const ValidationCheck = z
    .object({
      money: z.intersection(
        z.string().regex(regex, { message: '半角数字で入力してください。' }),
        z.string().min(5, { message: '5桁以上で入力してください。' }).max(8, { message: '8桁以下で入力してください。' })
      ),
      money2: z.string().length(5, { message: '5桁を入力してください。' })
    })
    .partial();

  const onInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, komuku: string) => {
    if (komuku === 'money') {
      setKingaku({ ...kingaku, money: e.target.value });
    } else {
      setKingaku2({ ...kingaku2, money2: e.target.value });
    }
  };

  const onInputCheck = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>, komuku: string) => {
    // type DateType = z.infer<typeof ValidationCheck>;
    const result = ValidationCheck.safeParse({ [komuku]: e.target.value });
    if (e.target.value) {
      if (result.success) {
        if (komuku === 'money') {
          setKingaku({ ...kingaku, checkFlg: false, message: [] });
        } else {
          setKingaku2({ ...kingaku2, checkFlg2: false, message2: [] });
        }
      } else {
        const msgLst = new Array<string>();
        for (let i = 0; i < result.error.errors.length; i++) {
          msgLst.push(result.error.errors[i].message);
        }
        if (komuku === 'money') {
          setKingaku({ ...kingaku, checkFlg: true, message: msgLst });
        } else {
          setKingaku2({ ...kingaku2, checkFlg2: true, message2: msgLst });
        }
      }
    }
  };

  const btnClick = (komuku: string) => {
    if (komuku === 'money') {
      setKingaku({ ...kingaku, money: '', checkFlg: false, message: [] });
    } else {
      setKingaku2({ ...kingaku2, money2: '', checkFlg2: false, message2: [] });
    }
  };

  return (
    <div className={s.ftable}>
      <p style={{ fontWeight: 600, textAlign: 'left' }}>⑧、バリデーションチェック</p>
      <div className={s.form1}>
        <Grid container rowSpacing={3}>
          <Grid container item spacing={2} alignItems="start" columns={{ xs: 24 }} wrap="nowrap">
            <Grid item xs={5} textAlign="left">
              <FormLabel id="money-label" style={{ fontSize: 14, fontWeight: 800 }}>
                積立金額
                <br />
                （一回あたり）
              </FormLabel>
            </Grid>
            <Grid item xs={5} container columnSpacing={2} columns={{ xs: 12 }}>
              <Grid item xs={7}>
                <OutlinedInput
                  id="money-group"
                  value={kingaku.money}
                  placeholder="積立金額"
                  onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onInputChange(e, 'money')}
                  onBlur={(e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => onInputCheck(e, 'money')}
                  fullWidth
                  notched={false}
                  autoComplete="off"
                  error={kingaku.checkFlg ? true : false}
                  sx={{ height: 36, fontSize: 14, color: kingaku.checkFlg ? '#d32f2f' : 'black' }}
                  endAdornment={<InputAdornment position="end">円</InputAdornment>}
                  label="money"
                />
                {kingaku.checkFlg && (
                  <FormHelperText error>
                    {kingaku.message.map((item, index) => (
                      <span key={index}>
                        {item}
                        <br />
                      </span>
                    ))}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4}>
                <Button onClick={() => btnClick('money')} variant="text" fullWidth sx={{ height: 36, fontSize: 14 }}>
                  クリアする
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item spacing={2} alignItems="start" columns={{ xs: 24 }} wrap="nowrap">
            <Grid item xs={5} textAlign="left">
              <FormLabel id="money-label" style={{ fontSize: 14, fontWeight: 800 }}>
                テスト金額
              </FormLabel>
            </Grid>
            <Grid item xs={5} container columnSpacing={2} columns={{ xs: 12 }}>
              <Grid item xs={7}>
                <OutlinedInput
                  id="money-group"
                  value={kingaku2.money2}
                  placeholder="テスト金額"
                  onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onInputChange(e, 'money2')}
                  onBlur={(e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => onInputCheck(e, 'money2')}
                  fullWidth
                  notched={false}
                  autoComplete="off"
                  error={kingaku2.checkFlg2 ? true : false}
                  sx={{ height: 36, fontSize: 14, color: kingaku2.checkFlg2 ? '#d32f2f' : 'black' }}
                  endAdornment={<InputAdornment position="end">円</InputAdornment>}
                  label="money2"
                />
                {kingaku2.checkFlg2 && (
                  <FormHelperText error>
                    {kingaku2.message2.map((item, index) => (
                      <span key={index}>
                        {item}
                        <br />
                      </span>
                    ))}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={4}>
                <Button onClick={() => btnClick('money2')} variant="text" fullWidth sx={{ height: 36, fontSize: 14 }}>
                  クリアする
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Index;
