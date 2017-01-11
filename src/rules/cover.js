export default {
    name:'cover',
    docs:'@docs/cover',
    messages: [
        {
            selector:'[data-uk-cover]',
            warning:'The attribute data-uk-cover has been renamed. Use the attribute uk-cover instead.'
        },
        {
            selector:'.uk-cover-background',
            warning:'The class uk-cover-background has been renamed. Use the class uk-background-cover instead.'
        },
        {
            selector:'div.uk-cover',
            warning:'The class uk-cover has been renamed. Use the class uk-cover-container instead.'
        },
        {
            selector:'.uk-cover-object',
            warning:'The class uk-cover-object has been renamed. Use the class uk-cover instead.'
        }
    ]
};