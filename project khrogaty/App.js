
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Singlepage from "./component/Singlepage"
import Main from "./component/Main"
import Search from './component/Search'
import PageResto from './component/PageResto';
import Splash from './component/Splash';
import AboutSplash from './component/AboutSplash';
import AboutSplash2 from './component/AboutSplash2';
import AboutSplash3 from './component/AboutSplash3';
import Findplaces from './component/Findplaces';
import Things from './component/Things';
const AppNavigator = createStackNavigator({
  Home:Splash,
  Main: Main,
  Singlepage:Singlepage,
  Search:Search,
  PageResto:PageResto, 
  AboutSplash:AboutSplash,
  AboutSplash2:AboutSplash2,
  AboutSplash3:AboutSplash3,
  Findplaces:Findplaces,
  Things:Things
});

export default createAppContainer(AppNavigator);
