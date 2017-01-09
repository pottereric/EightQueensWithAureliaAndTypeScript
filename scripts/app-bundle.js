define('app',["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
            this.message = 'Hello World!';
        }
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('queen',["require", "exports"], function (require, exports) {
    "use strict";
    var Queen = (function () {
        function Queen(nextQueen, Column) {
            this.nextQueen = nextQueen;
            this.Column = Column;
            this.Row = 1;
        }
        Queen.prototype.MoveNext = function () {
            this.Row++;
        };
        Queen.prototype.CanPositionBeAttacked = function (possibleRow, possibleColumn) {
            if (this.Row == possibleRow) {
                return true;
            }
            else if (this.IsOnDiagnol(possibleRow, possibleColumn)) {
                return true;
            }
            else if (this.nextQueen != null) {
                return this.nextQueen.CanPositionBeAttacked(possibleRow, possibleColumn);
            }
            else {
                return false;
            }
        };
        Queen.prototype.IsOnDiagnol = function (possibleRow, possibleColumn) {
            var columnDiff = possibleColumn - this.Column;
            if (possibleRow - columnDiff == this.Row ||
                possibleRow + columnDiff == this.Row) {
                return true;
            }
            return false;
        };
        Queen.prototype.Solve = function () {
            if (this.nextQueen == null) {
                return true;
            }
            this.nextQueen.Solve();
            while (this.nextQueen.CanPositionBeAttacked(this.Row, this.Column) ||
                this.Row > 4) {
                this.MoveNext();
                if (this.Row > 4) {
                    this.Row = 1;
                    this.nextQueen.MoveNext();
                    this.nextQueen.Solve();
                }
            }
            return true;
        };
        return Queen;
    }());
    exports.Queen = Queen;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template><h1>${message}</h1></template>"; });
//# sourceMappingURL=app-bundle.js.map