'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Sho/Desktop/reactfilter/components/ActiveFilter/ActiveFilter.js';


var ActiveFilter = function (_React$Component) {
  (0, _inherits3.default)(ActiveFilter, _React$Component);

  function ActiveFilter(props) {
    (0, _classCallCheck3.default)(this, ActiveFilter);

    return (0, _possibleConstructorReturn3.default)(this, (ActiveFilter.__proto__ || (0, _getPrototypeOf2.default)(ActiveFilter)).call(this, props));
    // this.onRemoveClick = this.onRemoveClick.bind(this);
  }

  // let onRemoveClick = (e) => {
  //   console.log(e)
  //   this.target.remove()
  // }

  (0, _createClass3.default)(ActiveFilter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        'data-jsx': 2947172100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, this.props.label, _react2.default.createElement('a', {
        'data-jsx': 2947172100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, '// onClick=', onRemoveClick, '> Close'), _react2.default.createElement(_style2.default, {
        styleId: 2947172100,
        css: 'div[data-jsx="2947172100"] {display: inline;width: 200px;margin: 5px;padding: 10px;border-style: solid;border-width: 1px;border-radius: 15px;border-color: red;}a[data-jsx="2947172100"] {margin-left: 15px;font-size : small;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWN0aXZlRmlsdGVyL0FjdGl2ZUZpbHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQnNCLEFBQ0wsNEJBQ2EsZ0JBQ0gsYUFDRCxZQUNFLGNBQ00sb0JBQ0Ysa0JBQ0Usb0JBQ0Ysa0JBQ25CLENBRUUsMEJBQ2lCLGtCQUNBLGtCQUNuQiIsImZpbGUiOiJjb21wb25lbnRzL0FjdGl2ZUZpbHRlci9BY3RpdmVGaWx0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1Noby9EZXNrdG9wL3JlYWN0ZmlsdGVyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aXZlRmlsdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICAvLyB0aGlzLm9uUmVtb3ZlQ2xpY2sgPSB0aGlzLm9uUmVtb3ZlQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vIGxldCBvblJlbW92ZUNsaWNrID0gKGUpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZyhlKVxuICAvLyAgIHRoaXMudGFyZ2V0LnJlbW92ZSgpXG4gIC8vIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmxhYmVsfVxuICAgICAgICAgIDxhPlxuICAgICAgICAgICAgLy8gb25DbGljaz17b25SZW1vdmVDbGlja30+XG4gICAgICAgICAgICBDbG9zZTwvYT5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHJlZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgICBmb250LXNpemUgOiBzbWFsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXHQvL0FjdGl2ZUZpbHRlci5wcm9wVHlwZXMgPSB7XG5cdC8vXHRsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHQvL1x0b25SZW1vdmVDaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG5cdC8vfVxuIl19 */\n/*@ sourceURL=components/ActiveFilter/ActiveFilter.js */'
      }));
    }
  }]);

  return ActiveFilter;
}(_react2.default.Component);

//ActiveFilter.propTypes = {
//	label: PropTypes.string.isRequired,
//	onRemoveCick: PropTypes.func.isRequired
//}


exports.default = ActiveFilter;