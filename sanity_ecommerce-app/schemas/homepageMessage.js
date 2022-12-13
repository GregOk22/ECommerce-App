export default {
    name: 'homepageMessage',
    title: 'Homepage Message',
    type: 'document',
    fields: [
        {
            name: 'backgroundImage',
            title: 'Background Image',
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
            name: 'line1',
            title: 'Line 1',
            type: 'string'
        },
        {
            name: 'line2',
            title: 'Line 2',
            type: 'string'
        },
        {
            name: 'line3',
            title: 'Line 3',
            type: 'string'
        }
    ]
  };