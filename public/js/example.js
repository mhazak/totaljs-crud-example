PLUGIN('example', exports => {
    exports.read = () => {
        AJAX('GET /api/example/read/', res => {
            console.log({read: res});
        });
    };

    exports.create = () => {
        const model = {
            serial_number: GET('serial_number')
        };
        console.log(model);
        AJAX('POST /api/example/create/', model, res => {
            console.log({create: res});
        });
    };

    exports.update = () => {
        const model = {
            serial_number: GET('serial_number')
        };
        AJAX('POST /api/example/update/', model, res => {
            console.log({update: res});
        });
    };

    exports.remove = () => {
        const model = {
            serial_number: GET('serial_number')
        };
        AJAX('POST /api/example/remove/', model, res => {
            console.log({remove: res});
        });
    };
})