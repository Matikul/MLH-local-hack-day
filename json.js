function process() {
        getJSON('http://localhost:5340/api/values/user/all',
            function(err, data) {
                if (err !== null) {
                    console.log('Something went wrong: ' + err);
                } else {
                    console.log('Your data: ' + data[0].Name);
                }
            });
    }

    var getJSON = function(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
            var status = xhr.status;
            if (status === 200) {
                callback(null, xhr.response);
            } else {
                callback(status, xhr.response);
            }
        };
        xhr.send();
    };