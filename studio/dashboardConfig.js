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
                  buildHookId: '5f85ba84d2f66925aa1f29b3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-tq65makm',
                  apiId: '65e7fd71-f0b8-47b0-aed9-f64ff2aa9a06'
                },
                {
                  buildHookId: '5f85ba8426e3a320470e3943',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-kzug2vpv',
                  apiId: 'ccfa32a4-2f44-4907-8992-cefe1aaf3870'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fraprz/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-kzug2vpv.netlify.app', category: 'apps'}
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
