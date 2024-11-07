import React from 'react'

function Title({main_title, sub_title }) {
  return (
    <div className="section-title">
        { main_title } <span>{ sub_title }</span>
    </div>
  )
}

export default Title