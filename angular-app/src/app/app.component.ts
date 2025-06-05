import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  active: boolean;
}

@Component({
  selector: 'app-root',
  template: `
    <div class="angular-app">
      <h2>Angular Micro Frontend</h2>
      <div class="users-container">
        <h3>User Management</h3>
        <table class="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let user of users">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.role }}</td>
              <td>
                <span [class]="user.active ? 'status active' : 'status inactive'">
                  {{ user.active ? 'Active' : 'Inactive' }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .angular-app {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    .users-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }
    .users-table th, .users-table td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
    .users-table th {
      background-color: #f2f2f2;
    }
    .status {
      padding: 5px 10px;
      border-radius: 4px;
      font-size: 0.8em;
    }
    .active {
      background-color: #4CAF50;
      color: white;
    }
    .inactive {
      background-color: #f44336;
      color: white;
    }
  `]
})
export class AppComponent {
  users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', active: true },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', active: true },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer', active: false },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', active: true }
  ];
}