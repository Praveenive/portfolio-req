import { Button } from '@mui/base'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Homepage() {
    const navigate= useNavigate()
  return (
    <><div className='step'>
          <h2>Crediantials</h2>
          <Button onClick={() => navigate("/crm")}>CRM</Button>
          <Button onClick={() => navigate("/interview")}>Interviewapp</Button>
          <Button onClick={() => navigate("/zenclass")}>Zenclass</Button>
          <Button onClick={() => navigate("/foodapp")}>Foodapp</Button>
      </div>
      <div className='step'>
        <h1>Technical Stack</h1>
              <Button onClick={() => navigate("/crmtech")}>Crmtech</Button>
              <Button onClick={() => navigate("/zentech")}>Zentech</Button>
              <Button onClick={() => navigate("/interviewtech")}>Interviewtech</Button>
              <Button onClick={() => navigate("/foodapp")}>Food app tech</Button>
          </div></>
  )
}
