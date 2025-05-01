function Sumnumber(Arrays, target)
{
    for(let i = 0;i < Arrays.length;i++)
        {
        for(let j = i + 1 ; j < Arrays.length;j++)
            {
                if(Arrays[i] + Arrays[j] === target)
                {
                    return [ i , j ];
                }
            }
        }
        return null;
}
console.log(Sumnumber([2,7,11,15],9));