export default {
    name: 'button',
    docs: '@docs/button',
    messages: [
        {
            selector:'[data-uk-button]',
            warning:'The attribute data-uk-button has been removed.'
        },
        {
            selector:'.uk-button-mini',
            warning:'The class uk-button-mini doesn\'t exist anymore. Use the class uk-button-small instead.'
        },
        {
            selector:'.uk-button:not(.uk-button-link):not(.uk-button-text):not(.uk-button-primary):not(.uk-button-danger):not(.uk-button-secondary):not(.uk-button-default)',
            warning:'The class uk-button needs an additional style class now, if you want the default button use the class uk-button-default.'
        }
    ]
};