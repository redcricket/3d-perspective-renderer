export class Vector3D {
    private x: number;
    private y: number;
    private z: number;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    getX(): number {
        return this.x;
    }

    getY(): number {
        return this.y;
    }

    getZ(): number {
        return this.z;
    }

    setX(x: number): void {
        this.x = x;
    }

    setY(y: number): void {
        this.y = y;
    }

    setZ(z: number): void {
        this.z = z;
    }

    translate(v: Vector3D): void {
        this.x += v.getX();
        this.y += v.getY();
        this.z += v.getZ();
    }

    rotateZ(angle: number): void {
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        const x = this.x * cosA - this.y * sinA;
        const y = this.x * sinA + this.y * cosA;
        this.x = x;
        this.y = y;
    }

    rotateX(angle: number): void {
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        const y = this.y * cosA - this.z * sinA;
        const z = this.y * sinA + this.z * cosA;
        this.y = y;
        this.z = z;
    }

    rotateY(angle: number): void {
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        const x = this.x * cosA + this.z * sinA;
        const z = -this.x * sinA + this.z * cosA;
        this.x = x;
        this.z = z;
    }
    print() {
        console.log(`( ${this.x}, ${this.y} )`);
    }
}

