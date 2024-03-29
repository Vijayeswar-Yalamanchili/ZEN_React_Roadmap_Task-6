import React,{ useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Topbar from './Topbar';
import axios from 'axios';
import { API_URL } from '../App';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Create() {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [street, setStreet] = useState("")
    const [suite, setSuite] = useState("")
    const [city, setCity] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [phone, setPhone] = useState("")
    const [website, setWebsite] = useState("")
    const [compName, setCompName] = useState("")
    const [catchPhrase, setCatchPhrase] = useState("")
    const [bs, setBs] = useState("")

    let navigate = useNavigate()

    const handleCreate = async() => {
        try {
            let data = {
                        name,username,email,street,suite,city,zipcode,
                        phone,website,compName,catchPhrase,bs, status:false
                       };
            let res = await axios.post(API_URL,data)
            if(res.status === 201){                     // 201 for creating status
                navigate('/')
                toast.success("data created")
            }
        } catch (error) {
            toast.danger("data failed")
        }
    }

    return <>
        <div className='container-fluid'>
            <Topbar/>
            <div className="fromWrapper">
                <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}}/>
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" onChange={(e)=>{setUsername(e.target.value)}}/>
                          </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Label>Email</Form.Label>
                          <Form.Control type='email' placeholder="Enter Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Group as={Col}>
                            <Form.Control type="text" placeholder='Enter Suite' onChange={(e)=>{setSuite(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control type="text" placeholder='Enter Street' onChange={(e)=>{setStreet(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control type="text" placeholder='Enter City' onChange={(e)=>{setCity(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control type="number" placeholder='Enter Zipcode' onChange={(e)=>{setZipcode(e.target.value)}}/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Phone Number" onChange={(e)=>{setPhone(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Website</Form.Label>
                            <Form.Control type="text" placeholder="Enter Website"  onChange={(e)=>{setWebsite(e.target.value)}}/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Label>Company</Form.Label>
                        <Form.Group as={Col}>
                            <Form.Control type="text" placeholder='Enter Company Name' onChange={(e)=>{setCompName(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control type="text" placeholder='Enter Catch-Phrase' onChange={(e)=>{setCatchPhrase(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control type="text" placeholder='Enter bs' onChange={(e)=>{setBs(e.target.value)}}/>
                        </Form.Group>
                    </Row>
                    <Button variant="primary" onClick={()=>handleCreate()}>Submit</Button>
                </Form>    
            </div>            
        </div>
    </>
    
}

export default Create