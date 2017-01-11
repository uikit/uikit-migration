export default {
    name:'dropdown',
    docs:'@docs/dropdown',
    messages: [
        {
            selector:'[data-uk-dropdown] > .uk-dropdown',
            warning:'The attribute data-uk-dropdown has been removed. Remove the attribute from the parent element and add the attribute uk-dropdown here.'
        },
        {
            selector:'[data-uk-dropdown] .uk-dropdown-blank',
            warning:'The attribute data-uk-dropdown has been removed. Remove the attribute from the parent element and add the attribute uk-drop here.'
        },
        {
            selector:'.uk-dropdown-navbar',
            warning:'The class uk-dropdown-navbar has been renamend. Use the class uk-navbar-dropdown instead.'
        },
        {
            selector:'.uk-navbar .uk-dropdown-grid',
            warning:'The class uk-dropdown-grid has been changed. Use the class uk-navbar-dropdown-grid instead.'
        },
        {
            selector:'.uk-navbar .uk-dropdown-width-2',
            warning:'The class .uk-dropdown-width-2 has been renamed. Use the class uk-navbar-dropdown-width-2 instead.'
        },
        {
            selector:'.uk-navbar .uk-dropdown-width-3',
            warning:'The class uk-dropdown-width-3 has been renamed. Use the class uk-navbar-dropdown-width-3 instead.'
        },
        {
            selector:'.uk-navbar .uk-dropdown-width-4',
            warning:'The class uk-dropdown-width-4 has been renamed. Use the class uk-navbar-dropdown-width-4 instead.'
        },
        {
            selector:'.uk-navbar .uk-dropdown-width-5',
            warning:'The class uk-dropdown-width-5 has been renamed. Use the class uk-navbar-dropdown-width-5 instead.'
        },
        {
            selector:'.uk-dropdown-small',
            warning:'The class uk-dropdown-small has been removed.'
        }
    ]
};