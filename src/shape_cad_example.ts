/**
 * ShapeCAD - A CAD application for designing shapes.
 * Example program demonstrating SOLID, DRY, KISS design principals
 * and the DDD, ES and CQRS design patterns
 */

// ******************* base shape requirements ******************* 
interface I2DShape {
    area(): number;
}

interface I3DShape extends I2DShape {
    volume(): number;
}

// ******************* 2 dimensional shapes **********************
interface ISquare extends I2DShape {
    height: number;
}

interface ICircle extends I2DShape {
    radius: number;
}

// ******************* 3 dimensional shapes **********************
interface ICube extends I3DShape, ISquare { }

interface ICylinder extends I3DShape, ICircle {
    length: number;
}

// ******************* Type Definitions **************************

/**
 * Defines all properies for a Square
 */
class Square implements ISquare {

    height: number;

    constructor(height: number) {
        this.height = height;
    }

    // overriding super class method / implementing interface method
    area(): number {
        return Math.pow(this.height, 2);
    }

    // S - Single Responsibility Principal
    // The following code would break the single responsibility principal.

    // height: number;
    // radius: number;

    // constructor(height: number, radius: number) {
    //     this.height = height;
    //     this.radius = radius;
    // }

    // areaSquare(): number {
    //     return this.height ^ 2;
    // }

    // areaCircle(): number {
    //     return this.height ^ 2;
    // }

    // Our Square class is now responsible for defining all the properties 
    // for a Square AND a Circle.

}

/**
 * Defines all properties of a cube
 */
class Cube extends Square implements ICube {

    public volume(): number {
        return Math.pow(this.height, 3);
    }

    // example of overriding a method that would break LSP. Refer to 
    // Shape CAD class for further details.
    // public area(): string {
    //     return (this.height ^ 2).toString();
    // }
}

/** 
 * Defines all properies for a Circle
 */
class Circle implements ICircle {

    // I - Interface Segregation Principal Example
    // Implementing interface I3DShape as opposed to ICircle here would break ISP
    // as a Circle would not use the volume method defined
    // class Circle implements I3DShape {

    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    area(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

}

/**
 * Defines all properies for a Cylinder
 */
class Cylinder extends Circle implements ICylinder {

    length: number;

    constructor(radius: number, length: number) {
        super(radius);
        this.length = length;
    }

    volume(): number {
        // DRY Design Principal Example
        // We have repeated ourself here in that we have performed the area
        // calculation of a circle again.
        // return Math.PI * (this.radius ^ 2) * this.length;
        // a better approach is to call the super class's area method so there
        // is one single unambigous location performing this operation.
        return this.area() * this.length;
    }
}

/**
 * Defines mathematical operations that can be performed on Shapes.
 */
module ShapeMathOperations {

    export function calculateAreas(shapes: Array<I2DShape>): Array<number> {

        let areas: Array<number> = [];

        // of iterates over objects
        // in iterates over keys... e.g. [0, 1, 2, ...]
        for (let shape of shapes) {
            // O - Open/Closed Principal Example 
            // the following code is not open for extension / additional functionality...
            // i.e. what if we want to add a new shape, e.g. a Triangle here.
            // the code is also not Closed for modification. i.e. every time a new shape
            // needs to be added, an update to the code will need to be performed.
            // let area: number = 0;
            // if (shape instanceof Square) {
            //     area = shape.height ^ 2;
            // } else if (shape instanceof Circle) {
            //     area = Math.PI * (shape.radius ^ 2);
            // } 
            // areas.push(area);
            areas.push(shape.area());
        }

        return areas;
    }

}

/**
 * factory constructor for all low level modules in application
 */
module ShapeFactory {

    export function getSquare(height: number): ISquare {
        return new Square(height);
    }

    export function getCircle(radius: number): ICircle {
        return new Circle(radius);
    }

    export function getCube(height: number): ICube {
        return new Cube(height);
    }
}

/**
 * Root class for CAD application - Responsible for starting app
 */
class ShapeCAD {

    init(): void {
        // create some shapes
        let shapes: Array<I2DShape> = [];

        // L - Liskov Substitution Principal Example
        // Replacing the Type Square with SubType Cube currently adheres to LSP and does
        // not break the functionality of the application. However, if the area method in 
        // Cube was overwritten to return a new data type or not calculate area anymore then
        // it would break LSP.
        //
        // D - Dependancy Inversion Principal Example
        // The code below currently breaks DIP because the high level function init depends
        // on the low level modules Cube and Circle. To fix this we must depend on abstractions
        // i.e. interfaces and factories instead.
        //
        // let shape1: Square = new Square(10);
        // let shape1: Cube = new Cube(10);
        // let shape2: Circle = new Circle(10);
        let shape1: I2DShape = ShapeFactory.getSquare(10);
        let shape2: I2DShape = ShapeFactory.getCircle(10);
        shapes.push(shape1);
        shapes.push(shape2);
        // perform operations on shapes
        let areas: Array<number> = ShapeMathOperations.calculateAreas(shapes);
        console.log(areas);
    }

}

var shapeCAD: ShapeCAD = new ShapeCAD();
shapeCAD.init();

// export all classes so they can be "imported" in other files
export default {
    Square, Circle, ShapeMathOperations, ShapeCAD
}