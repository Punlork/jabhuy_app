import { AddItemScreen, HomeScreen } from '../screens/app/app';

type Route = {
  name: string;
  route: () => React.JSX.Element;
};

type AppRouteType = {
  Home: Route;
  AddItem: Route;
};

export const AppRoute: AppRouteType = {
  Home: {
    name: 'HomeScreen',
    route: HomeScreen,
  },
  AddItem: {
    name: 'AddItemScreen',
    route: AddItemScreen,
  },
};
