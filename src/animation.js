import { gsap } from 'gsap';

export function startAnimation(isMobile) {
    let width, height, canvas, ctx, points, target, animateHeader = true;

    // Main
    initHeader();
    initAnimation();

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = { x: width / 2, y: (height / 2)};

        canvas = document.getElementById('canvas');
        if (!canvas) return; // Safety check
        
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create points
        points = [];
        for (let x = 0; x < width; x = x + width / 20) {
            for (let y = 0; y < height; y = y + height / 20) {
                let px = x + Math.random() * width / 20;
                let py = y + Math.random() * height / 20;
                let p = { x: px, originX: px, y: py, originY: py };
                points.push(p);
            }
        }

        // for each point find the 5 closest points
        for (let i = 0; i < points.length; i++) {
            let closest = [];
            let p1 = points[i];
            for (let j = 0; j < points.length; j++) {
                let p2 = points[j];
                if (!(p1 == p2)) {
                    let placed = false;
                    for (let k = 0; k < 5; k++) {
                        if (!placed) {
                            if (closest[k] == undefined) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }

                    for (let k = 0; k < 5; k++) {
                        if (!placed) {
                            if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }
                }
            }
            p1.closest = closest;
        }

        // assign a circle to each point
        for (let i in points) {
            let c = new Circle(points[i], 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
            points[i].circle = c;
        }

    }

    function animate() {
        if (animateHeader) {
            ctx.clearRect(0, 0, width, height);
            const multiply = 1.8;
            for (let i in points) {
                // detect points in range
                if (Math.abs(getDistance(target, points[i])) < (isMobile ? 8000 : 40000) * multiply) {
                    points[i].active = 0.3;
                    points[i].circle.active = 0.6;
                } else if (Math.abs(getDistance(target, points[i])) < (isMobile ? 20000 : 100000) * multiply) {
                    points[i].active = 0.1;
                    points[i].circle.active = 0.3;
                } else if (Math.abs(getDistance(target, points[i])) < (isMobile ? 8000 : 40000) * multiply) {
                    points[i].active = 0.02;
                    points[i].circle.active = 0.1;
                } else {
                    points[i].active = 0;
                    points[i].circle.active = 0;
                }

                drawLines(points[i]);
                points[i].circle.draw();
            }
        }
        requestAnimationFrame(animate);
    }

    function initAnimation() {
        animate();
        for (let i in points) {
            shiftPoint(points[i]);
        }
    }

    function shiftPoint(p) {
        gsap.to(p, {
            duration: 1 + Math.random(),
            x: p.originX - 50 + Math.random() * 100,
            y: p.originY - 50 + Math.random() * 100,
            ease: "circ.inOut",
            onComplete: function() {
                shiftPoint(p);
            }
        });
    }

    function drawLines(p) {
        if (!p.active) return;
        for (let i in p.closest) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.closest[i].x, p.closest[i].y);
            ctx.strokeStyle = 'rgba(156,217,249,' + p.active + ')';
            ctx.stroke();
        }
    }

    function Circle(pos, rad, color) {
        this.pos = pos || null;
        this.radius = rad || null;
        this.color = color || null;

        this.draw = function() {
            if (!this.active) return;
            ctx.beginPath();
            ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(156,217,249,' + this.active + ')';
            ctx.fill();
        };
    }

    function getDistance(p1, p2) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }
}