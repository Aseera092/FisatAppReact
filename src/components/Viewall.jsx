import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
    const [data,setdata]= useState([])
const fetchData=()=>{
   axios.get("https://anishpdm.github.io/dummy-api-new/student.json").then(
        (Response)=>{
            console.log(Response.data)
        setdata(Response.data)
    }).catch().finally()
}
useEffect(()=>{fetchData()},[])
    
    return (
        <div>
            <Navbar />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">firstname</th>
                        <th scope="col">lastname</th>
                        <th scope="col">college</th>
                        <th scope="col">dob</th>
                        <th scope="col">course</th>
                        <th scope="col">mobile</th>
                        <th scope="col">email</th>
                        <th scope="col">address</th>
                        <th scope="col">v</th>
                    </tr>
                </thead>
                <tbody>

                    {
                    data.map(
                        (value, index) => {
                            return <tr>
                                <th scope="row">1</th>
                                <td>{value.firstname}</td>
                                <td>{value.lastname}</td>
                                <td>{value.college}</td>
                                <td>{value.dob}</td>
                                <td>{value.course}</td>
                                <td>{value.mobile}</td>
                                <td>{value.email}</td>
                                <td>{value.address}</td>
                                <td>{value.v}</td>


                            </tr>
                        }
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Viewall