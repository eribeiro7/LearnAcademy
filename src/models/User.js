const db = require('../../db');

module.exports = {
    all: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM users', (error, results)=>{
                if(error){
                    rejeitado(error);
                    return;
                }else{ aceito(results);}
            });
        });
    },
    find: (id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM users WHERE ID = ?', [id], (error, results)=>{
                if(error){
                    rejeitado(error);
                    return;
                }
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    },
    store: (fullname, username, password, created_at, updated_at) => {
        return new Promise((aceito, rejeitado) => {
            db.query('INSERT INTO users (FULLNAME, USERNAME, PASSWORD, CREATED_AT, UPDATE_AT) VALUES (?, ?, ?, ?, ?)', [fullname, username, password, created_at, updated_at], (error, results)=>{
                if(error){
                    rejeitado(error);
                    return;
                }
                aceito(results.store);
            });
        });
    },
    update: (id, fullname, username, password, created_at, updated_at) => {
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE users SET FULLNAME = ?, USERNAME = ?, PASSWORD = ?, CREATED_AT = ?, UPDATE_AT = ? WHERE ID = ?', [fullname, username, password, created_at, updated_at, id], (error, results)=>{
                if(error){
                    rejeitado(error);
                    return;
                }
                aceito(results.update);
            });
        });
    },
    destroy: (id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM users where ID = ?', [id], (error, results)=>{
                if(error){
                    rejeitado(error);
                    return;
                }else{ aceito(results);}
            });
        });
    },
    findByUsername: (username) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM users WHERE USERNAME = ?', [username], (error, results)=>{
                if(error){
                    rejeitado(error);
                    return;
                }
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    }
};