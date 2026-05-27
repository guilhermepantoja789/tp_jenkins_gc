import { obtemRaizAproximada, checaSePrimo } from "../src/functions";

test("obtemRaizAproximada", () => {
    expect(obtemRaizAproximada(4)).toBe(2);
});

test("obtemRaizAproximada", () => {
    expect(obtemRaizAproximada(8)).toBe(2);
});

test("obtemRaizAproximada", () => {
    expect(obtemRaizAproximada(9)).toBe(3);
});

test("checaSePrimo", () => {
    expect(checaSePrimo(21474836478)).toBe(false);
});

test("checaSePrimo", () => {
    expect(checaSePrimo(2147483647)).toBe(true);
});

test("checaSePrimo", () => {
    expect(checaSePrimo(4)).toBe(false);
});