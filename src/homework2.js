function _IsPalidrometext(Input){
    Input = Input.toLowerCase();
    let revestext ="";
    for (let i = Input.length - 1; i >= 0 ;i--)
    {
        revestext += Input[i];
    }
    return Input === revestext;
}
console.log(_IsPalidrometext("Level"));