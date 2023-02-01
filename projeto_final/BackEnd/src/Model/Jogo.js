import { openDb } from "../configDB.js";
export async function createTableJogo() {
  openDb().then((db) => {
    db.exec(
      "CREATE TABLE IF NOT EXISTS Jogos(id INTEGER PRIMARY KEY AUTOINCREMENT, jogador1 INTEGER, jogador2 INTEGER, resultado varchar(50),tempo_total INTEGER, tempo_jogo INTEGER, estado varchar(50) default 'EM ESPERA', user_id INTEGER,  data varchar(50))"
    );
  });
  return true;
}
export async function insertJogo(jogo) {
  openDb().then((db) => {
    db.run(
      "INSERT INTO Jogos(jogador1,jogador2,resultado,tempo_total,tempo_jogo) values(?,?,?,?,?)",
      [
        jogo.jogador1,
        jogo.jogador2,
        jogo.resultado,
        jogo.tempo_total,
        jogo.tempo_jogo,
      ]
    );
  });
  return true;
}
export async function updateJogo(jogo, id) {
  openDb().then((db) => {
    db.run(
      "UPDATE Jogos SET jogador1=?,jogador2=?,resultado=?,tempo_total=?,tempo_jogo=?, estado=? WHERE id=?",
      [
        jogo.jogador1,
        jogo.jogador2,
        jogo.resultado,
        jogo.tempo_total,
        jogo.tempo_jogo,
        jogo.estado,
        id,
      ]
    );
  });
  return true;
}
export async function getJogos() {
  return openDb().then((db) => {
    return db.all("SELECT * from jogos").then((res) => res);
  });
}

export async function getJogo(id) {
  return openDb().then((db) => {
    return db.get("SELECT * from jogos where id=?", [id]).then((res) => res);
  });
}

export async function deleteJogo(id) {
  return openDb().then((db) => {
    return db.get("DELETE from jogos where id=?", [id]).then((res) => res);
  });
}
