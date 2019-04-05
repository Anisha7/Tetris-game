
// get a random number between min and max
export const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}