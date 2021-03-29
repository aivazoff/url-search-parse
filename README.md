# JavaScript url search parse

```javascript

var queryString = "one[0][a]=0a&one[0][b][]=0b1&one[0][b][]=0b2&one[0][b][]=0b3&one[1][a]=1a&one[1][b]=1b&one[2][]=1&one[2][]=2&one[2][]=3&one[3][0][]=1&one[3][1][]=2&one[3][2][]=3&one[3][3][]=4";
 
console.log(urlSearchParse(queryString));
 
/** Result
 
{
    one: [
        {a: '0a', b: ['0b1', '0b2', '0b3']},
        {a: '1a', b: '1b'},
        [1,2,3], [[1], [2], [3], [4]]
    ]
}
 
*/
