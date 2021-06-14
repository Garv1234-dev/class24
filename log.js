class Log {
    constructor(x, y, w, h,angle) {
        var options = {
            restitution : 0,
            friction:1,
            density:1.2
        };
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
        Matter.Body.setAngle(this.body,angle);
        console.log(this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        rect(0, 0, this.width, this.height);
        pop();
    }
}