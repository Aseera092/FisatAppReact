import React, { useState } from 'react'
import Navbar from './Navbar'

const Addstud = () => {
    const [data, setdata] = useState(
        {
            "id": "",
            "firstname": "",
            "lastname": "",
            "college": "",
            "dob": "",
            "course": "",
            "mobile": "",
            "email": "",
            "address": "",
            "v": ""
        }
    )
    const inputHandler = (event => {
        setdata({ ...data, [event.target.name]: event.target.value })
    })
    const readvalue = () => {
        console.log(data)
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">id</label>
                        <input type="id" className="form-control" name='id' value={data.id} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">First Name</label>
                        <input type="Last Name" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Last Name</label>
                        <input type="Last Name" className="form-control" name='lastname' value={data.lastname} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">College</label>
                        <input type="College" className="form-control" name='college' value={data.college} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Date Of Birth</label>
                        <input type="date" name="" id="" className="form-control" name='dob' value={data.dob} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Course</label>
                        <input type="Course" className="form-control" name='course' value={data.course} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Mobile No</label>
                        <input type="Mobile No" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Email-ID</label>
                        <input type="Email-ID" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Address</label>
                        <input type="Address" className="form-control" name='address' value={data.address} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">v</label>
                        <input type="v" className="form-control" name='v' value={data.v} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-primary" onClick={readvalue}>Submit</button>
                    </div>
                </div>
            </div>

        </div>
        
    )
}

export default Addstud