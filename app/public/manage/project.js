"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactApp = function (_React$Component) {
  _inherits(ReactApp, _React$Component);

  function ReactApp(props) {
    _classCallCheck(this, ReactApp);

    var _this = _possibleConstructorReturn(this, (ReactApp.__proto__ || Object.getPrototypeOf(ReactApp)).call(this, props));

    _this.state = {
      user_email: 'hello@example.com',
      progress: 44
    };
    self.p1_material_object = null;
    return _this;
  }

  _createClass(ReactApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var self = this;
      var user = self.props.firebase.auth().currentUser;
      if (user != null) {
        user.providerData.forEach(function (profile) {
          console.log("Sign-in provider: " + profile.providerId);
          console.log("  Provider-specific UID: " + profile.uid);
          console.log("  Name: " + profile.displayName);
          console.log("  Email: " + profile.email);
          console.log("  Photo URL: " + profile.photoURL);

          self.setState({
            user_email: profile.email
          });
        });
      } else {
        console.log('no user :(');
      }

      // After material design initializes, we save the reference
      self.p1.addEventListener('mdl-componentupgraded', function () {
        self.p1_material_object = this.MaterialProgress;
        self.p1_material_object.setProgress(self.state.progress);
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var self = this;
      if (self.p1_material_object) {
        self.p1_material_object.setProgress(self.state.progress);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var self = this;

      return React.createElement(
        "div",
        { className: "demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header" },
        React.createElement(
          "header",
          { className: "demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600" },
          React.createElement(
            "div",
            { className: "mdl-layout__header-row" },
            React.createElement(
              "span",
              { className: "mdl-layout-title" },
              "Project Management Tool"
            ),
            React.createElement("div", { className: "mdl-layout-spacer" }),
            React.createElement(
              "div",
              { className: "mdl-textfield mdl-js-textfield mdl-textfield--expandable" },
              React.createElement(
                "label",
                { className: "mdl-button mdl-js-button mdl-button--icon", htmlFor: "search" },
                React.createElement(
                  "i",
                  { className: "material-icons" },
                  "search"
                )
              ),
              React.createElement(
                "div",
                { className: "mdl-textfield__expandable-holder" },
                React.createElement("input", { className: "mdl-textfield__input", type: "text", id: "search" }),
                React.createElement(
                  "label",
                  { className: "mdl-textfield__label", htmlFor: "search" },
                  "Enter your query..."
                )
              )
            ),
            React.createElement(
              "button",
              { className: "mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon", id: "hdrbtn" },
              React.createElement(
                "i",
                { className: "material-icons" },
                "more_vert"
              )
            ),
            React.createElement(
              "ul",
              { className: "mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right", htmlFor: "hdrbtn" },
              React.createElement(
                "li",
                { className: "mdl-menu__item" },
                "About"
              ),
              React.createElement(
                "li",
                { className: "mdl-menu__item" },
                "Contact"
              ),
              React.createElement(
                "li",
                { className: "mdl-menu__item" },
                "Legal information"
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50" },
          React.createElement(
            "header",
            { className: "demo-drawer-header" },
            React.createElement("img", { src: "/images/user.jpg", className: "demo-avatar" }),
            React.createElement(
              "div",
              { className: "demo-avatar-dropdown" },
              React.createElement(
                "span",
                null,
                this.state.user_email
              ),
              React.createElement("div", { className: "mdl-layout-spacer" }),
              React.createElement(
                "button",
                { id: "accbtn", className: "mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" },
                React.createElement(
                  "i",
                  { className: "material-icons", role: "presentation" },
                  "arrow_drop_down"
                ),
                React.createElement(
                  "span",
                  { className: "visuallyhidden" },
                  "Accounts"
                )
              ),
              React.createElement(
                "ul",
                { className: "mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect", htmlFor: "accbtn" },
                React.createElement(
                  "li",
                  { className: "mdl-menu__item" },
                  "hello@example.com"
                ),
                React.createElement(
                  "li",
                  { className: "mdl-menu__item" },
                  "info@example.com"
                ),
                React.createElement(
                  "li",
                  { className: "mdl-menu__item" },
                  React.createElement(
                    "i",
                    { className: "material-icons" },
                    "add"
                  ),
                  "Add another account..."
                )
              )
            )
          ),
          React.createElement(
            "nav",
            { className: "demo-navigation mdl-navigation mdl-color--blue-grey-800" },
            React.createElement(
              "a",
              { className: "mdl-navigation__link", href: "" },
              React.createElement(
                "i",
                { className: "mdl-color-text--blue-grey-400 material-icons", role: "presentation" },
                "home"
              ),
              "Home"
            ),
            React.createElement(
              "a",
              { className: "mdl-navigation__link", href: "/manage" },
              React.createElement(
                "i",
                { className: "mdl-color-text--blue-grey-400 material-icons", role: "presentation" },
                "inbox"
              ),
              "Projects"
            ),
            React.createElement(
              "a",
              { className: "mdl-navigation__link", href: "/chat" },
              React.createElement(
                "i",
                { className: "mdl-color-text--blue-grey-400 material-icons", role: "presentation" },
                "chat"
              ),
              "Chat"
            ),
            React.createElement(
              "a",
              { className: "mdl-navigation__link", href: "/issues" },
              React.createElement(
                "i",
                { className: "mdl-color-text--blue-grey-400 material-icons", role: "presentation" },
                "inbox"
              ),
              "Issues"
            ),
            React.createElement(
              "a",
              { className: "mdl-navigation__link", href: "" },
              React.createElement(
                "i",
                { className: "mdl-color-text--blue-grey-400 material-icons", role: "presentation" },
                "people"
              ),
              "Admin"
            ),
            React.createElement("div", { className: "mdl-layout-spacer" }),
            React.createElement(
              "a",
              { className: "mdl-navigation__link", href: "" },
              React.createElement(
                "i",
                { className: "mdl-color-text--blue-grey-400 material-icons", role: "presentation" },
                "help_outline"
              ),
              React.createElement(
                "span",
                { className: "visuallyhidden" },
                "Help"
              )
            )
          )
        ),
        React.createElement(
          "main",
          { className: "mdl-layout__content mdl-color--grey-100" },
          React.createElement(
            "div",
            { className: "demo-graphs mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col" },
            React.createElement(
              "button",
              { className: "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" },
              "Add Project"
            ),
            React.createElement(
              "button",
              { className: "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" },
              "Delete Project"
            ),
            React.createElement(
              "table",
              { className: "mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp" },
              React.createElement(
                "thead",
                null,
                React.createElement(
                  "tr",
                  null,
                  React.createElement(
                    "th",
                    { className: "mdl-data-table__cell--non-numeric" },
                    "Project"
                  ),
                  React.createElement(
                    "th",
                    null,
                    "Start Date"
                  ),
                  React.createElement(
                    "th",
                    null,
                    "End Date"
                  ),
                  React.createElement(
                    "th",
                    null,
                    "Status"
                  ),
                  React.createElement(
                    "th",
                    null,
                    "Progress"
                  )
                )
              ),
              React.createElement(
                "tbody",
                null,
                React.createElement(
                  "tr",
                  null,
                  React.createElement(
                    "td",
                    { className: "mdl-data-table__cell--non-numeric" },
                    "Project 1"
                  ),
                  React.createElement(
                    "td",
                    null,
                    "tbd"
                  ),
                  React.createElement(
                    "td",
                    null,
                    "tbd"
                  ),
                  React.createElement(
                    "td",
                    null,
                    "Not Started"
                  ),
                  React.createElement(
                    "td",
                    null,
                    "10%"
                  )
                ),
                React.createElement(
                  "tr",
                  null,
                  React.createElement(
                    "td",
                    { className: "mdl-data-table__cell--non-numeric" },
                    "Project 2"
                  ),
                  React.createElement(
                    "td",
                    null,
                    "1/1/2017"
                  ),
                  React.createElement(
                    "td",
                    null,
                    "tbd"
                  ),
                  React.createElement(
                    "td",
                    null,
                    "Not Started"
                  ),
                  React.createElement(
                    "td",
                    null,
                    "tbd"
                  )
                ),
                React.createElement(
                  "tr",
                  null,
                  React.createElement(
                    "td",
                    { className: "mdl-data-table__cell--non-numeric" },
                    "Project 3"
                  ),
                  React.createElement(
                    "td",
                    null,
                    "2/1/2017"
                  ),
                  React.createElement(
                    "td",
                    null,
                    "tbd"
                  ),
                  React.createElement(
                    "td",
                    null,
                    "Not Started"
                  ),
                  React.createElement(
                    "td",
                    null,
                    "tbd"
                  )
                ),
                React.createElement(
                  "tr",
                  null,
                  React.createElement(
                    "td",
                    { className: "mdl-data-table__cell--non-numeric" },
                    "Project 4"
                  ),
                  React.createElement(
                    "td",
                    null,
                    "tbd"
                  ),
                  React.createElement(
                    "td",
                    null,
                    "tbd"
                  ),
                  React.createElement(
                    "td",
                    null,
                    "Not Started"
                  ),
                  React.createElement(
                    "td",
                    null,
                    "tbd"
                  )
                )
              )
            ),
            React.createElement(
              "h4",
              null,
              "Project 1"
            ),
            React.createElement(
              "p",
              null,
              "Progress:"
            ),
            React.createElement("div", { ref: function ref(_ref) {
                return _this2.p1 = _ref;
              }, className: "mdl-progress mdl-js-progress" }),
            React.createElement(
              "table",
              { className: "mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp" },
              React.createElement(
                "thead",
                null,
                React.createElement(
                  "tr",
                  null,
                  React.createElement(
                    "th",
                    { className: "mdl-data-table__cell--non-numeric" },
                    "Task"
                  ),
                  React.createElement(
                    "th",
                    null,
                    "Status"
                  )
                )
              ),
              React.createElement(
                "tbody",
                null,
                React.createElement(
                  "tr",
                  null,
                  React.createElement(
                    "td",
                    { className: "mdl-data-table__cell--non-numeric" },
                    "Create UI"
                  ),
                  React.createElement(
                    "td",
                    null,
                    "Completed"
                  )
                ),
                React.createElement(
                  "tr",
                  null,
                  React.createElement(
                    "td",
                    { className: "mdl-data-table__cell--non-numeric" },
                    "Write Code"
                  ),
                  React.createElement(
                    "td",
                    null,
                    "Completed"
                  )
                ),
                React.createElement(
                  "tr",
                  null,
                  React.createElement(
                    "td",
                    { className: "mdl-data-table__cell--non-numeric" },
                    "User Testing"
                  ),
                  React.createElement(
                    "td",
                    null,
                    "Not Started"
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ReactApp;
}(React.Component);

//# sourceMappingURL=project.js.map