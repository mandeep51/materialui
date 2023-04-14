import React from 'react'
import { Button } from '@mui/material'
import { FcCompactCamera } from "react-icons/fc";

function MUIButton() {
  return (
    <div>
      <Button variant='text' color="primary" size="small"  >button</Button>
      <Button variant='contained' color="secondary" size="small"  >button</Button>
      <Button variant='outlined' color="error" size="small"  >button</Button>
      <Button onClick={()=>alert('hlo mandeep')}><FcCompactCamera style={{fontSize:"3em"}} ></FcCompactCamera></Button>

      <Button variant="outlined" startIcon={<FcCompactCamera style={{fontSize:"3em"}} />}>
  Delete
</Button>
<Button variant="contained" endIcon={<FcCompactCamera style={{fontSize:"3em"}} ></FcCompactCamera>}>
  Send
</Button>
    </div>
  )
}

export default MUIButton
