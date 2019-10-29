(function addListener(window, document) {
  let prefix = '';
  let _addEventListener = null;
  let support = '';

  // 检测事件模型
  if (window.addEventListener) {
    _addEventListener = 'addEventListener';
  } else {
    _addEventListener = 'attachEvent';
    prefix = 'on';
  }

  // 检测wheel事件能否被支持

  const notModernSupport =
    document.onmousewheel === undefined ? 'DOMMouseScroll' : 'mousewheel';
  support =
    'onwheel' in document.createElement('div') ? 'wheel' : notModernSupport;

  const _addWheelListener = ({ elem, eventName, callback, useCapture }) => {
    elem[_addEventListener](
      prefix + eventName,
      support === 'wheel'
        ? callback
        : oEvent => {
          const originalEvent = oEvent || window.event;

            // 创建统一的事件对象
          const event = {
              // 保留对原事件对象的引用
            originalEvent,
            target: originalEvent.target || originalEvent.srcElement,
            type: 'wheel',
            deltaMode: originalEvent.type === 'MozMousePixelScroll' ? 0 : 1,
            deltaX: 0,
            deltaZ: 0,
            preventDefault() {
              originalEvent.preventDefault
                  ? originalEvent.preventDefault()
                  : originalEvent.returnValue = false;
            }
          };

            // calculate deltaY (and deltaX) according to the event
          if (support === 'mousewheel') {
            event.deltaY = -1 / 40 * originalEvent.wheelDelta;
              // Webkit also support wheelDeltaX
            originalEvent.wheelDeltaX &&
                (event.deltaX = -1 / 40 * originalEvent.wheelDeltaX);
          } else {
            event.deltaY = originalEvent.detailY;
          }

            // 将重写后的事件对象作为参数传递给回调函数并返回
          return callback(event);
        },
      useCapture || false
    );
  };

  const addWheelListener = function(ele, callback, useCapture) {
    _addWheelListener({ elem: ele, eventName: support, callback, useCapture });

    // 旧版本Firefox使用MozMousePixelScroll
    if (support === 'DOMMouseScroll') {
      _addWheelListener({
        elem: ele,
        eventName: 'MozMousePixelScroll',
        callback,
        useCapture
      });
    }
  };

  module.exports = {
    addWheelListener
  };
})(window, document);
