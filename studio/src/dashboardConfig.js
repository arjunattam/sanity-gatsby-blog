export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e557d25c27255582a13bcef',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ofgtkbhq',
                  apiId: '234d1751-fae8-47ff-a06d-c12d8ec621f8'
                },
                {
                  buildHookId: '5e557d255ffee9600a20f017',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-amtv2dyj',
                  apiId: '17c1dd59-da12-49a6-af06-e459fce672f3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/arjun27/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-amtv2dyj.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
