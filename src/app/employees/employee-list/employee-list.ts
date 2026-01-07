import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './employee-list.html'
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];

  role: 'ADMIN' | 'USER' = 'ADMIN';

  constructor(
    private employeeService: EmployeeService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (data: Employee[]) => {
        this.employees = data;
        this.cdr.detectChanges();
      },
      error: (err: any) => console.error(err)
    });
  }

  get isAdmin(): boolean {
    return this.role === 'ADMIN';
  }

  setRole(role: 'ADMIN' | 'USER') {
    this.role = role;
  }

  deleteEmployee(id: number): void {
    if (!this.isAdmin) return;

    if (!confirm('Are you sure?')) return;

    this.employeeService.deleteEmployee(id).subscribe({
      next: () => {
        this.employees = this.employees.filter(e => e.id !== id);
        this.cdr.detectChanges();
      },
      error: (err: any) => console.error(err)
    });
  }
}
