import { Perspective } from './Perspective/perspective';
import { Vector3D } from './Vector3D/vector3d';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const drawButton = document.getElementById('draw') as HTMLButtonElement;
const clearButton = document.getElementById('clear') as HTMLButtonElement;

const inputs = {
    rho: document.getElementById('rho') as HTMLInputElement,
    theta: document.getElementById('theta') as HTMLInputElement,
    phi: document.getElementById('phi') as HTMLInputElement,
    rotateZ: document.getElementById('rotateZ') as HTMLInputElement,
    rotateX: document.getElementById('rotateX') as HTMLInputElement,
    rotateY: document.getElementById('rotateY') as HTMLInputElement,
    TX: document.getElementById('TX') as HTMLInputElement,
    TY: document.getElementById('TY') as HTMLInputElement,
    TZ: document.getElementById('TZ') as HTMLInputElement,
    screenDist: document.getElementById('screenDist') as HTMLInputElement,
    N: document.getElementById('N') as HTMLInputElement
};

const pidiv180 = Math.atan(1) / 45;

function clearCanvas(): void {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw(): void {
    clearCanvas();

    const rho = parseFloat(inputs.rho.value);
    const theta = parseFloat(inputs.theta.value) * pidiv180;
    const phi = parseFloat(inputs.phi.value) * pidiv180;
    const rotateZ = parseFloat(inputs.rotateZ.value) * pidiv180;
    const rotateX = parseFloat(inputs.rotateX.value) * pidiv180;
    const rotateY = parseFloat(inputs.rotateY.value) * pidiv180;
    const TX = parseFloat(inputs.TX.value);
    const TY = parseFloat(inputs.TY.value);
    const TZ = parseFloat(inputs.TZ.value);
    const screenDist = parseFloat(inputs.screenDist.value);
    const N = parseInt(inputs.N.value);

    const x_center = canvas.width / 2.0;
    const y_center = canvas.height / 2.0;

    const per = new Perspective(rho, theta, phi);
    const cube: Vector3D[] = [
        new Vector3D(1, -1, -1), // 0
        new Vector3D(1, 1, -1),  // 1
        new Vector3D(-1, 1, -1), // 2
        new Vector3D(-1, -1, -1),// 3
        new Vector3D(1, -1, 1),  // 4
        new Vector3D(1, 1, 1),   // 5
        new Vector3D(-1, 1, 1),  // 6
        new Vector3D(-1, -1, 1)  // 7
    ];

    for (let i = 0; i < N; i++) {
        cube.forEach(v => v.translate(new Vector3D(TY, TX, TZ)));
        cube.forEach(v => v.rotateZ(rotateZ));
        cube.forEach(v => v.rotateX(rotateX));
        cube.forEach(v => v.rotateY(rotateY));

        let x1: number, y1: number, x2: number, y2: number;
        let x1Ref = { value: 0 }, y1Ref = { value: 0 }, x2Ref = { value: 0 }, y2Ref = { value: 0 };

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

function drawLine(x1: number, y1: number, x2: number, y2: number, screenDist: number, x_center: number, y_center: number): void {
    console.log(`drawLine( (${x1}, ${y1}), (${x2}, ${y2}) )`);
    ctx.beginPath();
    ctx.moveTo(screenDist * x1 + x_center, screenDist * y1 + y_center);
    ctx.lineTo(screenDist * x2 + x_center, screenDist * y2 + y_center);
    ctx.stroke();
}

drawButton.addEventListener('click', draw);
clearButton.addEventListener('click', clearCanvas);

