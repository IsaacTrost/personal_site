interface route {
    index: boolean;
    label: string;
    path: string;

}

const routes: route[] = [
    {
      index: true,
      label: "Michael D'Angelo",
      path: '/',
    },
    {
      label: 'About',
      path: '/about',
      index: false,
    },
    {
      label: 'Resume',
      path: '/resume',
      index: false,
    },
    {
      label: 'Projects',
      path: '/projects',
      index: false,
    },
    {
      label: 'Stats',
      path: '/stats',
      index: false,
    },
    {
      label: 'Contact',
      path: '/contact',
      index: false,
    },
  ];
  
export default routes;
