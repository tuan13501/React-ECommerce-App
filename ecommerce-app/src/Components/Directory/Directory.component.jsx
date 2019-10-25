import React from 'react'
import './Directory.styles.scss'
import MenuItem from '../MenuItem/MenuItem.component'
import {sections} from '../../directory.data'

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: []
    }
  }
  componentDidMount(){
    this.setState({
      sections: sections
    })
  }
  render() {
    // console.log('sections', this.state.sections)
    return (
      <div className="menu-container">
        {this.state.sections.map(({title, imageUrl, id, size, linkUrl}) => {
          return <MenuItem imgUrl={imageUrl} title={title} key={id} size={size} linkUrl={linkUrl}/>
        })}
      </div>
    )
  }
}

export default Directory;