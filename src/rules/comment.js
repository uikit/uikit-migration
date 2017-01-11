export default {
    name:'comment',
    docs:'@docs/comment',
    messages: [
        {
            selector:'.uk-comment-header:not([uk-grid])',
            notice:'The structure of the comment header has been changed. You need a grid now to set the image and info into on line like in the example below.',
            example:`<header class="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid>
    <div class="uk-width-auto">
        <img class="uk-comment-avatar" src="http://unsplash.it/50/50/?random" alt="">
    </div>
    <div class="uk-width-expand">
        <h4 class="uk-comment-title uk-margin-remove">Author</h4>
        <ul class="uk-comment-meta uk-subnav uk-subnav-line uk-margin-remove-top">
            <li class="uk-disabled"><a href="#">12 days ago</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">#</a></li>
            <li><a href="#">Reply</a></li>
        </ul>
    </div>
</header>`
        }
    ]
};
