import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'blog',
        data: { pageTitle: 'blogApp.blog.home.title' },
        loadChildren: () => import('./blog/blog.routes'),
      },
      {
        path: 'post',
        data: { pageTitle: 'blogApp.post.home.title' },
        loadChildren: () => import('./post/post.routes'),
      },
      {
        path: 'tag',
        data: { pageTitle: 'blogApp.tag.home.title' },
        loadChildren: () => import('./tag/tag.routes'),
      },
      {
        path: 'comment',
        data: { pageTitle: 'blogApp.comment.home.title' },
        loadChildren: () => import('./comment/comment.routes'),
      },
      {
        path: 'notification',
        data: { pageTitle: 'blogApp.notification.home.title' },
        loadChildren: () => import('./notification/notification.routes'),
      },
      {
        path: 'like',
        data: { pageTitle: 'blogApp.like.home.title' },
        loadChildren: () => import('./like/like.routes'),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
