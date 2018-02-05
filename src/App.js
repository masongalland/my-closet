import React, {Component} from "react"
import Item from "./Item"

import "./App.css"

class App extends Component {
  constructor(){
    super()
    this.state = {
      input: "",
      colorInput: "#ffffff",
      inventory: [{type: "Shirt", color: "blue"}, {type: "pants", color: "brown"}]
    }
    this.handleChange = this.handleChange.bind(this);
    this.chooseColor = this.chooseColor.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleChange(e) {
    this.setState({input: e.target.value})
  }

  chooseColor(e) {
    this.setState({colorInput: e.target.value})
  }

  addItem() {
    this.setState({inventory: [...this.state.inventory, {type: this.state.input, color: this.state.colorInput}],
    input:"", colorInput:"#ffffff"})

  }

  deleteItem(index) {
    var copy = this.state.inventory.slice();
    copy.splice(index, 1)
    this.setState({inventory: copy})

  }

  render(){

    let items = this.state.inventory.map((clothing, index) => {
      return (
        <Item type={clothing.type} color={clothing.color} delete={this.deleteItem} id={index}/>
      )
    })


    return (
      <div>
        <h2>Add Item:</h2>
        <input placeholder="item name" value={this.state.input} onChange={this.handleChange} />
        <input type="color" value= {this.state.colorInput} onChange={this.chooseColor}/>
        <button onClick={this.addItem}>Add</button>

        <h2>Inventory</h2>
        <div>
        {items}
        </div>


      </div>
    )
  }



}

export default App


