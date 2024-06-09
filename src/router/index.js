import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import BlogView from '../views/BlogView.vue';
import AddPost from '../views/AddPost.vue';
import EditPost from '../views/EditPost.vue';
import Comments from '../views/CommentsView.vue';
import PageNotFound from '../views/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      hideNav: true // Add this property to the route
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },

  {
    path: '/blog',
    name: 'blog',
    component: BlogView,
  },

  {
    path: '/add',
    name: 'add',
    component: AddPost
  }
  ,

  {
    path: '/edit/:id',
    name: 'edit',
    component: EditPost
  },

  {
    path: '/comments',
    name: 'comments',
    component: Comments
  },
  
  {
    path: '/:pathMatch(.*)*',
     component: PageNotFound }



];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;