import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/Index'
import Company from '@/pages/Company'
import Customers from '@/pages/Customers'
import Contacts from '@/pages/Contacts'
import Team from '@/pages/Team'
import Vacancies from '@/pages/Vacancies'

import DisplayAds from '@/pages/services/DisplayAds'
import SocialNetworks from '@/pages/services/SocialNetworks'
import SEO from '@/pages/services/SEO'
import HeatMap from '@/pages/services/HeatMap'
import PriceLists from '@/pages/services/PriceLists'
import Contextus from '@/pages/services/Contextus'
import CPA from '@/pages/services/CPA'
import MobileAds from '@/pages/services/MobileAds'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },

    {
      path: '/company',
      component: Company
    },
    {
      path: '/customers',
      component: Customers
    },
    {
      path: '/contacts',
      component: Contacts
    },
    {
      path: '/team',
      component: Team
    },
    {
      path: '/vacancies',
      component: Vacancies
    },

    {
      path: '/display-ads',
      component: DisplayAds
    },
    {
      path: '/social-networks',
      component: SocialNetworks
    },
    {
      path: '/seo',
      component: SEO
    },
    {
      path: '/heat-map',
      component: HeatMap
    },
    {
      path: '/price-lists',
      component: PriceLists
    },
    {
      path: '/contextus',
      component: Contextus
    },
    {
      path: '/cpa',
      component: CPA
    },
    {
      path: '/mobile-ads',
      component: MobileAds
    }
  ]
})
