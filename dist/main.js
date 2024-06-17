/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Perspective/perspective.ts":
/*!************************************!*\
  !*** ./Perspective/perspective.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Perspective = void 0;
var vector3d_1 = __webpack_require__(/*! ../Vector3D/vector3d */ "./Vector3D/vector3d.ts");
var Perspective = /** @class */ (function () {
    function Perspective(rho, theta, phi) {
        this._rho = rho;
        this._theta = theta;
        this._phi = phi;
        this._v11 = -Math.sin(phi);
        this._v12 = -Math.cos(phi) * Math.cos(theta);
        this._v13 = -Math.sin(phi) * Math.cos(theta);
        this._v21 = Math.cos(phi);
        this._v22 = -Math.cos(phi) * Math.sin(theta);
        this._v23 = -Math.sin(phi) * Math.sin(theta);
        this._v32 = Math.sin(phi);
        this._v33 = -Math.cos(phi);
        this._v43 = rho;
    }
    Object.defineProperty(Perspective.prototype, "rho", {
        get: function () {
            return this._rho;
        },
        set: function (value) {
            this._rho = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perspective.prototype, "theta", {
        get: function () {
            return this._theta;
        },
        set: function (value) {
            this._theta = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perspective.prototype, "phi", {
        get: function () {
            return this._phi;
        },
        set: function (value) {
            this._phi = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perspective.prototype, "v11", {
        get: function () {
            return this._v11;
        },
        set: function (value) {
            this._v11 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perspective.prototype, "v12", {
        get: function () {
            return this._v12;
        },
        set: function (value) {
            this._v12 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perspective.prototype, "v13", {
        get: function () {
            return this._v13;
        },
        set: function (value) {
            this._v13 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perspective.prototype, "v21", {
        get: function () {
            return this._v21;
        },
        set: function (value) {
            this._v21 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perspective.prototype, "v22", {
        get: function () {
            return this._v22;
        },
        set: function (value) {
            this._v22 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perspective.prototype, "v23", {
        get: function () {
            return this._v23;
        },
        set: function (value) {
            this._v23 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perspective.prototype, "v32", {
        get: function () {
            return this._v32;
        },
        set: function (value) {
            this._v32 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perspective.prototype, "v33", {
        get: function () {
            return this._v33;
        },
        set: function (value) {
            this._v33 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perspective.prototype, "v43", {
        get: function () {
            return this._v43;
        },
        set: function (value) {
            this._v43 = value;
        },
        enumerable: false,
        configurable: true
    });
    Perspective.prototype.eyecoord = function (pw, pe) {
        var x = pw.getX();
        var y = pw.getY();
        var z = pw.getZ();
        var v11 = this.v11;
        var v12 = this.v12;
        var v13 = this.v13;
        var v21 = this.v21;
        var v22 = this.v22;
        var v23 = this.v23;
        var v32 = this.v32;
        var v33 = this.v33;
        var v43 = this.v43;
        pe.setX(v11 * x + v21 * y);
        pe.setY(v12 * x + v22 * y + v32 * z);
        pe.setZ(v13 * x + v23 * y + v33 * z + v43);
    };
    Perspective.prototype.perspective = function (p, refpx, refpy) {
        var pe = new vector3d_1.Vector3D(0.0, 0.0, 0.0);
        this.eyecoord(p, pe);
        refpx.value = pe.getX() / (1E-7 + pe.getZ());
        refpy.value = pe.getY() / (1E-7 + pe.getZ());
    };
    return Perspective;
}());
exports.Perspective = Perspective;


/***/ }),

/***/ "./Vector3D/vector3d.ts":
/*!******************************!*\
  !*** ./Vector3D/vector3d.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector3D = void 0;
var Vector3D = /** @class */ (function () {
    function Vector3D(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Vector3D.prototype.getX = function () {
        return this.x;
    };
    Vector3D.prototype.getY = function () {
        return this.y;
    };
    Vector3D.prototype.getZ = function () {
        return this.z;
    };
    Vector3D.prototype.setX = function (x) {
        this.x = x;
    };
    Vector3D.prototype.setY = function (y) {
        this.y = y;
    };
    Vector3D.prototype.setZ = function (z) {
        this.z = z;
    };
    Vector3D.prototype.translate = function (v) {
        this.x += v.getX();
        this.y += v.getY();
        this.z += v.getZ();
    };
    Vector3D.prototype.rotateZ = function (angle) {
        var cosA = Math.cos(angle);
        var sinA = Math.sin(angle);
        var x = this.x * cosA - this.y * sinA;
        var y = this.x * sinA + this.y * cosA;
        this.x = x;
        this.y = y;
    };
    Vector3D.prototype.rotateX = function (angle) {
        var cosA = Math.cos(angle);
        var sinA = Math.sin(angle);
        var y = this.y * cosA - this.z * sinA;
        var z = this.y * sinA + this.z * cosA;
        this.y = y;
        this.z = z;
    };
    Vector3D.prototype.rotateY = function (angle) {
        var cosA = Math.cos(angle);
        var sinA = Math.sin(angle);
        var x = this.x * cosA + this.z * sinA;
        var z = -this.x * sinA + this.z * cosA;
        this.x = x;
        this.z = z;
    };
    Vector3D.prototype.print = function () {
        console.log("( ".concat(this.x, ", ").concat(this.y, " )"));
    };
    return Vector3D;
}());
exports.Vector3D = Vector3D;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var perspective_1 = __webpack_require__(/*! ./Perspective/perspective */ "./Perspective/perspective.ts");
var vector3d_1 = __webpack_require__(/*! ./Vector3D/vector3d */ "./Vector3D/vector3d.ts");
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var drawButton = document.getElementById('draw');
var clearButton = document.getElementById('clear');
var inputs = {
    rho: document.getElementById('rho'),
    theta: document.getElementById('theta'),
    phi: document.getElementById('phi'),
    rotateZ: document.getElementById('rotateZ'),
    rotateX: document.getElementById('rotateX'),
    rotateY: document.getElementById('rotateY'),
    TX: document.getElementById('TX'),
    TY: document.getElementById('TY'),
    TZ: document.getElementById('TZ'),
    screenDist: document.getElementById('screenDist'),
    N: document.getElementById('N')
};
var pidiv180 = Math.atan(1) / 45;
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function draw() {
    clearCanvas();
    var rho = parseFloat(inputs.rho.value);
    var theta = parseFloat(inputs.theta.value) * pidiv180;
    var phi = parseFloat(inputs.phi.value) * pidiv180;
    var rotateZ = parseFloat(inputs.rotateZ.value) * pidiv180;
    var rotateX = parseFloat(inputs.rotateX.value) * pidiv180;
    var rotateY = parseFloat(inputs.rotateY.value) * pidiv180;
    var TX = parseFloat(inputs.TX.value);
    var TY = parseFloat(inputs.TY.value);
    var TZ = parseFloat(inputs.TZ.value);
    var screenDist = parseFloat(inputs.screenDist.value);
    var N = parseInt(inputs.N.value);
    var x_center = canvas.width / 2.0;
    var y_center = canvas.height / 2.0;
    var per = new perspective_1.Perspective(rho, theta, phi);
    var cube = [
        new vector3d_1.Vector3D(1, -1, -1), // 0
        new vector3d_1.Vector3D(1, 1, -1), // 1
        new vector3d_1.Vector3D(-1, 1, -1), // 2
        new vector3d_1.Vector3D(-1, -1, -1), // 3
        new vector3d_1.Vector3D(1, -1, 1), // 4
        new vector3d_1.Vector3D(1, 1, 1), // 5
        new vector3d_1.Vector3D(-1, 1, 1), // 6
        new vector3d_1.Vector3D(-1, -1, 1) // 7
    ];
    for (var i = 0; i < N; i++) {
        cube.forEach(function (v) { return v.translate(new vector3d_1.Vector3D(TY, TX, TZ)); });
        cube.forEach(function (v) { return v.rotateZ(rotateZ); });
        cube.forEach(function (v) { return v.rotateX(rotateX); });
        cube.forEach(function (v) { return v.rotateY(rotateY); });
        var x1 = void 0, y1 = void 0, x2 = void 0, y2 = void 0;
        var x1Ref = { value: 0 }, y1Ref = { value: 0 }, x2Ref = { value: 0 }, y2Ref = { value: 0 };
        per.perspective(cube[0], x1Ref, y1Ref);
        per.perspective(cube[1], x2Ref, y2Ref);
        drawLine(x1Ref.value, y1Ref.value, x2Ref.value, y2Ref.value, screenDist, x_center, y_center);
        per.perspective(cube[1], x1Ref, y1Ref);
        per.perspective(cube[2], x2Ref, y2Ref);
        drawLine(x1Ref.value, y1Ref.value, x2Ref.value, y2Ref.value, screenDist, x_center, y_center);
        per.perspective(cube[2], x1Ref, y1Ref);
        per.perspective(cube[3], x2Ref, y2Ref);
        drawLine(x1Ref.value, y1Ref.value, x2Ref.value, y2Ref.value, screenDist, x_center, y_center);
        per.perspective(cube[3], x1Ref, y1Ref);
        per.perspective(cube[0], x2Ref, y2Ref);
        drawLine(x1Ref.value, y1Ref.value, x2Ref.value, y2Ref.value, screenDist, x_center, y_center);
        per.perspective(cube[0], x1Ref, y1Ref);
        per.perspective(cube[4], x2Ref, y2Ref);
        drawLine(x1Ref.value, y1Ref.value, x2Ref.value, y2Ref.value, screenDist, x_center, y_center);
        per.perspective(cube[4], x1Ref, y1Ref);
        per.perspective(cube[5], x2Ref, y2Ref);
        drawLine(x1Ref.value, y1Ref.value, x2Ref.value, y2Ref.value, screenDist, x_center, y_center);
        per.perspective(cube[5], x1Ref, y1Ref);
        per.perspective(cube[1], x2Ref, y2Ref);
        drawLine(x1Ref.value, y1Ref.value, x2Ref.value, y2Ref.value, screenDist, x_center, y_center);
        per.perspective(cube[5], x1Ref, y1Ref);
        per.perspective(cube[6], x2Ref, y2Ref);
        drawLine(x1Ref.value, y1Ref.value, x2Ref.value, y2Ref.value, screenDist, x_center, y_center);
        per.perspective(cube[2], x1Ref, y1Ref);
        per.perspective(cube[6], x2Ref, y2Ref);
        drawLine(x1Ref.value, y1Ref.value, x2Ref.value, y2Ref.value, screenDist, x_center, y_center);
        per.perspective(cube[6], x1Ref, y1Ref);
        per.perspective(cube[7], x2Ref, y2Ref);
        drawLine(x1Ref.value, y1Ref.value, x2Ref.value, y2Ref.value, screenDist, x_center, y_center);
        per.perspective(cube[3], x1Ref, y1Ref);
        per.perspective(cube[7], x2Ref, y2Ref);
        drawLine(x1Ref.value, y1Ref.value, x2Ref.value, y2Ref.value, screenDist, x_center, y_center);
        per.perspective(cube[7], x1Ref, y1Ref);
        per.perspective(cube[4], x2Ref, y2Ref);
        drawLine(x1Ref.value, y1Ref.value, x2Ref.value, y2Ref.value, screenDist, x_center, y_center);
    }
}
function drawLine(x1, y1, x2, y2, screenDist, x_center, y_center) {
    console.log("drawLine( (".concat(x1, ", ").concat(y1, "), (").concat(x2, ", ").concat(y2, ") )"));
    ctx.beginPath();
    ctx.moveTo(screenDist * x1 + x_center, screenDist * y1 + y_center);
    ctx.lineTo(screenDist * x2 + x_center, screenDist * y2 + y_center);
    ctx.stroke();
}
drawButton.addEventListener('click', draw);
clearButton.addEventListener('click', clearCanvas);

})();

/******/ })()
;
//# sourceMappingURL=main.js.map