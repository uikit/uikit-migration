export default {
    name:'toggle',
    docs:'@docs/toggle',
    messages: [
        {
            selector:'[data-uk-toggle]',
            warning:'The attribute data-uk-toggle has been renamed use the attribute uk-toggle instead.'
        },
        {
            selector:'[data-uk-toggle] .uk-hidden',
            warning:'To achieve a toggle which is by default hidden use the attribute hidden="hidden" instead of the class uk-hidden.'
        }
    ]
};