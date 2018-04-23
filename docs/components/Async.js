import React, {Component} from 'react';
import {Tabs, TabList, Tab, PanelList, AsyncPanel} from '../../src';
import {Facebook} from 'react-content-loader'
const MyFacebookLoader = () => <Facebook />

function fakeCbFetch(cb) {
  setTimeout(() => {
    cb(null, {
      content: 'hi'
    });
  }, 1500);
}

function fakePromiseFetch() {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        content: 'promise fetched'
      });
    }, 1500);
  })
}

export default class Basic extends Component {
  render() {
    return (
      <Tabs customStyle={this.props.customStyle}>
        <TabList>
          <Tab>Callback fetch</Tab>
          <Tab>Promise fetch</Tab>
          <Tab>fetch without cache</Tab>
        </TabList>
        <PanelList>
          <AsyncPanel loadContent={fakeCbFetch}
                      render={data => (<div>{JSON.stringify(data)}</div>)}
                      renderLoading={() => (<MyFacebookLoader/>)}
          />
          <AsyncPanel loadContent={fakePromiseFetch}
                      render={data => (<div>{JSON.stringify(data)}</div>)}
                      renderLoading={() => (<MyFacebookLoader />)}
          />
          <AsyncPanel loadContent={fakePromiseFetch}
                      render={data => (<div>{JSON.stringify(data)}</div>)}
                      renderLoading={() => (<MyFacebookLoader />)}
                      cache={false}
          />
        </PanelList>
      </Tabs>
    )
  }
}