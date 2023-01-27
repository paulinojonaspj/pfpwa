import { openDb } from "../configDB.js";

export async function createTableSponsor() {
  openDb().then((db) => {
    db.exec(
      "CREATE TABLE IF NOT EXISTS Sponsors(id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, nacionalidade TEXT, empresa TEXT)"
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