# App

Find a Friend app.

## RFs (Requisitos funcionais)

- [x] Deve ser possível cadastrar um pet;
- [ ] Deve ser possível listar todos os pets disponíveis para adoção em uma cidade;
- [ ] Deve ser possível filtrar pets por suas características;
- [x] Deve ser possível visualizar detalhes de um pet para adoção;
- [x] Deve ser possível se cadastrar como uma ORG;
- [ ] Deve ser possível realizar login como uma ORG.

## RNs (Regras de negócio)

- [ ] Para listar os pets, obrigatoriamente precisamos informar a cidade;
- [x] Uma ORG precisa ter um endereço e um número de WhatsApp;
- [x] Um pet deve estar ligado a uma ORG;
- [ ] O usuário que quer adotar, entrará em contato com a ORG via WhatsApp;
- [ ] Todos os filtros, além da cidade, são opcionais;
- [ ] Para uma ORG acessar a aplicação como admin, ela precisa estar logada.

## RNFs (Requisitos não-funcionais)

- [x] A senha da ORG precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas as listas de dados precisam estar paginadas com 20 itens por página;
- [ ] A ORG deve ser identificada por um JWT (JSON Web Token).