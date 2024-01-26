# Gestic 


O GestIC é um conceito de ferramenta de gestão que foi desenvolvido para gerar informações úteis sobre os projetos disponíveis para os discentes e auxiliar na tomada de decisões das ACE no IC/UFAL. 
Ele possui uma interface intuitiva, com poucos elementos e propriedades auto descritivas na sua estrutura, que são capazes de fornecer uma navegação simplificada e fluida para os usuários. 

 ## Para executar o código: 

* É necessário possuir o node.js no computador: https://nodejs.org/en/download
* Instalar também o npm: https://docs.npmjs.com/cli/v8/commands/npm-install
* Faça o clone do projeto em uma pasta de sua preferência no computador, exemplo: files;

 ### Frontend
 - No terminal e já dentro da pasta do projeto, navegue até a pasta client, de acordo com o caminho (user/files/gestic/client),
   onde files é a localização que foi feito o clone do projeto;
 - Instale as dependências do projeto com o comando: npm install
 - Importante: é necessário possuir as variáveis de ambiente configuradas no diretório raiz da pasta client (arquivo .env.local com o endereço local da variável REACT_APP_BASE_URL, como exemplo: REACT_APP_BASE_URL=http://localhost:5001)
 - Após isso, vá até o diretório client (user/files/gestic/client) e execute o comando: npm run start 

 ### Backend
 - Navegue até a pasta server,  de acordo com o caminho (user/files/gestic/client);
 - Instale as dependências do projeto com o comando: npm install
 - Importante: é necessário possuir as variáveis de ambiente configuradas no diretório raiz da pasta server (arquivo .env com as variáveis MONGO_URL e PORT). Para mais informações, contatar o administrador.
 - Após isso, vá até o diretório server (user/files/gestic/server) e execute o comando: npm run dev

Após isso, o projeto vai rodar em modo local.



 
