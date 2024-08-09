class UserController {
    constructor(app) {
      this.app = app;
    }
  
  
    boot() {
      this.app.get('/users', this.getUsers);
      this.app.post('/users', this.createUser);
      this.app.get('/users/:id', this.getUserByID);
      this.app.put('/users/:id', this.updateUser);
      this.app.delete('/users/:id', this.deleteUser);
    }
  
    getUsers(req, res) {
  
    }
  
    createUser(req, res) {
  
    }
  
    getUserByID(req, res) {
  
    }
  
    updateUser(req, res) {
  
    }
  
    deleteUser(req, res) {
  
    }
  }