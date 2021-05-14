import React, { Component, Fragment } from 'react'
import { Button } from 'antd';
import { BookFilled } from '@ant-design/icons';


class Note extends Component {
  constructor(props){
    super(props);
    this.state = {
      input:"",
      notelist:[]
    }
  }
  
  
  render() {
    return (
      <Fragment>
        <div className='App'>
          <h1><BookFilled className='logo'/>My NoteBook APP</h1>
          <main>
            <input
              className='searchbar'  
              placeholder='Type Note' 
              value={this.state.input} 
              onChange={this.handleInputChange.bind(this)}
              />
          <Button className='press' onClick={this.handleButton.bind(this)} type="Primary" danger>GO</Button>
        <ul className="note-space">
          {
            this.state.notelist.map((note, index) =>{
                return <li className="note" key={index} onClick={this.deleteNote.bind(this, index)}>{note}</li>
            })
          }
        </ul>
        </main>
        </div>
      </Fragment>
    )
  }
 handleInputChange(event){
   let value = event.target.value
    this.setState({
    input: value
  })
 } 

 handleButton(){
  this.setState({
    notelist:[...this.state.notelist, this.state.input],
    input:""
  })
 }

 deleteNote(index){
   const notelist = [...this.state.notelist]
   notelist.splice(index, 1)
   this.setState({
     notelist: notelist
  })
 }
}


export default Note;
