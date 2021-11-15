var a = [2, 6, 1, 5, 3,2];
var f = 1;
var u = 0;
var t;
for (var i=0; i<arr.length; i++)
{
        for (var j=i; j<arr.length; j++)
        {
                if (a[i] == a[j])
                 u++;
                if (f<u)
                {
                  f=u; 
                  t = a[i];
                }
        }
        u=0;
}
console.log(t+" " +f+" times") ;