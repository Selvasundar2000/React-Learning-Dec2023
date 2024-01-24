import React, { useEffect } from 'react'

function MockAPI() {

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


        <>
            {d.map((d) =>
                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

                            <tr >

                                <th>ID</th>
                                <th>First Name</th>
                                <th width="300">Email</th>
                                <th>Phone number</th>

                            </tr>
                        </thead>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                            <td class="px-6 py-4">{d.id}</td>
                            <td class="px-6 py-4">{d.firstName}</td>
                            <td class="px-6 py-4"> {d.email}</td>
                            <td class="px-6 py-4">{d.contactNumber}</td>

                        </tr>
                    </table>
                </div>
            )}
        </>



    )
}






export default MockAPI
