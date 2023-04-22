let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}


const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8Memory0 = null;

function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}
/**
*/
export const Direction = Object.freeze({ UP:0,"0":"UP",DOWN:1,"1":"DOWN",LEFT:2,"2":"LEFT",RIGHT:3,"3":"RIGHT", });
/**
*/
export class Coord {

    static __wrap(ptr) {
        const obj = Object.create(Coord.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_coord_free(ptr);
    }
    /**
    * @param {bigint} x
    * @param {bigint} y
    * @returns {Coord}
    */
    static new(x, y) {
        const ret = wasm.coord_new(x, y);
        return Coord.__wrap(ret);
    }
    /**
    * @param {FieldSize} field_size
    * @returns {Coord}
    */
    static centered(field_size) {
        _assertClass(field_size, FieldSize);
        var ptr0 = field_size.__destroy_into_raw();
        const ret = wasm.coord_centered(ptr0);
        return Coord.__wrap(ret);
    }
}
/**
*/
export class FieldSize {

    static __wrap(ptr) {
        const obj = Object.create(FieldSize.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_fieldsize_free(ptr);
    }
    /**
    * @param {bigint} rows
    * @param {bigint} cols
    * @returns {FieldSize}
    */
    static new(rows, cols) {
        const ret = wasm.coord_new(rows, cols);
        return FieldSize.__wrap(ret);
    }
}
/**
*/
export class Snake {

    static __wrap(ptr) {
        const obj = Object.create(Snake.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_snake_free(ptr);
    }
    /**
    * @param {FieldSize} field_size
    * @returns {Snake}
    */
    static spawn(field_size) {
        _assertClass(field_size, FieldSize);
        var ptr0 = field_size.__destroy_into_raw();
        const ret = wasm.snake_spawn(ptr0);
        return Snake.__wrap(ret);
    }
    /**
    */
    grow_snake() {
        wasm.snake_grow_snake(this.ptr);
    }
    /**
    * @param {number} direction
    * @returns {boolean}
    */
    move_snake(direction) {
        const ret = wasm.snake_move_snake(this.ptr, direction);
        return ret !== 0;
    }
}

export function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

