function FindIndexFunction() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    const fourIndex = numberArray1.findIndex(a => a === 3);
    const string3Index = stringArray1.findIndex(a => a === 'string2');
    
    return(
        <div>
            <h3>FindIndex function</h3>
            fourIndex = { fourIndex } <br />
            string3Index = { string3Index }<br/>
        </div>
    )
}
export default FindIndexFunction