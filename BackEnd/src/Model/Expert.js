import { openDb } from "../configDB.js";
export async function createTableExpert() {
  openDb().then((db) => {
    db.exec(
      "CREATE TABLE IF NOT EXISTS Experts(id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, formacao TEXT, telefone TEXT)"
    );
  });
}

export async function insertExpert(expert) {
  openDb().then((db) => {
    db.run("INSERT INTO experts(nome,formacao,telefone) values(?,?,?)", [
      expert.nome,
      expert.formacao,
      expert.telefone,
    ]);
  });
}

export async function updateExpert(expert, id) {
  openDb().then((db) => {
    db.run("UPDATE experts SET nome=?,formacao=?,telefone=? WHERE id=?", [
      expert.nome,
      expert.formacao,
      expert.telefone,
      id,
    ]);
  });
}
export async function getExperts() {
  return openDb().then((db) => {
    return db.all("SELECT * from experts").then((res) => res);
  });
}

export async function getExpert(id) {
  return openDb().then((db) => {
    return db.get("SELECT * from experts where id=?", [id]).then((res) => res);
  });
}

export async function deleteExpert(id) {
  return openDb().then((db) => {
    return db.get("DELETE from experts where id=?", [id]).then((res) => res);
  });
}
