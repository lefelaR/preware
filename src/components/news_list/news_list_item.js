import React from "react";


const NewList = (props)=>{
console.log(props)

const items = props.user.map((items)=>{
        return(
            <p key={items.id}> {items.name} </p>
        )
})

return(
    <p> 
       {items}   
    </p>
)
}

export default NewList; 

