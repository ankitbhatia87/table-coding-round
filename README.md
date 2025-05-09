TO run the project

# Run npm install
# Run npm run dev

This should run the project on http://localhost:5173/


Some pointers

1. I have done a basic sort and filter on city to demonstrate the functionality.
2. Sorting can be scaled to all the fields that contains alphabetic values with the current code, however, to sort the numbers minor changes in the code are required where sorting needs to be done using (a - b) values and (b - a) values.
3. For filtering, since its a nested data, we can flatten the Object join the values with Object.values(rowData).join(" ") method, convert the entire values to string and then apply the filter to it. It will filter all the fields.
4. Debouncing can be added to the filter by using setTimeout in useEffect and clearing the timeout on return method ensuring no memory leak happens
5. Filtering can be more comprehensive by adding the regex in match method or using indexOf method for checking any existance of the given string anywhere.
6. Given the complex structure of the data, I have for now added any as the type to speed up the things, otherwise in the real case scenrio the interface can be designed according to the data for eg:

interface DOBType {
  age: number;
  date: string;
}

interface IDType {
  name: string;
  value: string | null
}

interface APIResponseType {
  cell: string;
  dob: DOBType;
  email: string;
  id: IDType
  ...
}

This way we can ensure that the data types matches with the response and instead of building one huge interface, nested values can be the independent types.

Thank you!