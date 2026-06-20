import React from 'react'
import Skeleton from 'react-loading-skeleton'

const Loading = () => {
  return (
    <div>
      <Skeleton height={200} baseColor="green" />
    </div>
  )
}

export default Loading