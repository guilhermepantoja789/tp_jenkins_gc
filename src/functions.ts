export function obtemRaizAproximada(numero: number): number {
    let i: number = 0;
    for (i; i * i <= numero; i++);
    return i;
}

export function checaSePrimo(numero: number): boolean {
    if (numero <= 1) return false;
    if (numero <= 3) return true; 
    if (numero % 2 === 0) return false;
    if (numero % 3 === 0) return false;
    let i: number = 1;
    let raiz: number = obtemRaizAproximada(numero);
    while ((6 * i - 1) <= raiz) {
        if (numero % (6 * i - 1) === 0) return false;
        if ((6 * i + 1) <= raiz && numero % (6 * i + 1) === 0) return false;
        i++;
    }
    return true;
}
