import React, { createContext, useState } from 'react';


export const userContext = createContext()

function Context(props) {

    const [data, setdata] = useState([])

  return (
    <userContext.Provider value={{data,setdata}}>
      {props.children}
    </userContext.Provider>
  )
}

export default Context