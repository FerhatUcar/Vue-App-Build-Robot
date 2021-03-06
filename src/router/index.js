/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage.vue'
import RobotBuilder from "../build/RobotBuilder";
import PartInfo from "../parts/Partinfo";
import BrowseParts from "../parts/BrowseParts";

import RobotHeads from '../parts/RobotHeads';
import RobotArms from '../parts/RobotArms';
import RobotTorsos from '../parts/RobotTorsos';
import RobotBases from '../parts/RobotBases';
import SidebarStandard from "../sidebars/SidebarStandard";
import SidebarBuild from "../sidebars/SidebarBuild";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    components: {
      default: HomePage,
      sidebar: SidebarStandard,
    },
  }, {
    path: '/build',
    name: 'Build',
    components: {
      default: RobotBuilder,
      sidebar: SidebarBuild,
    },
  }, {
    path: '/parts/browse',
    name: 'BrowseParts',
    component: BrowseParts,
    children: [
      {
        name: 'BrowseHeads',
        path: 'heads',
        component: RobotHeads,
      }, {
        name: 'BrowseArms',
        path: 'arms',
        component: RobotArms,
      }, {
        name: 'BrowseTorsos',
        path: 'torsos',
        component: RobotTorsos,
      },{
        name: 'BrowseBases',
        path: 'bases',
        component: RobotBases,
      }
    ]
  },
    {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: PartInfo,
    props: true,
  }],
});
