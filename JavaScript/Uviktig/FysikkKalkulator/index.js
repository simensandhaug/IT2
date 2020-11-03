let formel = prompt("Skriv formel: 1. s=vt, 2. v=v0+at, 3. s=v0t+1/2at^2, 4. s=1/2(v0+v)t, 5. 2as=v^2-v0^2");
if (formel == "1") {
    //s=vt
    let ukjent = prompt("Hvilken ukjent?: s, v, t");
    if (ukjent == "s") {
        let v = parseInt(prompt("Skriv inn v: "));
        let t = parseInt(prompt("Skriv inn t: "));
        let ans = v * t;
        console.log("s = " + ans.toFixed(2) + "m");
    } else if (ukjent == "v") {
        let s = parseInt(prompt("Skriv inn s: "));
        let t = parseInt(prompt("Skriv inn t: "));
        let ans = s / t;
        console.log("v = " + ans.toFixed(2) + "m/s");
    } else {
        let s = parseInt(prompt("Skriv inn s: "));
        let v = parseInt(prompt("Skriv inn v: "));
        let ans = s / v
        console.log("t = " + ans.toFixed(2) + "s");
    }
} else if (formel == "2") {
    //v=v0+at
    let ukjent = prompt("Hvilken ukjent?: v, v0, a, t")
    if (ukjent == "v") {
        let v0 = parseInt(prompt("Skriv inn v0: "));
        let a = parseInt(prompt("Skriv inn a: "));
        let t = parseInt(prompt("Skriv inn t: "));
        let ans = v0 + a * t;
        console.log("v = " + ans.toFixed(2) + "m/s");
    } else if (ukjent == "v0") {
        let v = parseInt(prompt("Skriv inn v: "));
        let a = parseInt(prompt("Skriv inn a: "));
        let t = parseInt(prompt("Skriv inn t: "));
        let ans = v - a * t;
        console.log("v0 = " + ans.toFixed(2) + "m/s");
    } else if (ukjent == "a") {
        let v0 = parseInt(prompt("Skriv inn v0: "));
        let v = parseInt(prompt("Skriv inn v: "));
        let t = parseInt(prompt("Skriv inn t: "));
        let ans = (v - v0) / t;
        console.log("a = " + ans.toFixed(2) + "m/s^2");
    } else {
        let v = parseInt(prompt("Skriv inn v: "));
        let v0 = parseInt(prompt("Skriv inn v0: "));
        let a = parseInt(prompt("Skriv inn a: "));
        let ans = (v - v0) / a;
        console.log("t = " + ans.toFixed(2) + "s");
    }
} else if (formel == "3") {
    //s=v0t+1/2at^2
    let ukjent = prompt("Hvilken ukjent?: s, v0, a")
    if (ukjent == "s") {
        let v0 = parseInt(prompt("Skriv inn v0: "));
        let t = parseInt(prompt("Skriv inn t: "));
        let a = parseInt(prompt("Skriv inn a: "));
        let ans = (v0 * t) + (a * t ^ 2) / 2;
        console.log("s = " + ans.toFixed(2) + "m");
    } else if (ukjent == "v0") {
        let s = parseInt(prompt("Skriv inn s: "));
        let t = parseInt(prompt("Skriv inn t: "));
        let a = parseInt(prompt("Skriv inn a: "));
        let ans = (s - (a * t ^ 2) / 2) * t;
        console.log("v0 = " + ans.toFixed(2) + "m/s");
    } else if (ukjent == "a") {
        let v0 = parseInt(prompt("Skriv inn v0: "));
        let t = parseInt(prompt("Skriv inn t: "));
        let s = parseInt(prompt("Skriv inn s: "));
        let ans = (2 * s - 2 * (v0 * t)) / (t * t);
        console.log("a = " + ans.toFixed(2) + "m/s^2");

    }
} else if (formel = "4") {
    //s=1/2(v0+v)t
    let ukjent = prompt("Hvilken ukjent?: s, v0, v, t")
    if (ukjent == "s") {
        let v0 = parseInt(prompt("Skriv inn v0: "));
        let v = parseInt(prompt("Skriv inn v: "));
        let t = parseInt(prompt("Skriv inn t: "));
        let ans = ((v0 + v) * t) / 2;
        console.log("s = " + ans + "m");
    } else if (ukjent == "v0") {
        let s = parseInt(prompt("Skriv inn s: "));
        let v = parseInt(prompt("Skriv inn v: "));
        let t = parseInt(prompt("Skriv inn t: "));
        let ans = 2 * (s / t) - v;
        console.log("v0 = " + ans + "m/s");
    } else if (ukjent == "v") {
        let s = parseInt(prompt("Skriv inn s: "));
        let v0 = parseInt(prompt("Skriv inn v0: "));
        let t = parseInt(prompt("Skriv inn t: "));
        let ans = 2 * (s / t) - v0;
        console.log("v = " + ans + "m/s");
    } else {
        let s = parseInt(prompt("Skriv inn s: "));
        let v = parseInt(prompt("Skriv inn v: "));
        let v0 = parseInt(prompt("Skriv inn v0: "));
        let ans = (2 * s) / (v0 + v);
        console.log("t = " + ans + "s");
    }
} else if (formel == "5") {
    let ukjent = prompt("Hvilken ukjent?: a, s, v, v0")
    if (ukjent == "a") {
        let s = parseInt(prompt("Skriv inn s: "));
        let v = parseInt(prompt("Skriv inn v: "));
        let v0 = parseInt(prompt("Skriv inn v0: "));
        let ans = ((v * v) - (v0 * v0)) / 2 * s;
        console.log("a = " + ans + "m/s^2");
    } else if (ukjent == "s") {
        let a = parseInt(prompt("Skriv inn a: "));
        let v = parseInt(prompt("Skriv inn v: "));
        let v0 = parseInt(prompt("Skriv inn v0: "));
        let ans = ((v * v) - (v0 * v0)) / 2 * a;
        console.log("s = " + ans + "m");
    } else if (ukjent == "v") {
        let s = parseInt(prompt("Skriv inn s: "));
        let v0 = parseInt(prompt("Skriv inn v0: "));
        let a = parseInt(prompt("Skriv inn a: "));
        let ans = Math.sqrt(2 * a * s + (v0 * v0));
        console.log("v = " + ans + "m/s");
    } else {
        let s = parseInt(prompt("Skriv inn s: "));
        let v = parseInt(prompt("Skriv inn v: "));
        let a = parseInt(prompt("Skriv inn a: "));
        let ans = Math.sqrt(2 * a * s - (v * v));
        console.log("v0 = " + ans * -1 + "m/s");
    }
} else {
    console.log("Error du suger");
}