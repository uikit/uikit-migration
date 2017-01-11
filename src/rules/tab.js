export default {
    name:'tab',
    docs:'@docs/tab',
    messages: [
        {
            selector:'[data-uk-tab]',
            warning:'The attribute data-uk-tab has been removed. Use the attribute uk-tab instead.'
        },
        {
            selector:'.uk-tab-flip',
            warning:'The class uk-tab-flip has been removed. To align the tabs right use the class uk-flex-right instead.'
        },
        {
            selector:'.uk-tab-center',
            warning:'The class uk-tab-center has been removed. To align the tabs in the center remove the div element with the uk-tab-center class containing the ul and add the uk-flex-center to the ul itself.'
        },
        {
            selector:'.uk-tab-bottom-center',
            warning:'The class uk-tab-bottom-center has been removed.'
        },
        {
            selector:'.uk-tab-grid',
            warning:'The class uk-tab-grid has been removed. Use the uk-child-width-* classes instead (e.g. uk-child-width-1-5).'
        },
        {
            selector:'.uk-tab-responsive',
            warning:'The class uk-tab-responsive has been removed.'
        }
    ]
};