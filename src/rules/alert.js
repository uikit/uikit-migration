export default {
    name:'alert',
    docs:'@docs/alert',
    messages: [
        {
            selector:'[data-uk-alert]',
            warning:'The attribute data-uk-alert has been removed.'
        },
        {
            selector:'.uk-alert-large',
            warning:'The class uk-alert-large has been removed. Use uk-padding-* classes instead (e.g. uk-padding-large).'
        },
        {
            selector:'.uk-alert:not(.uk-alert-success):not(.uk-alert-warning):not(.uk-alert-danger):not(.uk-alert-primary)',
            notice:'If you want to use the current style of the alert add uk-alert-primary class.'
        }
    ]
};