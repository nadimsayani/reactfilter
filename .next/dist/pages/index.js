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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ActiveFilter = require('../components/ActiveFilter/ActiveFilter');

var _ActiveFilter2 = _interopRequireDefault(_ActiveFilter);

var _ActiveFilterGroup = require('../components/ActiveFilterGroup/ActiveFilterGroup');

var _ActiveFilterGroup2 = _interopRequireDefault(_ActiveFilterGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Sho/Desktop/reactfilter/pages/index.js?entry';


var testFilter = function (_React$Component) {
	(0, _inherits3.default)(testFilter, _React$Component);

	function testFilter() {
		(0, _classCallCheck3.default)(this, testFilter);

		return (0, _possibleConstructorReturn3.default)(this, (testFilter.__proto__ || (0, _getPrototypeOf2.default)(testFilter)).apply(this, arguments));
	}

	(0, _createClass3.default)(testFilter, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 9
				}
			}, _react2.default.createElement('br', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 10
				}
			}), _react2.default.createElement(_ActiveFilter2.default, { label: 'Samsung', __source: {
					fileName: _jsxFileName,
					lineNumber: 11
				}
			}), _react2.default.createElement('br', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 12
				}
			}), _react2.default.createElement('br', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 13
				}
			}), _react2.default.createElement(_ActiveFilterGroup2.default, { id: '123', name: 'Brand',
				options: [{ label: 'Samsung' }, { label: 'Nokia' }], __source: {
					fileName: _jsxFileName,
					lineNumber: 14
				}
			}));
		}
	}]);

	return testFilter;
}(_react2.default.Component);

exports.default = testFilter;