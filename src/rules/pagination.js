export default {
    name:'pagination',
    docs:'@docs/pagination',
    messages: [
        {
            selector:'.uk-pagination:not(.uk-pagination-left):not(.uk-pagination-right):not(.uk-flex-center):not(.uk-flex-right):not(.uk-flex-between):not(.uk-flex-arround)',
            notice:'The class uk-pagination has been changed. To center the pagination add the class uk-flex-center.'
        },
        {
            selector:'.uk-pagination.uk-pagination-left',
            warning:'The class uk-pagination has been changed. The class uk-pagination-left is not needed any longer.'
        },
        {
            selector:'.uk-pagination.uk-pagination-right',
            warning:'The class uk-pagination-right has been removed. Use the class uk-flex-right instead.'
        },
        {
            selector:'.uk-pagination [class*=uk-icon-angle-]',
            warning:'To display angles to the left or right for the pagination use a span element with the attribute uk-pagination-previous / uk-pagination-next instead.'
        },
        {
            selector:'.uk-pagination-next:not([uk-pagination-next])',
            warning:'The class uk-pagination-next has been changed. Use the class uk-flex-between for the ul element instead.',
            example:`<ul class="uk-pagination uk-flex-between">
    <li class=""><a href="#"><i class="" uk-icon="icon:chevron-left"></i> Previous</a></li>
    <li class=""><a href="#">Next <i class="" uk-icon="icon:chevron-right"></i></a></li>
</ul>`
        },
        {
            selector:'.uk-pagination-previous:not([uk-pagination-previous])',
            warning:'The class uk-pagination-previous has been changed. Use the class uk-flex-between for the ul element instead.',
            example:`<ul class="uk-pagination uk-flex-between">
    <li class=""><a href="#"><i class="" uk-icon="icon:chevron-left"></i> Previous</a></li>
    <li class=""><a href="#">Next <i class="" uk-icon="icon:chevron-right"></i></a></li>
</ul>`
        }
    ]
};