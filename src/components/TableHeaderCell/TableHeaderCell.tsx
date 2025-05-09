import type { ReactNode } from "react";

interface TableHeaderCell {
  children: ReactNode;
  onClick?: any
}

const TableHeaderCell = (props: TableHeaderCell) => {
  const {children, onClick} = props ?? {}

  const handleSorting = () => {
    if(onClick) {
      onClick?.()
    }
  }

  return (
    <th onClick={handleSorting}>{children}</th>
  )
}

export default TableHeaderCell;