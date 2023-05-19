import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleProductQuery } from '../redux/api/productsApi'

const Detail = () => {
  const {id} = useParams()
  const {data} = useGetSingleProductQuery(id)
  return (
    <div>
      <div className=" flex flex-col gap-5 relative">
          <img src={data?.image} className=' w-screen h-[450px]' alt="" />
          <button></button>
      </div>
    </div>
  )
}

export default Detail