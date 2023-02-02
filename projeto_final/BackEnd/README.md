# Projeto Final

# Comandos para rodar aplicação:
> npm install
> npm run dev

# Rotas para teste API:

    #User
        /user         -> Get
        /user/:id     -> GET, DELETE, UPDATE

        /user         -> POST (formato json):
            {
              "nome": "Duarte Jonas",
              "email": "jonas@gmail.com",
              "palavrapasse": "jonas123"
            }

    #Jogo
        /jogo         -> GET
        /jogo/:id     -> GET, DELETE, UPDATE

        /jogo         -> POST (formato json):
            {
            "jogador1": "Paulino Jonas",
            "jogador2": "José da Silva",
            "resultado": "0",
            "tempo_total": "5",
            "tempo_jogo": "3",
            "estado": "Concluído",
            "user_id": "1"
            }
   