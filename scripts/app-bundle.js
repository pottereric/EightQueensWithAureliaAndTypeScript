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
                this.Row > Queen.BoardSize) {
                this.MoveNext();
                if (this.Row > Queen.BoardSize) {
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

define('app',["require", "exports", "./queen"], function (require, exports, queen_1) {
    "use strict";
    var App = (function () {
        function App() {
            this.message = '8 Queens';
            this.queens = [];
            this.boardSize = 5;
        }
        App.prototype.Solve = function () {
            queen_1.Queen.BoardSize = this.boardSize;
            this.queens = new Array(this.boardSize);
            this.queens[0] = new queen_1.Queen(null, 1);
            for (var i = 1; i < this.boardSize; i++) {
                this.queens[i] = new queen_1.Queen(this.queens[i - 1], i + 1);
            }
            this.queens[this.boardSize - 1].Solve();
        };
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

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template><h1>${message}</h1><input type=\"text\" value.bind=\"boardSize\"> <button type=\"button\" click.delegate=\"Solve()\">Solve</button><p repeat.for=\"q of queens\">${q.Column}, ${q.Row}</p></template>"; });
//# sourceMappingURL=app-bundle.js.map