import { openDb } from "../configDB.js";
export async function createTableUser() {
  openDb().then((db) => {
   
    db.exec(
      "CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, email TEXT, palavrapasse TEXT)"
    );
  });
}

export async function insertUser(user) {
  openDb().then((db) => {
    db.run("INSERT INTO users(nome,email,palavrapasse) values(?,?,?)", [
      user.nome,
      user.email,
      user.palavrapasse,
    ]);
  });
}

export async function updateUser(user, id) {
  openDb().then((db) => {
    db.run("UPDATE users SET nome=?,email=?,palavrapasse=? WHERE id=?", [
      user.nome,
      user.email,
      user.palavrapasse,
      id,
    ]);
  });
}
export async function getUsers() {
  return openDb().then((db) => {
    return db.all("SELECT * from users").then((res) => res);
  });
}

export async function getUser(id) {
  return openDb().then((db) => {
    return db.get("SELECT * from users where id=?", [id]).then((res) => res);
  });
}

export async function deleteUser(id) {
  return openDb().then((db) => {
    return db.get("DELETE from users where id=?", [id]).then((res) => res);
  });
}
