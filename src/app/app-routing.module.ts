import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 4.1) Importe os componentes
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AboutComponent } from './pages/about/about.component';
import { E404Component } from './pages/e404/e404.component';

// 4.2) Adicione as rotas para cada "página" na constante "Routes"
const routes: Routes = [

  // 4.3) A página inicial do aplicativo será 'home'
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // 4.4) Rota da página 'home'
  { path: 'home', component: HomeComponent, data: { title: '' } },

  // 4.5) Página 'news'
  { path: 'news', component: NewsComponent, data: { title: 'Notícias' } },

  // 4.6) Página 'contacts'
  { path: 'contacts', component: ContactsComponent, data: { title: 'Faça Contato' } },

  // 4.7) Página 'about'
  { path: 'about', component: AboutComponent, data: { title: 'Sobre' } },

  // 4.8) Página de erro para rotas inválidas (deve ser sempre a última rota)
  { path: '**', component: E404Component, data: { title: 'Erro 404' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
