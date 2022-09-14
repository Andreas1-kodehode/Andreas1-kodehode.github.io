
document.getElementById("submit").onclick = (e) => {
    e.preventDefault();

    let number = parseInt(document.getElementById("input").value)


    let result = SolveCollatz(number)
    console.log(result)
    for(n = 1; n <= number; ++n)
    {
        let high = SolveCollatz(n).highest;
        if(high > result.highest)
            result.highest = high 
    }

    document.getElementById("steps").innerText = result.steps
    document.getElementById("highest").innerText = result.highest
}

function SolveCollatz(number)
{
    let steps = 0;
    let highest = number;

    while(number !== 1)
    {
        if(number > highest)
            highest = number
        ++steps
        if(number & 1)
        {
            number = (number*3) + 1
        }    
        else
            number /= 2
    }
    return {steps, highest}
}