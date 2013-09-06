var port = process.env.PORT || 3030;
require('derby').run(__dirname + '/lib/server', port);
