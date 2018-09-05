/**
 *
 * @param {string?} search
 * @return {{}}
 */
function urlSearchParse(search)
{
    search = search || location.search;

    var result = {},
        arrKeys = {},
        params = decodeURIComponent(search.replace(/^\?/, '')).split('&'),
        isUndefined = function(val) {
            return typeof(val) === 'undefined';
        },
        isEmpty = function(val) {
            return !isUndefined(val) && val === '';
        },
        createArrayFromLength = function(length) {
            return Array.apply(null, {length: length}).map(Number.call, Number);
        };

    params.forEach(function(param, paramIndex){

        param = param.split('=');

        var key = param[0],
            val = param[1],
            match = key.match(/^([\w-]+)((\[[^\]]*\])*)$/) || [],
            childKeys = match[1] ? [match[1]] : [],
            _res = result;

        if(match[2]) {
            childKeys = childKeys.concat(
                match[2].match(/^\[(\S*)\]$/)[1].split('][')
            );
        }

        childKeys.forEach(function(childKey, childKeyIndex){

            if(isEmpty(childKey)) {
                var _positionKey = childKeys.slice(0, childKeyIndex + 1).join('-') + '-' + childKeyIndex;
                if(isUndefined(arrKeys[_positionKey])) { arrKeys[_positionKey] = -1; }
                childKey = childKeys[childKeyIndex] = ++arrKeys[_positionKey];
            }

            if (childKeyIndex + 1 == childKeys.length) {
                _res[childKey] = val;
            } else if(isUndefined(_res[childKey])) {
                _res[childKey] = {};
            }

            _res = _res[childKey];

        });

    });

    return (function detectArray(value){

        var keys = Object.keys(value);

        keys.forEach(function(k){
            if(value[k] instanceof Object) {
                value[k] = detectArray(value[k]);
            }
        });

        if(keys.toString() === createArrayFromLength(keys.length).toString()) {
            value = keys.map(function(k){ return value[k] });
        }

        return value;

    })(result);
}
