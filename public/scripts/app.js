'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    _createClass(IndecisionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(option) {
            this.setState(function (prevState) {
                return { options: prevState.options.filter(function (item) {
                        return item !== option;
                    }) };
            });
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter valid item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This item is already present';
            }

            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            alert(option);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                console.log('Fetching data!');
                var json = localStorage.getItem('options');
                if (json) {
                    this.setState(function () {
                        return { options: JSON.parse(json) };
                    });
                }
            } catch (error) {
                // Do nothing
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                console.log('saving data');
                localStorage.setItem('options', JSON.stringify(this.state.options));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var subtitle = 'Put your life in the hands of a computer';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length === 0 ? false : true,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: props.options
        };
        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        return _this;
    }

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'Indecision App'
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePick,
                disabled: !props.hasOptions
            },
            'What should I do?'
        )
    );
};

var Options = function (_React$Component2) {
    _inherits(Options, _React$Component2);

    function Options(props) {
        _classCallCheck(this, Options);

        var _this2 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

        _this2.handleRemoveAll = _this2.handleRemoveAll.bind(_this2);
        return _this2;
    }

    _createClass(Options, [{
        key: 'handleRemoveAll',
        value: function handleRemoveAll() {
            console.log(this.props.options);
            this.props.handleDeleteOptions();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return React.createElement(
                'div',
                null,
                this.props.options.length === 0 && React.createElement(
                    'p',
                    null,
                    'Please Enter some options '
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleRemoveAll },
                    'Remove All'
                ),
                this.props.options.map(function (option) {
                    return React.createElement(Option, {
                        key: option,
                        option: option,
                        handleDeleteOption: _this3.props.handleDeleteOption
                    });
                })
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            props.option
        ),
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    props.handleDeleteOption(props.option);
                }
            },
            'remove'
        )
    );
};

var AddOption = function (_React$Component3) {
    _inherits(AddOption, _React$Component3);

    _createClass(AddOption, [{
        key: 'handleFormSubmit',
        value: function handleFormSubmit(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();

            var error = this.props.handleAddOption(option);
            if (!error) {
                e.target.elements.option.value = '';
            }

            this.setState(function () {
                return { error: error };
            });
        }
    }]);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this4 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this4.handleFormSubmit = _this4.handleFormSubmit.bind(_this4);
        _this4.state = {
            error: undefined
        };
        return _this4;
    }

    _createClass(AddOption, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleFormSubmit },
                    React.createElement('input', { type: 'text', placeholder: 'Enter Option', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, { options: ['one'] }), document.getElementById('app'));
