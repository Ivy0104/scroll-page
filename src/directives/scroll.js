import _ from '../utils/addWheelListener';

export default {
  inserted: (el, binding) => {
    _.addWheelListener(window, binding.value);
  }
};
