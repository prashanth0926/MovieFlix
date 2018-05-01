#!/usr/bin/env node

const cmd = require('node-cmd');
const cmd1 = require('node-cmd');
const cmd2 = require('node-cmd');
let data_line = '',
    data_line1 = '',
    data_line2 = '';

const startUI = () => {
    const uiRef = cmd2.get(
        `cd mpbot
        cd MovieFlix
        cd client
        cd Layout
        cd MovieFlix_UI
        gulp serve`
    );
    data_line = '';
    uiRef.stdout.on(
        'data',
        function (data) {
            data_line += data;
            if (data_line[data_line.length - 1] == '\n') {
                console.log(data_line);
            }
        }
    );
}

const startServer = () => {
    const serverRef = cmd1.get(
        `cd mpbot
        cd MovieFlix
        cd client
        cd Server
        cd MovieFlix_REST_API
        npm start`
    );
    data_line1 = '';
    serverRef.stdout.on(
        'data',
        function (data) {
            if(!data_line1) startUI();
            data_line1 += data;
            if (data_line1[data_line1.length - 1] == '\n') {
                console.log(data_line1);
            }
        }
    );
}

const startDB = () => {
    const mongoRef = cmd2.get(`sudo mongod`);
    mongoRef.stdout.on(
        'data',
        function (data) {
            data_line2 += data;
            if (data_line2[data_line2.length - 1] == '\n') {
                console.log(data_line2);
            }
        }
    );
}

const installUIDep = () => {
    const uiDepRef = cmd1.get(
        `cd mpbot
        cd MovieFlix
        cd client
        cd Layout
        cd MovieFlix_UI
        npm i
        bower install`, (err) => {
            if(!err) startUI();
        }
    );
    uiDepRef.stdout.on(
        'data',
        function (data) {
            data_line1 += data;
            if (data_line1[data_line1.length - 1] == '\n') {
                console.log(data_line1);
            }
        }
    );
};

const installServerDep = () => {
    const serverDepRef = cmd.get(
        `cd mpbot
        cd MovieFlix
        cd client
        cd Server
        cd MovieFlix_REST_API
        npm i`, (err) => {
            if(!err) startServer();
        }
    );
    serverDepRef.stdout.on(
        'data',
        function (data) {
            data_line += data;
            if (data_line[data_line.length - 1] == '\n') {
                console.log(data_line);
            }
        }
    );
};

const cloneRepo = (sshClone) => {
    cmd.get(
        `cd mpbot
        git clone ${sshClone}
        cd MovieFlix
        git checkout module-complete`,
        (err, stdout, stderr) => {
            console.log('cloning repos...', stdout || stderr);
            if (!err) {
                startDB();
                installServerDep();
                installUIDep();
            };
        }
    )
};

const createDir = () => cmd.get(
    `mkdir mpbot`,
    (err, stdout, stderr) => {
        console.log('creating bot directory...', (stdout || stderr));
        if (!err) cloneRepo('git@github.com:prashanth0926/MovieFlix.git');
    }
);

if(process.argv[2] === 'build') {
    createDir();
} else {
    startDB();
    startServer();
    startUI();
}