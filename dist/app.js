"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Person =
/*#__PURE__*/
function () {
  function Person(firstName, lastName) {
    _classCallCheck(this, Person);

    this.firstName = firstName;
    this.lastName = lastName;
  }

  _createClass(Person, [{
    key: "sayHello",
    value: function sayHello() {
      console.log("Hello ".concat(this.firstName, "  ").concat(this.lastName));
    }
  }]);

  return Person;
}();

var p = new Person("kofi", "andoh");
p.sayHello();