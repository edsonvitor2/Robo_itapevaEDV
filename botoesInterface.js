class Botoes {
    constructor() {
        this.initButtons();
    }

    initButtons() {
        let usuario = document.querySelector("#user");
        let adm = document.querySelector("#adm"); // Corrigido para '#adm'

        adm.addEventListener("click", e => {

            document.querySelector(".login").style.display = 'block';
            document.querySelector(".userRobo").style.display = 'none';

        });

        usuario.addEventListener("click", e => {
            console.log("usuario");
        });
    }

    recebeUsuario(){
        const sql = require('mssql');

        const config = {
            user: 'seu_usuario',
            password: 'sua_senha',
            server: 'DESKTOP-TIKA5NH',
            database: 'testeSQL',
            options: {
                trustServerCertificate: true // Altere esta opção conforme necessário para permitir ou não confiança no certificado do servidor
            }
        };
        
        async function conectarBancoDeDados() {
            try {
                await sql.connect(config);
                console.log('Conexão bem-sucedida com o banco de dados SQL Server');
        
                // Exemplo de consulta SQL
                const resultado = await sql.query`SELECT * FROM sua_tabela`;
                console.log('Resultado da consulta:', resultado.recordset);
        
            } catch (error) {
                console.error('Erro ao conectar ao banco de dados:', error);
            }
        }
        
        conectarBancoDeDados();
        

    }
}

var btn = new Botoes();
