export default {
    name:'slidenav',
    docs:'@docs/slidenav',
    messages: [
        {
            selector:'.uk-slidenav:not([uk-slidenav])',
            warning:'The class uk-slidenav has been removed. Use the attribute uk-slidenav instead and add the class uk-inline to the parent element. To make the navigation only visible on hover add the class uk-visible-toggle to the parent element'
        },
        {
            selector:'.uk-slidenav-previous',
            warning:'The class uk-slidenav-previous has been removed. Use the argument previous for the attribute uk-slidenav instead (e.g. uk-slidenav=\'previous\'). For positioning use the uk-position-* classes (e.g. uk-position-center-left & uk-position-small). To hide the navigation when not hovered use the class uk-hidden-hover.'
        },
        {
            selector:'.uk-slidenav-next',
            warning:'The class uk-slidenav-next has been removed. Use the argument next for the attribute uk-slidenav instead (e.g. uk-slidenav=\'next\'). For positioning use the uk-position-* classes (e.g. uk-position-center-left & uk-position-small). To hide the navigation when not hovered use the class uk-hidden-hover.'
        },
        {
            selector:'.uk-slidenav-contrast',
            warning:'The class uk-slidenav-contrast has been removed. Use the class uk-light / uk-dark on the the parent container instead.'
        }
    ]
};