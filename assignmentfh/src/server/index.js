const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json())

    app.post('/api/register', async (req, res) => {
        console.log(req.body)
    })
    
    app.listen(1440, ()=>{
        console.log('server started on 1440')
    })

