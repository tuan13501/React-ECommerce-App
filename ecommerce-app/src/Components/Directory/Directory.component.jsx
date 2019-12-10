import React from 'react'
import './Directory.styles.scss'
import MenuItem from '../MenuItem/MenuItem.component'
// import {sections} from '../../directory.data'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectDirectorySections } from '../../redux/directory/directory.selector'

const Directory = ({sections}) => {

  return (
    <div className="menu-container">
      {sections.map(({title, imageUrl, id, size, linkUrl}) => {
        return <MenuItem imgUrl={imageUrl} title={title} key={id} size={size} linkUrl={linkUrl}/>
      })}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);