import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { IndexLemonComponent } from './index-lemon/index-lemon.component';

const routes: Routes = [
    {path: '', component: IndexLemonComponent , data: {link: 'login'}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class IndexPageModule {
}