import { Routes } from '@angular/router';
import { Daniel } from './components/daniel/daniel';
import { Arnol } from './components/arnol/arnol';
import { Alex } from './components/alex/alex';
import { Mazuera } from './components/mazuera/mazuera';
import { Santiago } from './components/santiago/santiago';
import { Andres } from './components/andres/andres';
import { William } from './components/william/william';

export const routes: Routes = [
    {
        path: 'Daniel',
        component: Daniel
    },
    {
        path: 'Arnol',
        component: Arnol
    },
    {
         path: 'Alex',
        component: Alex
    },
    {
        path: 'Mazuera',
        component: Mazuera
    },
    {
        path: 'Santiago',
        component: Santiago
    },
    {
        path: 'Andres',
        component: Andres
    },
    {
        path: 'William',
        component: William
    }

];
