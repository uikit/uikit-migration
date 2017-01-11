export default {
    name:'search',
    docs:'@docs/search',
    messages: [
        {
            selector:'[data-uk-search]',
            warning:'The attribute data-uk-search has been removed.'
        },
        {
            selector:'.uk-search:not(.uk-search-default):not(.uk-search-navbar):not(.uk-search-large)',
            warning:'The class uk-search needs an additional style class ( uk-search-default, uk-search-navbar, uk-search-large ). If you want a search icon be visible use an additional span element with the class and attribute uk-search-icon.'
        },
        {
            selector:'.uk-search-field',
            warning:'The class uk-search-field has been removed. Use uk-search-input instead.'
        }
    ]
};