import type { ReactNode } from "react";

interface TableCellProps {
  children: ReactNode;
}

const TableCell = (props: TableCellProps) => {
  const {children} = props ?? {}
  return (
    <td>{children}</td>
  )
}

export default TableCell;