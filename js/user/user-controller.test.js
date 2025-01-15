const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  test('Encontrar un usuario por correo electrónico', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    let BuscarUser = userController.findByEmail("santiago@generation.org");
    expect(BuscarUser).toStrictEqual(user);
});



test('Encontrar un usuario por el ID', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    let BuscarUser = userController.findById(1234);
    expect(BuscarUser).toStrictEqual(user);
});