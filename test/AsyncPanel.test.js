import React from 'react';
import AsyncPanel from '../src/AsyncPanel';
import {mount} from 'enzyme';

function fakePromiseFetch() {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        content: 'promise fetched'
      });
    }, 0)
  })

}

describe('render', () => {
  test('render loading content', () => {
    const component = mount(
      <AsyncPanel loadContent={fakePromiseFetch}
                  render={data => (<div>{JSON.stringify(data)}</div>)}
                  renderLoading={() => (<div>loading</div>)}
                  active={true} />
    );
    expect(component.text()).toEqual('loading');
  })

  test('render content when loadContent finished, by promise', (done) => {
    const component = mount(
      <AsyncPanel loadContent={fakePromiseFetch}
                  render={data => (<div>{JSON.stringify(data)}</div>)}
                  renderLoading={() => (<div>loading</div>)}
                  active={true} />
    );
    setTimeout(() => {
      expect(component.text()).toEqual('{"content":"promise fetched"}');
      done();
    }, 10);
  })

})
