/**
 * returns new ArrayBuffer with Int8 value at specific position
 * @param {Number} length - length of array
 * @param {Number} position - specific location
 * @param {Number} value - the value
 * @returns returns new ArrayBuffer with Int8 value at a specific position
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new DataView(new ArrayBuffer(length), 0, length);
  buffer.setInt8(position, value);
  return buffer;
}
