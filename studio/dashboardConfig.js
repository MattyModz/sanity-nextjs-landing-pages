export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '6368d4815e2ed40542bc72d8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-7fjdqzjj',
                  apiId: 'e522a36c-4509-42cb-bfab-3d792399a673'
                },
                {
                  buildHookId: '6368d482a90a9c00afbccc60',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-yggx687k',
                  apiId: 'c3df7019-d2bf-464b-80a5-884651905a25'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MattyModz/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-yggx687k.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
