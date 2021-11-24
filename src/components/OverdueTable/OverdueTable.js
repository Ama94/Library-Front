import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import Table from 'react-bootstrap/Table'

class OverdueTable extends React.Component{
    render() {
        return (
            <Table variant={"dark"}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Tytuł Książki</th>
                    <th>Autor</th>
                    <th>Data Wypożyczenia</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Władca Pierścieni</td>
                    <td>J.R.R Tolkien</td>
                    <td>12.10.2021</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </Table>
        )
    }
}

export default OverdueTable;