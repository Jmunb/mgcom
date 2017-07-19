import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/Index'
import Company from '@/pages/Company'
import Customers from '@/pages/Customers'
import Contacts from '@/pages/Contacts'
import Team from '@/pages/Team'
import Vacancies from '@/pages/Vacancies'

import Media from '@/pages/services/Media'
import Target from '@/pages/services/Target'
import SEO from '@/pages/services/SEO'
import Analitycs from '@/pages/services/Analitycs'
import PriceLists from '@/pages/services/PriceLists'
import Contextus from '@/pages/services/Contextus'
import Cpa from '@/pages/services/Cpa'
import MobileAds from '@/pages/services/MobileAds'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },

    {
      path: '/company',
      name: 'company',
      component: Company
    },
    {
      path: '/customers',
      name: 'customers',
      component: Customers
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/vacancies',
      name: 'vacancies',
      component: Vacancies
    },

    {
      path: '/media',
      name: 'media',
      component: Media
    },
    {
      path: '/target',
      name: 'target',
      component: Target
    },
    {
      path: '/seo',
      name: 'seo',
      component: SEO
    },
    {
      path: '/analitycs',
      name: 'analitycs',
      component: Analitycs
    },
    {
      path: '/price-lists',
      name: 'price-lists',
      component: PriceLists
    },
    {
      path: '/contextus',
      name: 'contextus',
      component: Contextus
    },
    {
      path: '/cpa',
      name: 'cpa',
      component: Cpa
    },
    {
      path: '/mobile-ads',
      name: 'mobile-ads',
      component: MobileAds
    }
  ]
})
