import React from 'react' 

function ICard(props) {
  return (
    <div>
      <h2>College:{props.college}</h2>
      <div>
        <img src={props.pic} height={200} width={200} />
      </div>
      <h2>Roll No.:{props.rollNo}</h2>
      <h2>Name:{props.name}</h2>
      <h2>Branch:{props.branch}</h2>
      <h2>Section:{props.section}</h2>
      <h2>Skills:{props.skills}</h2>
    </div>
  )
}

export default ICard