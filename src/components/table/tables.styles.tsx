import {
  styled,
  TableRow,
  TableCell,
  tableCellClasses,
  TableCellProps,
} from "@mui/material";

interface ConditionedTableCellProps extends TableCellProps {
  transactionType?: string;
}

export const StyledTableCell = styled(TableCell, {
  shouldForwardProp: (prop) => prop !== "transactionType",
})<ConditionedTableCellProps>(({ theme, transactionType }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  ...(transactionType === "credit" && { color: "lime", fontsize: "bold" }),
  ...(transactionType === "debit" && { color: "red", fontsize: "bold" }),
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
