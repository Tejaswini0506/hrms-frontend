import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-employee.html',
  styleUrls: ['./edit-employee.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeId!: number;

  employee: Employee = {
    name: '',
    email: '',
    department: '',
    salary: 0
  };

  loading = true;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (!idParam) {
      this.router.navigate(['/employees']);
      return;
    }

    this.employeeId = Number(idParam);

    this.employeeService.getEmployeeById(this.employeeId).subscribe({
      next: data => {
        this.employee = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: err => {
        console.error('Error loading employee', err);
        this.loading = false;
      }
    });
  }

  updateEmployee(): void {
    this.employeeService.updateEmployee(this.employeeId, this.employee).subscribe({
      next: () => this.router.navigate(['/employees']),
      error: err => console.error('Error updating employee', err)
    });
  }

  cancel(): void {
    this.router.navigate(['/employees']);
  }
}
