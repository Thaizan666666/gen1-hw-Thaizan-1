function _IsPalidromeNumber(Input){
    if (Input < 0) return false;

    let OldInput = Input;
    let RevesInput = 0;

    while (Input > 0)
    {
        let Number = Input % 10;
        RevesInput = RevesInput * 10 + Number;
        Input = Math.floor(Input / 10);
    }
    return OldInput === RevesInput;
}

console.log(_IsPalidromeNumber(121));