import { openDb } from "../configDB.js";

export async function createTable() {
  openDb().then((db) => {
    db.exec(
      "CREATE TABLE IF NOT EXISTS Sponsors(id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, nacionalidade TEXT, empresa TEXT)"
    );
    db.exec(
      "CREATE TABLE IF NOT EXISTS Experts(id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, formacao TEXT, telefone TEXT)"
    );
  });
}

export async function insertSponsor(sponsor) {
  openDb().then((db) => {
    db.run("INSERT INTO sponsors(nome,nacionalidade,empresa) values(?,?,?)", [
      sponsor.nome,
      sponsor.nacionalidade,
      sponsor.empresa,
    ]);
  });
}

export async function updateSponsor(sponsor, id) {
  openDb().then((db) => {
    db.run("UPDATE sponsors SET nome=?,nacionalidade=?,empresa=? WHERE id=?", [
      sponsor.nome,
      sponsor.nacionalidade,
      sponsor.empresa,
      id,
    ]);
  });
}

export async function getSponsors() {
  return openDb().then((db) => {
    return db.all("SELECT * from sponsors").then((res) => res);
  });
}

export async function getSponsor(id) {
  return openDb().then((db) => {
    return db.get("SELECT * from sponsors where id=?", [id]).then((res) => res);
  });
}

export async function deleteSponsor(id) {
  return openDb().then((db) => {
    return db.get("DELETE from sponsors where id=?", [id]).then((res) => res);
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
