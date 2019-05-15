export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5cdbd299e146211c87d78418',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-q4fws8ih',
                  apiId: '38268f7d-360f-4c04-ad51-20facddd5f95'
                },
                {
                  buildHookId: '5cdbd29a0033ee5febb2231d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hirx3fb2',
                  apiId: 'b40934b0-c7e2-47a7-83b4-0966ce3b682b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thibaudcolas/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hirx3fb2.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
