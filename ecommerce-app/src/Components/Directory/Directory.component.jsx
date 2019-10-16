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
    console.log(this.state.sections)
    this.setState({
      sections: sections
    })
  }
  render() {
    return (
      <div className="menu-container">
        {this.state.sections.map(({title, imageUrl, id, size}) => {
          return <MenuItem imgUrl={imageUrl} title={title} key={id} size={size}/>
        })}
      </div>
    )
  }
}

export default Directory;