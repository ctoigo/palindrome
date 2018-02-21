const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/palindrome', (req, res) => {
   var re = /[^A-Za-z0-9]/g;
   var str = req.param('text');
   var len = str.length;
   for (var i = 0; i < len/2; i++) {
       if (str[i] !== str[len - 1 - i]) {
          res.send({ retorno: 400 });
       }
   }
   res.send({ retorno: 200 });
});

app.listen(port, () => console.log('Listening on port ${port}'));
