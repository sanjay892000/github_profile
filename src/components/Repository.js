import React from 'react'
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import '../style/repository.css'

function Repository() {
  return (
    <div className='container'>
      <Button className="my-4" variant="text" color="secondary" startIcon={<ArrowBackIcon />} component={Link} to="/" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif" }}>Home page</Button>
    </div>
  )
}

export default Repository
