'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ActiveFilter = require('../ActiveFilter/ActiveFilter');

var _ActiveFilter2 = _interopRequireDefault(_ActiveFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Sho/Desktop/reactfilter/components/ActiveFilterGroup/ActiveFilterGroup.js';


var ActiveFilterGroup = function ActiveFilterGroup(_ref) {
	var id = _ref.id,
	    name = _ref.name,
	    options = _ref.options,
	    onRemoveFilterClick = _ref.onRemoveFilterClick,
	    onClearGroupClick = _ref.onClearGroupClick;
	return _react2.default.createElement('div', {
		'data-jsx': 919544874,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}, name, ' :', options.map(function (options) {
		return _react2.default.createElement(_ActiveFilter2.default, { label: options.label, onRemoveCick: function onRemoveCick() {
				return onRemoveFilterClick;
			}, __source: {
				fileName: _jsxFileName,
				lineNumber: 8
			}
		});
	}), _react2.default.createElement('a', { onClick: onClearGroupClick, 'data-jsx': 919544874,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, 'Close Group'), _react2.default.createElement(_style2.default, {
		styleId: 919544874,
		css: 'div[data-jsx="919544874"] {width: 380px;margin: 15px;padding: 20px;border-style: solid;border-width: 1px;border-radius: 15px;border-color: blue;}a[data-jsx="919544874"] {margin-left: 15px;font-size : small;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWN0aXZlRmlsdGVyR3JvdXAvQWN0aXZlRmlsdGVyR3JvdXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU2UsQUFDUCwyQkFDUyxhQUNBLGFBQ0MsY0FDTSxvQkFDRixrQkFDRSxvQkFDRCxtQkFDbkIsQ0FFRSx5QkFDZ0Isa0JBQ0Esa0JBQ2xCIiwiZmlsZSI6ImNvbXBvbmVudHMvQWN0aXZlRmlsdGVyR3JvdXAvQWN0aXZlRmlsdGVyR3JvdXAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1Noby9EZXNrdG9wL3JlYWN0ZmlsdGVyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFjdGl2ZUZpbHRlciBmcm9tICcuLi9BY3RpdmVGaWx0ZXIvQWN0aXZlRmlsdGVyJ1xuXG5cbmNvbnN0IEFjdGl2ZUZpbHRlckdyb3VwID0gKHsgaWQsIG5hbWUsIG9wdGlvbnMsIG9uUmVtb3ZlRmlsdGVyQ2xpY2ssIG9uQ2xlYXJHcm91cENsaWNrIH0pID0+IChcblx0PGRpdj5cblx0XHR7IG5hbWUgfSA6XG5cdFx0eyBvcHRpb25zLm1hcChvcHRpb25zID0+IDxBY3RpdmVGaWx0ZXIgbGFiZWw9e29wdGlvbnMubGFiZWx9IG9uUmVtb3ZlQ2ljaz17KCkgPT4gb25SZW1vdmVGaWx0ZXJDbGlja30gLz4pIH1cblx0XHQ8YSBvbkNsaWNrPXtvbkNsZWFyR3JvdXBDbGlja30+Q2xvc2UgR3JvdXA8L2E+XG5cdFx0PHN0eWxlIGpzeD4ge2Bcblx0XHRcdGRpdiB7XG5cdFx0XHRcdHdpZHRoOiAzODBweDtcblx0XHRcdFx0bWFyZ2luOiAxNXB4O1xuXHRcdFx0XHRwYWRkaW5nOiAyMHB4O1xuXHRcdFx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xuXHRcdFx0XHRib3JkZXItd2lkdGg6IDFweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTVweDtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiBibHVlO1xuXHRcdFx0fVxuXG5cdFx0XHRhIHtcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDE1cHg7XG5cdFx0XHRcdGZvbnQtc2l6ZSA6IHNtYWxsO1xuXHRcdFx0fVxuXHRcdGB9PC9zdHlsZT5cblx0PC9kaXY+LFxuXHQ8QWN0aXZlRmlsdGVyIGxhYmVsPXsnU2Ftc3VuZyd9IC8+XG5cdClcblxuZXhwb3J0IGRlZmF1bHQgQWN0aXZlRmlsdGVyR3JvdXBcbiJdfQ== */\n/*@ sourceURL=components/ActiveFilterGroup/ActiveFilterGroup.js */'
	})), _react2.default.createElement(_ActiveFilter2.default, { label: 'Samsung', __source: {
			fileName: _jsxFileName,
			lineNumber: 27
		}
	});
};

exports.default = ActiveFilterGroup;