import { Button } from '@mui/base'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Homepage() {
    const navigate= useNavigate()
  return (
    <div>
        <h1>Home</h1>
        <Button onClick={()=>navigate("/crm")}>CRM</Button>
        <Button onClick={()=>navigate("/interview")}>Interviewapp</Button>
        <Button onClick={()=>navigate("/zenclass")}>Zenclass</Button>
        <Button onClick={()=>navigate("/foodapp")}>Foodapp</Button>
        
    </div>
  )
}
