export default {
    name:'form',
    docs:'@docs/form',
    messages: [
        {
            selector:'.uk-form',
            warning:'Class uk-form doesn\'t exist anymore. Instead you need to define every form item with its new form class ( e.g. .uk-input, .uk-select, ... ).'
        },
        {
            selector:'.uk-form-row',
            warning:'Class uk-form-row doesn\'t exist anymore. Instead you need can use the uk-margin class.'
        },
        {
            selector:'.uk-form-help-inline',
            warning:'Class uk-form-help-inline doesn\'t exist anymore. Instead you need can use the <p class=\'uk-inline\'> element with the text utility classes.'
        },
        {
            selector:'.uk-form-help-block',
            warning:'Class uk-form-help-block doesn\'t exist anymore. Instead you need can use the a <p> element with the text utility classes.'
        },
        {
            selector:'.uk-form-controls-condensed',
            warning:'Class uk-form-controls-condensed doesn\'t exist anymore. Instead use the uk-form-controls with an additional uk-margin-small class.'
        },
        {
            selector:'.uk-form-icon:not(.uk-icon)',
            warning:'Form icon has completely be been rebuild. Use the uk-inline class instead and add the uk-form-icon class directly to the icon.'
        },
        {
            selector:'.uk-form-icon-flip:not(.uk-icon)',
            warning:'Form icon has completely be been rebuild. Add the class uk-form-icon-flip directly to the icon.'
        }
    ]
};