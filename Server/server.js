let express = require('express');
let app = express();
let port = process.env.PORT || 5001;
app.use(express.static('server/public'));
app.listen(port, () => {
    console.log('listening on port', port);
  });