export default {
    name:'badge',
    docs:'@docs/badge',
    messages: [
        {
            selector:'.uk-badge:not(.uk-badge-notification)',
            notice:'The class uk-badge without the additional uk-badge-notification class has been renamed into uk-label. If you already have changed the notification into the badge ignore this warning.'
        },
        {
            selector:'.uk-badge-notification',
            warning:'The new badge is the old badge-notification, this class can be removed.'
        },
        {
            selector:'.uk-badge-success:not(.uk-badge-notification)',
            warning:'The class uk-badge-success has been removed. Use uk-label-success instead.'
        },
        {
            selector:'.uk-badge-danger:not(.uk-badge-notification)',
            warning:'The class uk-badge-danger has been removed. Use uk-label-danger instead.'
        },
        {
            selector:'.uk-badge-success.uk-badge-notification',
            warning:'The class uk-badge-success has been removed.'
        },
        {
            selector:'.uk-badge-danger.uk-badge-notification',
            warning:'The class uk-badge-danger has been removed.'
        }
    ]
};