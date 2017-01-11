export default {
    name:'offcanvas',
    docs:'@docs/offcanvas',
    messages: [
        {
            selector:'[data-uk-offcanvas]',
            warning:'The data-uk-offcanvas has been renamed. Use the attribute uk-toggle instead.',
            check: function (element) {
                if (element.getAttribute('data-uk-offcanvas').indexOf('mode') !== -1) {
                    return "The mode is now defined in element containing the uk-offcanvas attribute ( e.g. uk-offcanvas=\"mode:reveal\")."
                }
            }
        },
        {
            selector:'.uk-offcanvas:not([uk-offcanvas])',
            warning:'The class uk-offcanvas has been changed. Remove this class and add the attribute uk-offcanvas instead. If you want to keep the overlay about the website when the offcanvas is open add the parameter overlay:true (e.g. uk-offcanvas=\'overlay:true\').'
        },
        {
            selector:'.uk-offcanvas-bar-flip',
            warning:'The class uk-offcanvas-bar-flip has been removed. Add the parameter flip:true to the uk-offcanvas attribute instead (e.g. uk-offcanvas=\'flip:true\').'
        }
    ]
};