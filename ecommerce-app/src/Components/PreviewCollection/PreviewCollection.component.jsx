import React, { Component } from 'react'
import './PreviewCollection.styles.scss'
import CollectionItem from '../CollectionItem/Collectiontem.component'

const PreviewCollection = (props) => {
  console.log(props)
  return (
    <div className="collection-preview">
      <h1 className="title">{props.title.toUpperCase()}</h1>
      <div className="preview">
        {props.items.filter((item, idx) => idx < 4).map(({id, ...itemProps})=> {
          return (
            <CollectionItem key={id} {...itemProps}/>
            )
        })}
      </div>
    </div>
  )
}

export default PreviewCollection