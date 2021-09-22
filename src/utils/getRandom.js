

export function random(min, max) {
 return   Math.random() * (max - min) + min
}

export function randomInt(min, max) {
    return random(min, max).floor();
}

export function randomVec3(min, max) { 
    return [random(-1, 1), random(-1, 1), random(-1, 1)];
}