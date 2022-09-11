export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '631db9ea9e1ad206bca7b75c',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-g6imrvk9',
                  apiId: 'f75be32d-0e83-41a5-ace7-107e1435e429'
                },
                {
                  buildHookId: '631db9e99907ec060481bb84',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-2dvdgezo',
                  apiId: '6a0c1755-3a76-4abf-a9f0-2126c3ce9dbe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Round0000/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-2dvdgezo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
