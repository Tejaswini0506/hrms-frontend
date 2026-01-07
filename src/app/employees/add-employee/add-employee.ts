import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-employee.html',
  styleUrls: ['./add-employee.css']
})
export class AddEmployeeComponent {

  employee: Employee = {
    name: '',
    email: '',
    department: '',
    salary: 0
  };

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

saveEmployee(): void {
  this.employeeService.createEmployee(this.employee).subscribe({
    next: () => {
      this.router.navigate(['/employees']).then(() => {
        window.location.reload();
      });
    },
    error: err => console.error('Error creating employee', err)
  });
}
}
