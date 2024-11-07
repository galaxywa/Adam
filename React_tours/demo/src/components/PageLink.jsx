import React from 'react'
import { pageLinks } from '../data'

function PageLink() {
  return (
    <li>
    <a href={ link.href } className={ itemClass }>{ pageLinks[0].text }</a>
    </li>
  )
}

export default PageLink