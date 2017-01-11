export default {
    name:'close',
    docs:'@docs/close',
    messages: [
        {
            selector:'[data-uk-close]',
            warning:'UIkit3 doesn\'t use the data- prefix any longer. Use the uk-close attribute instead.'
        },
        {
            selector:'.uk-close:not([uk-close])',
            warning:'UIkit3 doesn\'t need the class uk-close anymore, use the attribute uk-close instead. '
        },
        {
            selector:'.uk-close-alt',
            warning:'The class uk-close-alt has been removed.'
        }
    ]
};