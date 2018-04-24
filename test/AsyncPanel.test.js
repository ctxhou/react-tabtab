import React from 'react';
import AsyncPanel from '../src/AsyncPanel';
import {mount} from 'enzyme';

function fakePromiseFetch(type, shouldRej = false) {
  if (type === 'cb') {
    return function (cb) {
      setTimeout(() => {
        if (shouldRej) {
          cb(true);
        } else {
          cb(null, {
            content: 'promise fetched'
          });
        }
      }, 0);
    }
  } else if (type === 'promise') {
    return function () {
      return new Promise((res, rej) => {
        setTimeout(() => {
          if (shouldRej) {
            rej(true);
          } else {
            res({
              content: 'promise fetched'
            });
          }
        }, 0)
      })
    }

  }
}

function makeCallback(done, body) {
  return (...args) => {
    try {
      body(...args);
      done();
    } catch (error) {
      done.fail(error);
    }
  };
}

function testByLoadType(type) {
  describe(`${type} render`, () => {
    test('render loading content', () => {
      const loadContent = fakePromiseFetch(type);
      const component = mount(
        <AsyncPanel loadContent={loadContent}
          render={data => (<div>{JSON.stringify(data)}</div>)}
          renderLoading={() => (<div>loading</div>)}
          active={true} />
      );
      expect(component.text()).toEqual('loading');
    })

    test('render content when loadContent finished, by promise', (done) => {
      const loadContent = fakePromiseFetch(type);
      const component = mount(
        <AsyncPanel loadContent={loadContent}
          render={data => (<div>{JSON.stringify(data)}</div>)}
          renderLoading={() => (<div>loading</div>)}
          active={true} />
      );
      setTimeout(makeCallback(done, () => {
        expect(component.text()).toEqual('{"content":"promise fetched"}');
      }), 10);
    })

    test('show error when loadContent has error, by promise', (done) => {
      const loadContent = fakePromiseFetch(type, true);
      const component = mount(
        <AsyncPanel loadContent={loadContent}
          render={data => (<div>{JSON.stringify(data)}</div>)}
          renderLoading={() => (<div>loading</div>)}
          active={true} />
      );
      setTimeout(makeCallback(done, () => {
        expect(component.text()).toEqual('');
      }), 10);
    })

    test('if the panel become active, load content', (done) => {
      const loadContent = fakePromiseFetch(type);
      const component = mount(
        <AsyncPanel loadContent={loadContent}
          render={data => (<div>{JSON.stringify(data)}</div>)}
          renderLoading={() => (<div>loading</div>)} />
      );
      expect(component.text()).toEqual('');
      component.setProps({active: true});
      setTimeout(makeCallback(done, () => {
        expect(component.text()).toEqual(JSON.stringify({content: 'promise fetched'}));
      }), 10);
    })

    test('if cache, should not load again', (done) => {
      const loadContent = fakePromiseFetch(type);
      const component = mount(
        <AsyncPanel loadContent={loadContent}
          render={data => (<div>{JSON.stringify(data)}</div>)}
          renderLoading={() => (<div>loading</div>)}
          active={true}/>
      );
      setTimeout(makeCallback(done, () => {
        component.setProps({active: false});
        component.setProps({active: true});
        expect(component.text()).toEqual(JSON.stringify({content: 'promise fetched'}));
      }), 10);
    });

    test('if not cache, load again', (done) => {
      const loadContent = fakePromiseFetch(type);
      const component = mount(
        <AsyncPanel loadContent={loadContent}
          render={data => (<div>{JSON.stringify(data)}</div>)}
          renderLoading={() => (<div>loading</div>)}
          active={true}
          cache={false}/>
      );
      setTimeout(makeCallback(done, () => {
        component.setProps({active: false});
        component.setProps({active: true});
        expect(component.text()).toEqual('loading');
      }), 10);
    });
  })
}

testByLoadType('promise');
testByLoadType('cb');