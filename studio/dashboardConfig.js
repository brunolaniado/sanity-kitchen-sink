export default {
  widgets: [
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
                  buildHookId: '6058f998a2e0dd00dbbe11d1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-txhgv4s6',
                  apiId: '8204c64c-53ee-47eb-a7a3-0ed6a282018e'
                },
                {
                  buildHookId: '6058f99830bb6e0074a99db0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-wvuxff7u',
                  apiId: 'c3f234ca-3053-4bb1-bc0b-578e45ec3906'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brunolaniado/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-wvuxff7u.netlify.app', category: 'apps'}
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
