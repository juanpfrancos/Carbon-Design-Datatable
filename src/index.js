
  import React from 'react';
  import { render } from 'react-dom';
  import 'carbon-components/css/carbon-components.min.css';
  import { DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from 'carbon-components-react';
  import { headerData, rowData } from './sampleData';

  const App = () => (
  <DataTable rows={rowData} headers={headerData}>
  {({ rows, headers, getHeaderProps, getTableProps }) => (
    <TableContainer title="DataTable">
      <Table {...getTableProps()}>
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableHeader {...getHeaderProps({ header })}>
                {header.header}
              </TableHeader>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {row.cells.map((cell) => (
                <TableCell key={cell.id}>{cell.value}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )}
</DataTable>
  );

  render(<App />, document.getElementById('root'));
