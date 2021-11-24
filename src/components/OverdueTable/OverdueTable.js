import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import Table from 'react-bootstrap/Table'

class OverdueTable extends React.Component{

    test(props){
        if  ({props} == 1){
           return <td style={{color: "red"}}>Tak</td>
        } else {
           return <td style={{color: "lightgreen"}}>Nie</td>
        }
    }



    render() {
        return (
            <Table variant={"dark"}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Tytuł Książki</th>
                    <th>Autor</th>
                    <th>Data Wypożyczenia</th>
                    <th>Zaległe?</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.title}</td>
                    <td>{this.props.author}</td>
                    <td>{this.props._borrow_date}</td>
                    {this.props.borrowed == 0? <td style={{color: 'red'}}>Tak</td>:<td style={{color: 'lightgreen'}}>Nie</td>  }
                </tr>
                </tbody>
            </Table>
        )
    }
}

export default OverdueTable;