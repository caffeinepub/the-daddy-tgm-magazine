import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ReaderPage from './pages/ReaderPage';
import ArchivePage from './pages/ArchivePage';
import SoapboxPage from './pages/SoapboxPage';
import AboutPage from './pages/AboutPage';
import ClassifiedsPage from './pages/ClassifiedsPage';

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const readerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/reader',
  component: ReaderPage,
});

const archiveRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/archive',
  component: ArchivePage,
});

const soapboxRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/soapbox',
  component: SoapboxPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const classifiedsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/classifieds',
  component: ClassifiedsPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  readerRoute,
  archiveRoute,
  soapboxRoute,
  aboutRoute,
  classifiedsRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
