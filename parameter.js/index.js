function test(x)
{

  if (x===1)
  {
    return false;
  }
  else if(x === 2)
  {
    return true;
  }else
  {
    for(var i = 2; i < a; i++)
    {
      if(x % i === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(27));