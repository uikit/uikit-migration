export default {
    name:'accordion',
    docs:'@docs/accordion',
    messages: [
        {
            selector:'[data-uk-accordion]',
            warning:'The attribute data-uk-accordion has been renamed. Use the attribute uk-accordion instead.'
        },
        {
            selector:'.uk-accordion > .uk-accordion-title',
            warning:'The accordion component has been reworked, the accordion items need to be wrapped into one element now (e.g. ul > li structure, surrounding div element)'
        }
    ]
};