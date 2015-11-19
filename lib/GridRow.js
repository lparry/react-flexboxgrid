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

var GridRow = (function (_React$Component) {
  _inherits(GridRow, _React$Component);

  function GridRow() {
    _classCallCheck(this, GridRow);

    _get(Object.getPrototypeOf(GridRow.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(GridRow, [{
    key: "render",
    value: function render() {
      var reverseClass = "";
      var xsAlignClass = "";
      var smAlignClass = "";
      var mdAlignClass = "";
      var lgAlignClass = "";
      var xsVAlignClass = "";
      var smVAlignClass = "";
      var mdVAlignClass = "";
      var lgVAlignClass = "";

      if (this.props.reverse) {
        reverseClass = _flexboxgridDistFlexboxgridCss2["default"].reverse;
      }

      if (this.props.xsAlign) {
        xsAlignClass = _flexboxgridDistFlexboxgridCss2["default"][this.props.xsAlign + "-xs"];
      }
      if (this.props.smAlign) {
        smAlignClass = _flexboxgridDistFlexboxgridCss2["default"][this.props.smAlign + "-sm"];
      }
      if (this.props.mdAlign) {
        mdAlignClass = _flexboxgridDistFlexboxgridCss2["default"][this.props.mdAlign + "-md"];
      }
      if (this.props.lgAlign) {
        lgAlignClass = _flexboxgridDistFlexboxgridCss2["default"][this.props.lgAlign + "-lg"];
      }

      if (this.props.xsVAlign) {
        xsVAlignClass = _flexboxgridDistFlexboxgridCss2["default"][this.props.xsVAlign + "-xs"];
      }
      if (this.props.smVAlign) {
        smVAlignClass = _flexboxgridDistFlexboxgridCss2["default"][this.props.smVAlign + "-sm"];
      }
      if (this.props.mdVAlign) {
        mdVAlignClass = _flexboxgridDistFlexboxgridCss2["default"][this.props.mdVAlign + "-md"];
      }
      if (this.props.lgVAlign) {
        lgVAlignClass = _flexboxgridDistFlexboxgridCss2["default"][this.props.lgVAlign + "-lg"];
      }

      return _react2["default"].createElement(
        "div",
        { className: (0, _classnames2["default"])(this.props.className, _flexboxgridDistFlexboxgridCss2["default"].row, reverseClass, xsAlignClass, smAlignClass, mdAlignClass, lgAlignClass, xsVAlignClass, smVAlignClass, mdVAlignClass, lgVAlignClass) },
        this.props.children
      );
    }
  }], [{
    key: "propTypes",
    value: {
      reverse: _react2["default"].PropTypes.bool,
      xsAlign: _react2["default"].PropTypes.string,
      smAlign: _react2["default"].PropTypes.string,
      mdAlign: _react2["default"].PropTypes.string,
      lgAlign: _react2["default"].PropTypes.string,
      xsVAlign: _react2["default"].PropTypes.string,
      smVAlign: _react2["default"].PropTypes.string,
      mdVAlign: _react2["default"].PropTypes.string,
      lgVAlign: _react2["default"].PropTypes.string
    },
    enumerable: true
  }, {
    key: "defaultProps",
    value: {
      reverse: false,
      xsAlign: null,
      smAlign: null,
      mdAlign: null,
      lgAlign: null,
      xsVAlign: null,
      smVAlign: null,
      mdVAlign: null,
      lgVAlign: null
    },
    enumerable: true
  }]);

  return GridRow;
})(_react2["default"].Component);

exports["default"] = GridRow;
module.exports = exports["default"];