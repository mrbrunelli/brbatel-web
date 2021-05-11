## BrBatel Web Front-end

### Requisitos
1. Docker
2. docker-compose
3. Back-end iniciado ([Link da API Backend aqui](https://github.com/mrbrunelli/brbatel-api))

### Como executar
1. Crie um arquivo .env na raíz do projeto conforme o .env.example

2. Executar o docker-compose
```sh
docker-compose up -d
```

3. A aplicação estará disponível em [http://localhost:3000/](http://localhost:3000/)

### Objetivos propostos
- [ ] Desenvolver os componentes
necessários.
- [x] Construir o layout da aplicação.
- [x] Criar listagem em estrutura de
cards
- [ ] Possibilitar a paginação e a
pesquisa dessa listagem utilizando a
API.
- [ ] Criar tela para o cadastro da
empresa
- [x] Possibilitar a visualização detalhada
da empresa ao clicar no card.
- [x] Utilizar a logo e cores da BrBatel
(abaixo).

### Objetivos opcionais
- [ ] Adicionar autenticação na aplicação
- [ ] Criar outra forma de visualizar as empresas, ao invés de cards, fazer em tabela.

### Tecnologias obrigatórias
- [x] React + Typescript