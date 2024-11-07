import React from 'react'
import { pageLinks } from '../data'

function PageLinks({parentClass, itemClass, id}) {
  
  return (
    <>
        <ul className={parentClass} id={id}>
            {pageLink.map((link) => {
              return <PageLink key= {link.id} link={link} itemClass={itemClass} />
            })}
        </ul>
    </>
  )
}
// TODO comment
export default PageLinks