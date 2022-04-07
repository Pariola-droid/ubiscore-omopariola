import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Configure Enzyme with React 16 adapter
Enzyme.configure({ adapter: new Adapter() });
window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    };
  };
