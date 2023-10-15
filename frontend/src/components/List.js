import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import axios from 'axios'
 
 
const List = () => {
    const [userData, setUSerData] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
 
    const fetchData = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/users");
            //console.log(result.data.results);
            setUSerData(result.data.results)
        } catch (err) {
            console.log("something Wrong");
        }
    }
 
    const handleDelete=async(id)=>{
        console.log(id);
        await axios.delete("http://127.0.0.1:8000/api/usersdelete/"+id);
        const newUserData=userData.filter((item)=>{
            return(
                item.id !==id
            )
        })
        setUSerData(newUserData);
    }
 
    return(
        <div className="container">
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Student No.</th>
                    <th>Full Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    userData.map((user, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{user.name} </td>
                                <td>{user.username} </td>
                                <td>{user.email} </td>
                                <td>
                                <ButtonToolbar className="d-flex justify-content-center">
                            <ButtonGroup className="me-2 mb-2">
                            <NavLink to={`/view/${user.id}`} className="btn btn-info">View</NavLink>
                            </ButtonGroup>
                            <ButtonGroup className="me-2 mb-2">
                            <NavLink to={`/edit/${user.id}`} className="btn btn-warning">Edit</NavLink>
                            </ButtonGroup>
                            <ButtonGroup className="me-2 mb-2">
                            <Button onClick={()=>handleDelete(user.id)} variant="danger">Delete</Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                
                                </td>
                            </tr>
                        )
                    })
                }
 
            </tbody>
        </Table>
        </div>
    );
};
 
export default List;