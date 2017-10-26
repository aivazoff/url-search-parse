# JavaScript url search parse

```javascript

var params = jQuery.param({
    one: [
        {a: '0a', b: ['0b1', '0b2', '0b3']},
        {a: '1a', b: '1b'},
        [1,2,3], [[1], [2], [3], [4]]
    ]
});
 
console.log(urlSearchParse(params));
 
/** Result
 
{
    one: [
        {a: '0a', b: ['0b1', '0b2', '0b3']},
        {a: '1a', b: '1b'},
        [1,2,3], [[1], [2], [3], [4]]
    ]
}
 
*/
