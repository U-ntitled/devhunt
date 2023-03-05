
import { MenuItem, Select } from '@mui/material'
import { motion } from 'framer-motion'
import React, { useState }  from 'react'




function Filter({visible}) {
     
    const [value, setValue] = useState("Topic")
    const [item, setItem] = useState("Plus recent")
    const [valeur, setValeur] = useState("Résolu")

    const handleChange = (e) =>{
      setValue(e.target.value)
    }
    const handleChange1 = (e) =>{
      setItem(e.target.value)
    }
    const handleChange2 = (e) =>{
      setValeur(e.target.value)
    }

    if(!visible){
      return 
    }
  

      
  return (
    
    <motion.div 
        initial={
          {
          opacity: 0,
          x:-50
          }
          }
          animate={{
              opacity:1,
              x:0
          }}
          transition={
              {
                duration: 1
              }
          } 
      
    
    
    ClassNames='w-full'>
       <Select
          className='w-full border-none '
          sx={{border:'none', outline:"none", color:'white'}}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          onChange={handleChange}
  
        >
         <MenuItem value='Topic'>Topic</MenuItem>
         <MenuItem value='Programmation<'>Programmation</MenuItem>
         <MenuItem value="Bourse d\'etude">Bourse d'etude</MenuItem>
         <MenuItem value='C2E'> C2E</MenuItem>
         <MenuItem value='C3lf'>C3lf</MenuItem>
          
        </Select>

        <Select
          className='w-full border-none '
          sx={{border:'none', outline:"none", color:'white'}}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={item}
          onChange={handleChange1}
  
        >
         <MenuItem value='Plus recent'>Plus recent</MenuItem>
         <MenuItem  value='l y a une semaine'>Il y a une semaine</MenuItem>
         <MenuItem value="Il y a un mois">Il y a un mois</MenuItem>
         <MenuItem value='Il y a un an'> Il y a un an</MenuItem>
        
          
        </Select>

        <Select
          className='w-full border-none '
          sx={{border:'none', outline:"none", color:'white'}}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={valeur}
          onChange={handleChange2}
  
        >
         <MenuItem value='Résolu'>Résolu</MenuItem>
         <MenuItem  value='Non résolu'>'Non résolu</MenuItem>
        
        
          
        </Select>
    </motion.div>
    
  )
}

export default Filter
