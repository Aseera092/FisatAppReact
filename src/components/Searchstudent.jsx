import React, { useState } from 'react'
import Navbar from './Navbar'

const Searchstudent = () => {
    const [data,searchdata]=useState(
        {
            "firstname":""
        }
    )
    const inputHandler=(event)=>{
        searchdata({...data,[event.target.name]:event.target.value})
    }
 const readvalue=()=>{
    console.log(data)
 }
  return (
    <div>
        <Navbar/>
        <container>
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col xxl-12">
                    <label htmlFor="" className="form-label">firstname</label>
                    <input type="firstname" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col xxl-12">
                    <button className="btn btn-primary"onClick={readvalue}>Search</button>
                </div>
            </div>
        </container>
    </div>
  )
}

export default Searchstudent