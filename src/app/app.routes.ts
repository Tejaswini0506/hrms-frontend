import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employees/employee-list/employee-list';
import { AddEmployeeComponent } from './employees/add-employee/add-employee';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee';
import { AdminGuard } from './guards/admin.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },

  { path: 'employees', component: EmployeeListComponent },

  {
    path: 'add-employee',
    component: AddEmployeeComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'edit-employee/:id',
    component: EditEmployeeComponent,
    canActivate: [AdminGuard]
  }
];
