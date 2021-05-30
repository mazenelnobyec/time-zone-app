const request = require('request');

request('https://timezoneapi.io/api/timezone/?Europe/Paris&token=jkndKrtHFpYb',(err,res,dat)=>{

    let data = JSON.parse(dat);

    if (data.meta.code == '200') {
        console.log(data);

        var location = data.data.timezone.location;

        var time = data.data.timezone.datetime.data_time_txt;
    }

});