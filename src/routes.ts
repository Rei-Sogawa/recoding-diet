import Index from './pages/Index';
import MealRecordsIndex from './pages/meal-records/MealRecordsIndex';
import MealRecordsNew from './pages/meal-records/MealRecordsNew';

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
