import * as firebase from 'firebase';

firebase.initializeApp({
    databaseURL: "https://kline-1f82d.firebaseio.com"
});

function date() {
    let d = new Date(),
        year = d.getFullYear(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('');
}

firebase.database().ref('domains/' + btoa(document.domain) + '/' + date()).transaction(function (count) {
    return count + 1;
});
