import React from 'react'

interface Props {
    _id: string,
    title: string,
    description: string,
    owner: {_id: string, username: string, email: string},
    pages: number,
    status: string[]
    published: number,
    writer: string
}

export default function Card({props}: {props: Props}) {
  return (
    <div className='bg-white p-6 rounded-lg shadow-lg cursor-pointer'>
        <h2 className='text-2xl font-medium mb-2'>{props.title}</h2>
        <div>
            <p>Description: {props.description}</p>
            <p>Pages: {props.pages}</p>
            <p>Published: {props.published}</p>
            <p>Isbn: {props._id}</p>
        </div>
        <div className='flex items-center justify-between mt-3'>
            <h3>{props.writer} / {props.published}</h3>
            <span className={`p-2 rounded-lg text-white capitalize font-semibold ${props.status[0]=='new' 
                ? 'bg-[#FF0000]' 
                : props.status[0]=='reading'
                ? 'bg-[#FFEC43]'
                : props.status[0]=='finished'
                ? 'bg-[#00FF29]'
                : ''}`}>{props.status}</span>
        </div>
    </div>
  )
}
