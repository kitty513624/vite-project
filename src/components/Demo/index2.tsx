import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  IconButton,
  Button,
  TableHead,
  TablePagination
} from '@mui/material';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import s from './index.module.scss';
import no_collection from '@images/no_collection.png';
import collection from '@images/collection.png';
// import red_star from '@images/red_star.png';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Rating from '@mui/material/Rating';
import { TablePaginationActionsProps, Pdata } from './components/fieldType';
import { StyledTableCell } from './components/StyledTableCell';
import { StyledTableRow } from './components/StyledTableRow';
// eslint-disable-next-line
import Pagination from '@mui/material/Pagination';
// eslint-disable-next-line
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { BootstrapInput } from '@components/BootstrapInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Title from '@components/Title';
// import useTableData from './components/tableData';
import { useSelectData, useTableDataModal, useTableDataSearchParams } from './components/tableData2';
import { useAuth } from '@/context/auth-context';
// import { useMyTest } from '@/context/sampleContext/sample-context';

const CustomPaginationActionsTable: FC<Pdata> = () => {
  // const star = (e: any) => {
  // 	const list: Array<any> = [];
  // 	for (let index = 0; index < e; index++) {
  // 		list.push(
  // 			<li key={index}>
  // 				<img style={{ width: 15 }} src={red_star} alt="22" />
  // 			</li>
  // 		);
  // 	}
  // 	return (
  // 		<ul className={s.star}>
  // 			{list.map((p) => {
  // 				return p;
  // 			})}
  // 		</ul>
  // 	);
  // };
  // const [startDate, setStartDate] = useState(new Date());
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  // const [age, setAge] = React.useState('');
  const [sortValue, setSort] = useState('10');
  // const { data, setData } = useTableData(props.activeKey);
  // console.log(data, 'data');
  // const dataSource = data;
  const [param, setParam] = useTableDataSearchParams();
  // console.log(param, '-----param--------');
  const { value: dataSource, upBtn, downBtn } = useTableDataModal(param);
  console.log(dataSource, '-------dataSource--------');
  // const { value: dataSource, upBtn, downBtn } = useArray(tableData);
  const [selectData] = useSelectData();
  const { setRowTable } = useAuth();
  // const handleChange = (event: { target: { value: string } }) => {
  // 	setSort(event.target.value);
  // };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dataSource.length) : 0;

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    // console.log(newPage);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  // const heartBtn = (row, index) => {
  // 	const nData = JSON.parse(JSON.stringify(dataSource));
  // 	nData[index].heart = !row.heart;
  // 	setData(nData);
  // };
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Title name="检索结果" type="b" title="conven-title" />
      {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> */}

      {searchCriteria()}
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">收藏</StyledTableCell>
              <StyledTableCell align="center">ファンド名/ファンド情報</StyledTableCell>
              <StyledTableCell align="center">
                基準価額 <br />
                （前日比）
              </StyledTableCell>
              <StyledTableCell align="center">ファンド </StyledTableCell>
              <StyledTableCell align="center">设定通知 </StyledTableCell>
              <StyledTableCell align="center">
                取引 <br />
                （締切時刻）
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(dataSource || []).map((row, index) => (
              <StyledTableRow key={index}>
                <TableCell style={{ width: 80 }} component="th" scope="row" align="center">
                  <div className={s.heart} onClick={() => heartBtn(row, index)}>
                    {row.heart ? <img src={no_collection} alt="no logo" /> : <img src={collection} alt="no logo" />}
                    <div style={{ fontSize: 12 }}>保有中</div>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <div className={s.sec_name}>
                    <h4>委託会社名797343398343</h4>
                    <p>ファンド名は最大全角４０文字はいります</p>
                    <p>ファンド名は最大全角４０文字はいります</p>
                    <p>愛称52394584932875293457</p>
                    <div>
                      <Button variant="outlined">つみたてNISA</Button>
                      <Button variant="outlined">販売金額 第1位</Button>
                    </div>
                    <Button
                      onClick={() => {
                        alert('clicked');
                      }}
                    >
                      {row.fund_sec_code}
                    </Button>
                  </div>
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.fq_price}
                </TableCell>
                <TableCell style={{ width: 110 }} align="center">
                  <div>
                    <Rating name="read-only" value={row.star_number} readOnly />
                  </div>
                  {/* <div>{star(row.star_number)}</div> */}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  <Button
                    startIcon={<ForwardToInboxIcon />}
                    endIcon={<ChevronRightIcon />}
                    variant="outlined"
                    // onClick={(row) => alert('c')}
                    onClick={() => {
                      // console.log(row, index, '-------row, index-------');
                      // const nData = JSON.parse(JSON.stringify(dataSource));
                      // console.log(nData[index], '-------nData[index]-------');
                      setRowTable(row ?? []);
                    }}
                  >
                    {' '}
                    设定{' '}
                  </Button>
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  <div>
                    <Button
                      style={{ marginBottom: 5, width: 100 }}
                      onClick={() => {
                        alert('clicked');
                      }}
                    >
                      スポット買付
                    </Button>
                    <Button
                      style={{ marginBottom: 5, width: 100 }}
                      onClick={() => {
                        // eslint-disable-next-line
                        // state.buyFund(row.fund_sec_code, index);
                      }}
                    >
                      積立買付
                    </Button>
                    <Button
                      style={{ width: 100 }}
                      onClick={() => {
                        alert('clicked');
                      }}
                    >
                      売却
                    </Button>
                    {/* <br />({e}) */}
                  </div>
                </TableCell>
              </StyledTableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={dataSource.length} //总数据条数
        rowsPerPage={rowsPerPage} //当前一页多少条
        page={page} //当前第几页
        SelectProps={{
          inputProps: {
            'aria-label': 'rows per'
          },
          native: true
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        ActionsComponent={TablePaginationActions}
      />
    </Paper>
  );
  // 筛选框部分
  function searchCriteria() {
    return (
      <div className={s.selectionCriteria}>
        <div>31~50件/5000件</div>
        <div className={s.sort}>
          <FormControl sx={{ m: 1, minWidth: 220 }}>
            <Select
              value={param.fundName}
              label="请选择"
              onChange={(event: SelectChangeEvent) => setParam({ ...param, fundName: event.target.value as string })}
              displayEmpty={true}
              inputProps={{ 'aria-label': 'Without label' }}
              input={<BootstrapInput />}
            >
              {selectData?.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
              {/* <MenuItem value={'10'}>基本面额</MenuItem>
							<MenuItem value={'20'}>历史数据</MenuItem>
							<MenuItem value={'30'}>型号等级</MenuItem> */}
            </Select>
            {/* <FormHelperText>Without label</FormHelperText> */}
          </FormControl>
          <div>
            <Button onClick={upBtn}>up</Button>
            <Button onClick={downBtn}>down</Button>
          </div>
        </div>
      </div>
    );
  }
  // 分页
  function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
    // console.log(props);
    const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onPageChange(event, 0);
    };

    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>

        <IconButton onClick={handleNextButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="next page">
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Box>
    );
  }
};

export default CustomPaginationActionsTable;
