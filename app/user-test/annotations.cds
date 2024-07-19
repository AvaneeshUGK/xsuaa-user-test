using CatalogService as service from '../../srv/cat-service';
annotate service.Authors with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'name',
                Value : name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'address',
                Value : address,
            },
            {
                $Type : 'UI.DataField',
                Label : 'genre',
                Value : genre,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Books by author',
            ID : 'Booksbyauthor',
            Target : 'toBooks/@UI.LineItem#Booksbyauthor',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'name',
            Value : name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'address',
            Value : address,
        },
        {
            $Type : 'UI.DataField',
            Label : 'genre',
            Value : genre,
        },
    ],
);

annotate service.Books with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Books',
            ID : 'Books',
            Target : '@UI.FieldGroup#Books',
        },
    ],
    UI.FieldGroup #Books : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : title,
                Label : 'title',
            },{
                $Type : 'UI.DataField',
                Value : stock,
                Label : 'stock',
            },],
    }
);
annotate service.Books with @(
    UI.LineItem #Booksbyauthor : [
        {
            $Type : 'UI.DataField',
            Value : title,
            Label : 'title',
        },]
);
