import TableCell from "../TableCell/TableCell"

interface TableRowProps {
  rowData: any
}

const TableRow = (props: TableRowProps) => {
  const {rowData} = props ?? {}
  
  const {
    location: {
      city, state, country, postcode,
      coordinates: {
        latitude, longitude
      }
    },
    phone,
    name: {
      first, last, title
    }
  } = rowData ?? {}
  return (
    <tr>
      <TableCell>{city}</TableCell>
      <TableCell>{state}</TableCell>
      <TableCell>{country}</TableCell>
      <TableCell>{postcode}</TableCell>
      <TableCell>{phone}</TableCell>
      <TableCell>{title} {first} {last}</TableCell>
      <TableCell>{latitude}</TableCell>
      <TableCell>{longitude}</TableCell>
    </tr>
  )
}

export default TableRow;