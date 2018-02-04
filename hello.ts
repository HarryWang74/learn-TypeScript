class Car{
  engine: string;

  constructor(engine: string){
    this.engine = engine;
  }

  star(){
    console.log('star' + this.engine);
  }

  stop(){
    console.log('stop' + this.engine);
  }
}

window.onload = function(){
  var car = new Car('v8');
  car.star();
  car.stop();
}
