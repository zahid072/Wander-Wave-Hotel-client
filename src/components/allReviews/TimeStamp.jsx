import React from 'react'

const postTime = (timestamp)=>{
    const now = new Date();
    const postTime = new Date(timestamp);

    const diff = now - postTime;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if(!diff){
      return <span className="loading loading-spinner loading-xs size-2"></span>
    }

    if (seconds < 60) {
        return seconds + 's ago';
    } else if (minutes < 60) {
        return minutes + 'm ago';
    } else if (hours < 24) {
        return hours + 'h ago';
    } else {
        return days + 'd ago';
    }
}

const TimeStamp = ({timestamp}) => {
  return (
    <div>
      {postTime(timestamp)}
    </div>
  )
}

export default TimeStamp
