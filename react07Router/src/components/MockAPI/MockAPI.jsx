 import React, { useEffect,useState } from 'react'
import jsonData from '../MockAPI/DummyAPI'


export default function MockAPI() {
    const [post, getPost] = useState([])
    const API = 'https://65ba309db4d53c0665524358.mockapi.io/SelvaTest/JOB_ROLE';
    const fetchPost = () => {
      fetch(API)
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          getPost(res)
        })
    }
    useEffect(() => {
      fetchPost()
    }, [post])
  return (
    <>
     <div class="relative overflow-x-auto ">
     
      <table  class="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-collapse border border-slate-400 ">
       
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="col" class="px-6 py-3">ID</th>
        <th scope="col" class="px-6 py-3">Name</th>
        <th scope="col" class="px-6 py-3">Role</th>
        <th scope="col" class="px-6 py-3">Location</th>
        
        </tr>
        
      
        {post.map((item, i) => {
          return( <tr class="bg-white dark:bg-gray-800 hover:bg-blue-100 border-collapse border border-slate-400" key={i}>{item.id}
         <td class="px-6 py-4 "> {item.Name}</td>
          <td class="px-6 py-4">{item.Role}</td>
          <td class="px-6 py-4">{item.Location} </td>
          </tr>
          )
        })}
      </table>
     
      </div>
    </>
  )
}
