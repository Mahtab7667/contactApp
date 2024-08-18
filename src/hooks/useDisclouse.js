import React, { useState } from 'react'


const useDisclouse = () => {

     // for modal
  let [isOpen,setOpen]=useState(false);
  
  let onOpen=()=>{
    setOpen(true)
  }
  let onClose=()=>{
    setOpen(false)
  }

  return {isOpen,onOpen,onClose}
}

export default useDisclouse