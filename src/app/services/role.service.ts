import { Injectable } from '@angular/core';

export type Role = 'ADMIN' | 'USER';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private role: Role = 'ADMIN'; // default for demo

  setRole(role: Role): void {
    this.role = role;
  }

  getRole(): Role {
    return this.role;
  }

  isAdmin(): boolean {
    return this.role === 'ADMIN';
  }
}
