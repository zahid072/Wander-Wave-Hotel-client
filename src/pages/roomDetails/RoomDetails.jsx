import React from 'react'
import { useParams } from 'react-router-dom'

const RoomDetails = () => {
  const {id} = useParams()
  return (
    <div>
      {id}
      Rooms details
    </div>
  )
}

export default RoomDetails
