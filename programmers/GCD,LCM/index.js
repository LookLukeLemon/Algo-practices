const gcd = (n,m) => {
    const remainder = n % m
    
    if(remainder === 0) return m
    return gcd(m,remainder)
}

const lcm = (n,m) => {
    const gcdValue = gcd(n,m);
    return n * m / gcdValue
}


function solution(n, m) {
    const gcdValue = gcd(n,m)
    return [gcdValue, lcm(n,m)]    
}