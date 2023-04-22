/* tslint:disable */
/* eslint-disable */
/**
*/
export enum Direction {
  UP = 0,
  DOWN = 1,
  LEFT = 2,
  RIGHT = 3,
}
/**
*/
export class Coord {
  free(): void;
/**
* @param {bigint} x
* @param {bigint} y
* @returns {Coord}
*/
  static new(x: bigint, y: bigint): Coord;
/**
* @param {FieldSize} field_size
* @returns {Coord}
*/
  static centered(field_size: FieldSize): Coord;
}
/**
*/
export class FieldSize {
  free(): void;
/**
* @param {bigint} rows
* @param {bigint} cols
* @returns {FieldSize}
*/
  static new(rows: bigint, cols: bigint): FieldSize;
}
/**
*/
export class Snake {
  free(): void;
/**
* @param {FieldSize} field_size
* @returns {Snake}
*/
  static spawn(field_size: FieldSize): Snake;
/**
*/
  grow_snake(): void;
/**
* @param {number} direction
* @returns {boolean}
*/
  move_snake(direction: number): boolean;
}
