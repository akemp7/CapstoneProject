export default class ApiHelper{

    getContributions(entries) {
        return new Promise(function(resolve, reject) {
            let url = 'http://localhost:5000/api/corpusApi' ;
            let request = new XMLHttpRequest();
            request.open('GET', url, true);
            request.setRequestHeader('Content-Type', 'application/JSON');
            request.onload = function () {
                if(this.status === 200) {
                    resolve(request.response);
                    console.log('It has made a call');
                } else {
                    reject(Error(request.statusText));
                }
            };
            request.send();

        });
    }


postContributions(newEntry, entries) {
    return new Promise(function(resolve, reject){
        let url = 'http://localhost:5000/api/corpusApi';
        let request = new XMLHttpRequest();
        let body = JSON.stringify(newEntry);
        request.open('POST', url, true);
        request.setRequestHeader('Content-Type', 'application/JSON');
        request.onload = function (){
            if(this.status === 200) {
                resolve(request.response);
            } else {
                reject(Error(request.statusText));
            }
        };
            request.send(body);
        });
    }
};
