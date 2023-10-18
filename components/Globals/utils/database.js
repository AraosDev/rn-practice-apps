import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('places.db');

function init() {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS places (
                id INTEGER PRIMARY KEY NOT NULL,
                imageUri TEXT NOT NULL,
                title TEXT NOT NULL,
                address TEXT NOT NULL,
                latitude REAL NOT NULL,
                longitude REAL NOT NULL
                )`,
                [],
                (_, result) => {
                    resolve(result);
                },
                (_, error) => {
                    console.log(error);
                    reject(error);
                },
            )
        });
    });

    return promise;
}

function insertPlace(data) {
    const promise = new Promise((resolve, reject) => {
        console.log(data);
        const { imageUri, latitude, longitude, title, address } = data;
        db.transaction((tx) => {
            tx.executeSql(
                `INSERT INTO places (title, imageUri, latitude, longitude, address) VALUES (?, ?, ?, ?, ?)`,
                [title, imageUri, latitude, longitude, address],
                (_, result) => {
                    resolve(result);
                },
                (_, error) => {
                    console.log(error);
                    reject(error);
                },
            )
        })
    });

    return promise;
}

export function fetchPlaces() {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `SELECT * FROM places`,
                [],
                (_, result) => {
                    resolve(result.rows._array);
                },
                (_, error) => {
                    console.log(error);
                    reject(error);
                },
            )
        })
    });

    return promise;
}

export function fetchPlace(id) {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `SELECT * FROM places WHERE id=?`,
                [id],
                (_, result) => {
                    resolve(result.rows._array);
                },
                (_, error) => {
                    console.log(error);
                    reject(error);
                },
            )
        })
    });

    return promise
}

export const database = {
    init, insertPlace, fetchPlaces, fetchPlace
}