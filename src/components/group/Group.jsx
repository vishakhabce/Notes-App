import React from 'react'
import './module.Group.css'	

const Group = ({ title }) => {
    return (
        <div className='group'>
            <div className='icon' >
                {
                    title.split(' ')
                        .map(word => word.charAt(0).toUpperCase())
                        .join('')
                        .substring(0, 2)
                }
            </div>
            <div className='grp-title'>{title}</div>
        </div>
    )
}

export default Group