# MiniProj3
Tarefa 4.2: Mini-projeto - desenvolvimento do back-end (PWA)


# Comandos para rodar aplicação:
> npm install
> npm run dev

# Rotas para teste API:

    #Sponsor
        /sponsor         -> Get
        /sponsor/:id     -> GET, DELETE, UPDATE

        /sponsor         -> POST (formato json):
            {
              "nome": "Duarte Jonas",
              "nacionalidade": "Angolana",
              "empresa": "Okutanga"
            }

    #Expert
        /expert         -> GET
        /expert/:id     -> GET, DELETE, UPDATE

        /expert         -> POST (formato json):
            {
            "nome": "Paulino Jonas",
            "formacao": "Ciências da Computação",
            "telefone": "934968956"
            }