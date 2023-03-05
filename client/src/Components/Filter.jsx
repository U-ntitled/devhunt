import { MenuItem, Select } from '@mui/material'
import React, { useRef } from 'react'
import downIcon from '../Image/down.png'



function Filter({data}) {
     
      
      const selectRef = useRef()
  return (
    <>
       <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
           value={selectRef.current.value}
          // onChange={handleChange}
          inputRef={selectRef}
         
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </>
    
  )
}

export default Filter
