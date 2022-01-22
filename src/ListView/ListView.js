import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Spinner, Table } from "react-bootstrap";
import Swing from 'react-reveal/Swing';
import './ListView.css';

function ListView(props) {
    const [getLists, setGetLists] = useState([]);

    useEffect(() => {
        async function fetchLists() {
            const URL = `https://run.mocky.io/v3/f3feef1c-9bfa-43fd-b2a0-bbe9abadb4f6`;
            try {
                const res = await axios.get(URL);
                console.log(res.data.clients);
                setGetLists(res.data.clients);
            } catch (error) {
                console.log(error);
            }
        }
        fetchLists();
    }, []);

    if (!getLists.length) return <Spinner style={{padding:"10%",marginTop:"10%"}} animation="border" variant="danger" />;

    return (
        
        <div className="banner">
          
            <Container style={{paddingTop:"15%"}} >
                <Table  striped bordered hover variant="dark">
                    <thead >
                        <tr >
                            <Swing><th  style={{padding:"1%",textAlign:"center",fontSize:"25px",fontWeight:"600"}}>Serial Id</th></Swing>
                            <Swing><th style={{padding:"1%",textAlign:"center",fontSize:"25px",fontWeight:"600"}}>Name</th></Swing>
                            <Swing><th style={{padding:"1%",textAlign:"center",fontSize:"25px",fontWeight:"600"}}>Company Name</th></Swing> 
                            
                        </tr>
                    </thead>
                    {getLists.map((single) => (
                        <tbody>
                            <tr>
                            <Swing><td style={{padding:"1%",textAlign:"center",fontSize:"20px",fontWeight:"600"}}>{single.id}</td></Swing>
                            <Swing><td style={{padding:"1%",textAlign:"center",fontSize:"20px",fontWeight:"600"}}>{single.name}</td></Swing>
                            <Swing><td style={{padding:"1%",textAlign:"center",fontSize:"20px",fontWeight:"600"}}>{single.company}</td></Swing>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </Container>

        </div>
    );
}

export default ListView;

