export default {
    name: 'homeBanner',
    title: 'Home Banner',
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
        }
    ]
  };