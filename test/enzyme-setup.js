import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.cancelAnimationFrame = (cb) => {
  setTimeout(cb, 0)
}

// Fail tests on any warning
console.error = message => {
  throw new Error(message);
};

