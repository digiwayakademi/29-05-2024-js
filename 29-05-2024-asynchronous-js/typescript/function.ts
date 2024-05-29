function getAverage(...a: number[]) : string{
    let total = 0;
    let count = 0;
    
    for(let i=0; i<a.length; i++)
    {
       total += a[i];
       count++;  
    }

    const result = total/count;
    return 'result :'+ result;
}

getAverage(10,20,30,40,50,10,20);