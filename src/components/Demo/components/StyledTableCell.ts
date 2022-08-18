import { TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    backgroundColor: '#fafafa',
    // color: theme.palette.common.white,
    color: '#242526',
    fontWeight: 700,
    fontSize: 16
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));
