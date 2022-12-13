export default {
    name: 'categoryBanner',
    title: 'Category Banners',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'buttonText',
            title: 'Button Text',
            type: 'string'
        },
        {
            name: 'infoText',
            title: 'Info Text',
            type: 'string'
        },
        {
            name: 'redirectPage',
            title: 'Redirect Page',
            type: 'string',
            options: {
                list: ['Shirts', 'Hoodies', 'Custom']
            }
        },
        {
            name: "sortOrder",
            title: "Sort Order",
            type: "number"
        }
    ]
  };