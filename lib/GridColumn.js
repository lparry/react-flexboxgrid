"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _flexboxgridDistFlexboxgridCss = require("flexboxgrid/dist/flexboxgrid.css");

var _flexboxgridDistFlexboxgridCss2 = _interopRequireDefault(_flexboxgridDistFlexboxgridCss);

var GridColumn = (function (_React$Component) {
  _inherits(GridColumn, _React$Component);

  function GridColumn() {
    _classCallCheck(this, GridColumn);

    _get(Object.getPrototypeOf(GridColumn.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(GridColumn, [{
    key: "render",
    value: function render() {
      var extraSmallClass = "";
      var smallClass = "";
      var mediumClass = "";
      var largeClass = "";
      var extraSmallOffsetClass = "";
      var smallOffsetClass = "";
      var mediumOffsetClass = "";
      var largeOffsetClass = "";

      if (this.props.xs) {
        if (this.props.xs === "auto") {
          extraSmallClass = _flexboxgridDistFlexboxgridCss2["default"]["col-xs"];
        } else {
          extraSmallClass = _flexboxgridDistFlexboxgridCss2["default"]["col-xs-" + this.props.xs];
        }
      }
      if (this.props.sm) {
        if (this.props.sm === "auto") {
          smallClass = _flexboxgridDistFlexboxgridCss2["default"]["col-sm"];
        } else {
          smallClass = _flexboxgridDistFlexboxgridCss2["default"]["col-sm-" + this.props.sm];
        }
      }
      if (this.props.md) {
        if (this.props.md === "auto") {
          mediumClass = _flexboxgridDistFlexboxgridCss2["default"]["col-md"];
        } else {
          mediumClass = _flexboxgridDistFlexboxgridCss2["default"]["col-md-" + this.props.md];
        }
      }
      if (this.props.lg) {
        if (this.props.lg === "auto") {
          largeClass = _flexboxgridDistFlexboxgridCss2["default"]["col-lg"];
        } else {
          largeClass = _flexboxgridDistFlexboxgridCss2["default"]["col-lg-" + this.props.lg];
        }
      }

      if (this.props.xsOffset) {
        extraSmallOffsetClass = _flexboxgridDistFlexboxgridCss2["default"]["col-xs-offset-" + this.props.xsOffset];
      }
      if (this.props.smOffset) {
        smallOffsetClass = _flexboxgridDistFlexboxgridCss2["default"]["col-sm-offset-" + this.props.smOffset];
      }
      if (this.props.mdOffset) {
        mediumOffsetClass = _flexboxgridDistFlexboxgridCss2["default"]["col-md-offset-" + this.props.mdOffset];
      }
      if (this.props.lgOffset) {
        largeOffsetClass = _flexboxgridDistFlexboxgridCss2["default"]["col-lg-offset-" + this.props.lgOffset];
      }

      return _react2["default"].createElement(
        "div",
        { className: (0, _classnames2["default"])(this.props.className, extraSmallClass, extraSmallOffsetClass, smallClass, smallOffsetClass, mediumClass, mediumOffsetClass, largeClass, largeOffsetClass) },
        this.props.children
      );
    }
  }], [{
    key: "propTypes",
    value: {
      xs: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
      sm: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
      md: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
      lg: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
      xsOffset: _react.PropTypes.number,
      smOffset: _react.PropTypes.number,
      mdOffset: _react.PropTypes.number,
      lgOffset: _react.PropTypes.number
    },
    enumerable: true
  }]);

  return GridColumn;
})(_react2["default"].Component);

exports["default"] = GridColumn;
module.exports = exports["default"];