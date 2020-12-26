import React, {Component} from 'react';
import Rodal from 'rodal';
//import NavBar from './navbar.jsx';
 
// include styles
import 'rodal/lib/rodal.css';
 
export default class RodalTest extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }
 
  show() {
    this.setState({ visible: true });
    console.log(this.state.visible);
  }
 
  hide() {
    this.setState({ visible: false });
    console.log(this.state.visible);
  }
  
  render() {
    return (
      <div>
        <button onClick={this.show.bind(this)}>show</button>
 
        <Rodal 
          visible={this.state.visible} 
          onClose={this.hide.bind(this)}>
          <div style={{backgroundColor: 'blue'}}>Content</div>
        </Rodal>
      </div>
    );
  }
}