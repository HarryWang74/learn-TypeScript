var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.star = function () {
        console.log('star' + this.engine);
    };
    Car.prototype.stop = function () {
        console.log('stop' + this.engine);
    };
    return Car;
}());
window.onload = function () {
    var car = new Car('v8');
    car.star();
    car.stop();
};
//# sourceMappingURL=hello.js.map