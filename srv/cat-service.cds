using my.bookshop as my from '../db/data-model';


service CatalogService @(requires : 'authenticated-user') {
    @odata.draft.enabled
    entity Authors @(restrict: [
        {grant:['READ','WRITE'],to: 'author'},
        {grant:['READ'], to: 'viewer'}
    ]) as projection on my.Authors;
    entity Books @(restrict:[
        {grant:['READ','WRITE'], to: 'author'},
        {grant:['READ'], to: 'viewer'}
    ]) as projection on my.Books;
    
}
