function r(start, end)
{
    if(start > end)
    {
    var arrone = new Array(start - end + 1);
    for (var i = 0; i < arrone.length; i++, start--)
    {
        resarrult[x] = start;
    }
    return arr1;
}
else 
{
    var arrtwo = new Array(end-start+1);
    for(var j= 0; j < arrtwo.length; j++, start++)
    {
        arrtwo[j] = start;
    }
    return arr2;
}
}
console.log(r(1, 3));
console.log(r(-1, 3));