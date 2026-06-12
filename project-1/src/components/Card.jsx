// import React from 'react'

// const Card = (props) => {
//   return (
//     <div>
//         <h2>{props.name}</h2>
//         <p>Price:{props.price}</p>
//         <button>Show Now</button>
//     </div>
//   )
// }

// export default Card


import React from 'react'

const Card = ({name,price}) => {
  return (
    <div>
        <h2>{name}</h2>
        <p>Price:{price}</p>
        <button>Show Now</button>
    </div>
  )
}

export default Card