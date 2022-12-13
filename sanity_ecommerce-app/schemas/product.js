export default {
    name: 'product',
    title: 'Products',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true
            }
        }, 
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug', // unique indentifier
            title: 'Identifier',
            type: 'slug',
            options: {
                source: 'name', // creates slug for each name field
                maxLength: 90
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number'
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string'
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: ['Shirts', 'Hoodies', 'Custom']
            }
        },
        {
            name: 'size',
            title: 'Size',
            type: 'string',
            options: {
                list: ['Small', 'Medium', 'Large']
            }
        }
    ]
};