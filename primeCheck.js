function isPrimeNumber(n) {
  if(n  != 1)
  {
    for (var i = 2; i < n; i++)
    {
      if(n % i === 0) return false;
    }
    return n > 1;
  }
else{
return true;
}
}

console.log(isPrimeNumber(1));
console.log(isPrimeNumber(2));
console.log(isPrimeNumber(9));
console.log(isPrimeNumber(11));
