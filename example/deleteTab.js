import React, {Component} from 'react';
import {Tabs, Panel} from '../';

export default class DeleteTab extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Tabs activeKey={2} 
            style="tabtab__folder__" 
            addBackTab={false}
            tabDeleteButton={true}
            handleTabDeleteButton={handleTabDeleteButton}>
        <Panel title="tab1">
          123121233132
        </Panel>
        <Panel title="tab2">
          ypmn
        </Panel>
        <Panel title="tab3">
          sdfsdf
        </Panel>
        <Panel title="tab4">
          sdfsdf
        </Panel>
      </Tabs>
    )
  }
}


function handleTabDeleteButton() {
  alert('delete tab ');
}