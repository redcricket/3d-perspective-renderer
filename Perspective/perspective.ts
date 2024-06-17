import { Vector3D } from '../Vector3D/vector3d';

export class Perspective {
    private _rho: number;
    private _theta: number;
    private _phi: number;
    private _v11: number;
    private _v12: number;
    private _v13: number;
    private _v21: number;
    private _v22: number;
    private _v23: number;
    private _v32: number;
    private _v33: number;
    private _v43: number;

    constructor(rho: number, theta: number, phi: number) {
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

    get rho(): number {
        return this._rho;
    }

    set rho(value: number) {
        this._rho = value;
    }

    get theta(): number {
        return this._theta;
    }

    set theta(value: number) {
        this._theta = value;
    }

    get phi(): number {
        return this._phi;
    }

    set phi(value: number) {
        this._phi = value;
    }

    get v11(): number {
        return this._v11;
    }

    get v12(): number {
        return this._v12;
    }

    get v13(): number {
        return this._v13;
    }

    get v21(): number {
        return this._v21;
    }

    get v22(): number {
        return this._v22;
    }

    get v23(): number {
        return this._v23;
    }

    get v32(): number {
        return this._v32;
    }

    get v33(): number {
        return this._v33;
    }

    get v43(): number {
        return this._v43;
    }

    set v11(value: number) {
        this._v11 = value;
    }

    set v12(value: number) {
        this._v12 = value;
    }

    set v13(value: number) {
        this._v13 = value;
    }

    set v21(value: number) {
        this._v21 = value;
    }

    set v22(value: number) {
        this._v22 = value;
    }

    set v23(value: number) {
        this._v23 = value;
    }

    set v32(value: number) {
        this._v32 = value;
    }

    set v33(value: number) {
        this._v33 = value;
    }

    set v43(value: number) {
        this._v43 = value;
    }

    eyecoord(pw: Vector3D, pe: Vector3D): void {
        const x = pw.getX();
        const y = pw.getY();
        const z = pw.getZ();
        const v11 = this.v11;
        const v12 = this.v12;
        const v13 = this.v13;
        const v21 = this.v21;
        const v22 = this.v22;
        const v23 = this.v23;
        const v32 = this.v32;
        const v33 = this.v33;
        const v43 = this.v43;

        pe.setX(v11 * x + v21 * y);
        pe.setY(v12 * x + v22 * y + v32 * z);
        pe.setZ(v13 * x + v23 * y + v33 * z + v43);
    }

    perspective(p: Vector3D, refpx: { value: number }, refpy: { value: number }): void {
        const pe = new Vector3D(0.0, 0.0, 0.0);

        this.eyecoord(p, pe);
        refpx.value = pe.getX() / (1E-7 + pe.getZ());
        refpy.value = pe.getY() / (1E-7 + pe.getZ());
    }
}

