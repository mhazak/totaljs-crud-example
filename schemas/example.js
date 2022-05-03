const url = '/someurlpath/';

NEWSCHEMA('Example', (schema) => {
    schema.define('serial_number', String);

    schema.setRead($ => {
        console.log('volam schema.setRead', { model: $.model });
        RESTBuilder.GET(`${CONF.backend}${url}read`).callback((err, res, out) => {
            if (err || out.status > 200) {
                console.log({ err, out });
                return $.invalid(err);
            }
            $.callback(res);
        });
    });

    schema.setInsert($ => {
        console.log('volam schema.setInsert', { model: $.model });
        RESTBuilder.POST(`${CONF.backend}${url}create`, $.model).callback((err, res, out) => {
            if (err || out.status > 200) {
                console.log({ err, out });
                return $.invalid(err);
            }
            $.callback(res);
        });
    });

    schema.setUpdate($ => {
        console.log('volam schema.setUpdate', { model: $.model });
        RESTBuilder.POST(`${CONF.backend}${url}update`, $.model).callback((err, res, out) => {
            if (err || out.status > 200) {
                console.log({ err, out });
                return $.invalid(err);
            }
            $.callback(res);
        });
    });

    schema.setRemove($ => {
        console.log('volam schema.setRemove', { model: $.model });
        RESTBuilder.POST(`${CONF.backend}${url}remove`, $.model).callback((err, res, out) => {
            if (err || out.status > 200) {
                console.log({ err, out });
                return $.invalid(err);
            }
            $.callback(res);
        });
    });
});