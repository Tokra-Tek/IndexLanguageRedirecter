/**
 * The whole point of this files is to try redirect the user to the localized version of the index page 
 * @method
 * @param  {Object} w The window object
 */
(function(w)
{
    var DEFAULT_LANG = 'en';
    /**
     * Checks if localStorage is usable in the browser
     * @method hasLocalStorageTest
     * @return {Boolean}           
     */
    function hasLocalStorageTest()
    {
        var KEY = '__tokratek_featureTest__',
            VALUE = 'yes';
        if (typeof w.localStorage !== 'undefined')
        {
            try
            {
                w.localStorage.setItem(KEY, VALUE);
                if (w.localStorage.getItem(KEY) === VALUE)
                {
                    w.localStorage.removeItem(KEY);
                    return true;
                    // localStorage is enabled
                }
                // else localStorage is disabled
            }
            catch (e)
            {
                // localStorage is disabled
            }
        }
        //else localStorage is not available
    }
    if (w.location && w.location.replace)
    {
        var newUrl = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/',
            lang;
        if (hasLocalStorageTest())
        {
            //Look if the user has stored language preferences
            lang = w.localStorage.getItem(w.location.host + '/language') || DEFAULT_LANG;
            w.localStorage.setItem(w.location.href + '/language', lang);
            newUrl += lang + '/index.html';
        }
        else
        {
            newUrl += DEFAULT_LANG + '/index.html';
        }
        // console.log(newUrl);
        w.location.replace(newUrl);
    }
})(window);