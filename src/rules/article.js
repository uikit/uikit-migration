export default {
    name:'article',
    docs:'@docs/article',
    messages: [
        {
            selector:'.uk-article-lead',
            warning:'The class uk-article-lead has been removed. Use the uk-text-lead class instead.'
        },
        {
            selector:'.uk-article-divider',
            warning:'The class uk-article-divider has been removed. Use a hr element or the uk-divider-icon class of the element component instead.'
        }
    ]
};