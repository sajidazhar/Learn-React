import React from 'react'

const Hello = () => {
//    return (
 //       <div>
   //         <h1>Hello Sajid Azhar</h1>
   //     </div>
    //)
    return React.createElement(
        'div',
     null, 
     React.createElement('h1', null, 'Hello sajid')
     )
}
export default Hello