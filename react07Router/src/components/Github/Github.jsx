import React, { useEffect } from 'react'

function Github() {

    const [d, setData] = React.useState([]);
    useEffect(() => {

        fetch('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001')
            .then((res) => res.json())
            .then((d) => {
                console.log(d)
                setData(d)
            })

    }, [])

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '>
           Employee ID
           {d.map((d)=>
           <ul>
           <li value="100">{d.id}
           {d.firstName}
           {d.email}
           {d.contactNumber}
           </li>
           </ul>  
  
           )}
           
        </div>
    )
}

export default Github
