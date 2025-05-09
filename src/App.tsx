import { useEffect, useState } from 'react'
import './App.css'
import TableRow from './components/TableRow/TableRow';
import TableHeaderCell from './components/TableHeaderCell/TableHeaderCell';

function App() {

  const [data, setData] = useState<Array<any>>([]);
  const [sortDirection, setSortDirection] = useState<string | null>(null);
  const [updatedData, setUpdatedData] = useState<Array<any>>([]);

  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    (async() => {
      const response: any = await fetch('https://randomuser.me/api/?results=20');
      if(!response.ok) {
        throw new Error("Unable to fetch the data");
      }

      const result: any = await response.json();
      console.log({result})
      setData(result.results);
    })()
  }, [])

  const handleSorting = (sortKey: string) => {

    const sortedData = [...data].sort((a, b) => {
      const valueA = String(a.location[sortKey]).toLowerCase()
      const valueB = String(b.location[sortKey]).toLowerCase()

      if(sortDirection === null) {
        setSortDirection('asc')
        return valueA.localeCompare(valueB)
      }

      if(sortDirection === 'asc') {
        setSortDirection('desc')
        return valueB.localeCompare(valueA)
      }
      
    })

    if(sortDirection === 'desc') {
      setSortDirection(null)
      setUpdatedData(data)
    }
    console.log({sortDirection})
    setUpdatedData(sortedData)
  }


  // Code for filter is here

  useEffect(() => {
    // filtering on city
    const filteredData = data.filter(value => value.location.city.match(search))
    setUpdatedData(filteredData)
  }, [search])

  useEffect(() => {
    setUpdatedData(data)
  }, [data])
  
  return (
    <>
      <input type='text' onChange={e => setSearch(e.target.value)} value={search} placeholder='Search Here' />
      <table>
        <thead>
          <tr>
            <TableHeaderCell onClick={() => handleSorting("city")}><strong>City</strong></TableHeaderCell>
            <TableHeaderCell><strong>State</strong></TableHeaderCell>
            <TableHeaderCell><strong>Country</strong></TableHeaderCell>
            <TableHeaderCell><strong>Postcode</strong></TableHeaderCell>
            <TableHeaderCell><strong>Number</strong></TableHeaderCell>
            <TableHeaderCell><strong>Name</strong></TableHeaderCell>
            <TableHeaderCell><strong>Latitude</strong></TableHeaderCell>
            <TableHeaderCell><strong>Longitude</strong></TableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {
            updatedData?.map(value => (
              <TableRow key={value.login.uuid} rowData={value} />
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default App
