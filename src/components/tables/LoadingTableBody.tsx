// @ts-nocheck
import {
  MUIDataTableBody,
  TableBody,
  TableBodyCell,
  TableBodyRow,
} from 'mui-datatables'
import {
  CircularProgress,
  Typography,
  TableBody as MuiTableBody,
  Box
} from '@mui/material'

//import { useStyles } from '../../../useStyles';

interface Props extends MUIDataTableBody {
  loading: boolean
}

export const LoadingTableBody = ({
  loading,
  options,
  columns,
  ...others
}: Props) => {
  // @ts-ignore
  const visibleColCnt = columns.filter((c) => c.display === 'true').length
  //const classes = useStyles();
  return loading ? (
    <MuiTableBody>
      <TableBodyRow options={options}>
        <TableBodyCell
          // @ts-ignore
          colSpan={
            options.selectableRows !== 'none' || options.expandableRows
              ? visibleColCnt + 1
              : visibleColCnt
          }
          options={options}
          colIndex={0}
          rowIndex={0}
        >
          <Typography variant="body1" component={'div'}>
            {/* //className={classes.loading} */}
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100vh"
            >
              <CircularProgress />
            </Box>
          </Typography>
        </TableBodyCell>
      </TableBodyRow>
    </MuiTableBody>
  ) : (
    <TableBody options={options} columns={columns} {...others} />
  )
}
