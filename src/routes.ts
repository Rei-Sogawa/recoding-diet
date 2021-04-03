import Index from './pages/Index';
import MealRecordsIndex from './pages/meal-records/Index';
import MealRecordsNew from './pages/meal-records/New';

const routes = [
  {
    path: '/',
    exact: true,
    component: Index,
  },
  {
    path: '/meal-records',
    exact: true,
    component: MealRecordsIndex,
  },
  {
    path: '/meal-records/new',
    exact: true,
    component: MealRecordsNew,
  },
];

export default routes;
