class Bird {
    constructor(x, y, w, h) {
        var options = {
            restitution : 0,
            density : 1.5
        };
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
        console.log(this.body);
    }

    display() {
        var pos = this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("red");
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();
    }
}