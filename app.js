const express = require('express')
const path = require('path')
const ejs = require("ejs");
const bodyParser = require('body-parser')
const mysql = require('mysql2')
const _ = require('lodash')
// const env = require('dotenv')

const app = express()

// require("dotenv").config()
// const DB_HOST = process.env.DB_HOST
// const DB_USER = process.env.DB_USER
// const DB_PASSWORD = process.env.DB_PASSWORD
// const DB_DATABASE = process.env.DB_DATABASE


// const connection = mysql.createConnection({
//    host: DB_HOST,
//    user: DB_USER,
//    password: DB_PASSWORD,
//    database: DB_DATABASE,
// })


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Harsh@034s',
    database: 'sac'
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/index.html'))`  `
})

app.get('/', (req, res) => {
    res.sendFile('C:\\BTech\\Web Dev\\SAC_dbms\\SAC\\public\\insert.html')` `
})


/* >>>>>>>>>>>>>>>>>>>>>>>>>COMMITTEES<<<<<<<<<<<<<<<<<<<<<<<*/
app.get('/know_more_sports', (req, res) => {
    console.log(req.query)
    if (_.isEmpty(req.query)) {
        console.log("hii")
        res.render('sports', {
            tuples: '',
            columns: '',
            name: ''
        })
    } else {
        let table = req.query.name
        let q
        if (table === 'club') {
            q = 'select * from club where com_id = \'1\' order by club_id'
        } else if (table === 'events') {
            q = 'select * from events as e where e.club_id in (select c.club_id from club as c where com_id = \'1\') order by event_id'
        }
        else if (table === 'equipments') {
            q = 'select * from equipments as e where e.club_id in (select c.club_id from club as c where com_id = \'1\') order by equip_id'
        }
        else if (table === 'Committee_Members') {
            q = 'select s.student_id, s.Name, s.Batch_year, a.post from student as s, SAC_Members as a where s.student_id = a.student_id and a.com_id = \'1\' order by a.post'
        }

        connection.query(q, (err, rows, fields) => {
            // console.log(fields)fd
            // console.log(rows)
           // res.send("hello world")
            res.render('sports', {
                tuples: rows,
                columns: fields,
                name: 'Sports Committee'
            })
        })
    }
})

app.get('/know_more_cult', (req, res) => {
    console.log(req.query)
    if (_.isEmpty(req.query)) {
        console.log("hii")
        res.render('cult', {
            tuples: '',
            columns: '',
            name: ''
        })
    } else {
        let table = req.query.name
        let q
        if (table === 'club') {
            q = 'select * from club where com_id = \'2\' order by club_id'
        } else if (table === 'events') {
            q = 'select * from events as e where e.club_id in (select c.club_id from club as c where com_id = \'2\') order by event_id'
        }
        else if (table === 'equipments') {
            q = 'select * from equipments as e where e.club_id in (select c.club_id from club as c where com_id = \'2\') order by equip_id'
        }
        else if (table === 'Committee_Members') {
            // q = 'select S.student_id , S.Name , S.Batch_year , A.post from student AS S , SAC_Members AS A where S.student_id = A.student_id and A.com_id = \'3\')'

            q = 'select s.student_id, s.Name, s.Batch_year, a.post from student as s, SAC_Members as a where s.student_id = a.student_id and a.com_id = \'2\' order by a.post'
            // q = 'select * from events as e where e.club_id in (select c.club_id from club as c where com_id = \'3\')'
        }
        connection.query(q, (err, rows, fields) => {
            // console.log(fields)
            // console.log(rows)
            res.render('cult', {
                tuples: rows,
                columns: fields,
                name: 'Cultural Committee'
            })
        })
    }
})

app.get('/know_more_tech', (req, res) => {
    console.log(req.query)
    if (_.isEmpty(req.query)) {
        console.log("hii")
        res.render('tech', {
            tuples: '',
            columns: '',
            name: ''
        })
    } else {
        let table = req.query.name
        let q
        if (table === 'club') {
            q = 'select * from club where com_id = \'3\' order by club_id'
        } else if (table === 'events') {
            q = 'select * from events as e where e.club_id in (select c.club_id from club as c where com_id = \'3\') order by event_id'
        }
        else if (table === 'equipments') {
            q = 'select * from equipments as e where e.club_id in (select c.club_id from club as c where com_id = \'3\') order by equip_id'
        }
        else if (table === 'Committee_Members') {
            // q = 'select S.student_id , S.Name , S.Batch_year , A.post from student AS S , SAC_Members AS A where S.student_id = A.student_id and A.com_id = \'3\')'

            q = 'select s.student_id, s.Name, s.Batch_year, a.post from student as s, SAC_Members as a where s.student_id = a.student_id and a.com_id = \'3\' order by a.post'
            // q = 'select * from events as e where e.club_id in (select c.club_id from club as c where com_id = \'3\')'
        }

        connection.query(q, (err, rows, fields) => {
            res.render('tech', {
                tuples: rows,
                columns: fields,
                name: 'Technical Committee'
            })
        })
    }
})

app.get('/know_more_lit', (req, res) => {
    console.log(req.query)
    if (_.isEmpty(req.query)) {
        console.log("hii")
        res.render('lit', {
            tuples: '',
            columns: '',
            name: ''
        })
    } else {
        let table = req.query.name
        let q
        if (table === 'club') {
            q = 'select * from club where com_id = \'4\' order by club_id'
        } else if (table === 'events') {
            q = 'select * from events as e where e.club_id in (select c.club_id from club as c where com_id = \'4\') order by event_id'
        }
        else if (table === 'equipments') {
            q = 'select * from equipments as e where e.club_id in (select c.club_id from club as c where com_id = \'4\') order by equip_id' 
        }
        else if (table === 'Committee_Members') {
            q = 'select s.student_id, s.Name, s.Batch_year, a.post from student as s, SAC_Members as a where s.student_id = a.student_id and a.com_id = \'3\' order by a.post'
        }

        connection.query(q, (err, rows, fields) => {
            res.render('lit', {
                tuples: rows,
                columns: fields,
                name: 'Literature Committee'
            })
        })
    }
})


app.get('/home', (req, res) => {

    res.status(200).render('home', {
        name: '',
        someData: '',
        columns: ''
    })
})

app.get('/home/query', (req, res) => {
    const table = req.query.tablelist
    
    let q = 'select * from ' + table 
    // if(table.toLowerCase() === 'student'){
    //     q = 'select student_id , Name , Batch_year from student'
    // }
    connection.query(q , (err, rows, fields) => {
        if (err) throw err
        res.status(200).render('home', {
            name: table.toString().toLocaleUpperCase(),
            someData: rows,
            columns: fields
        })
    })
})

app.get('/jordaar', (req, res) => {

    res.status(200).render('jordaar', {
        message: '',
        someData: '',
        columns: ''
    })
})

app.get('/jordaar/sql', (req, res) => {
    const query = req.query.sqlQuery ;

    connection.query(query , (err, rows, fields) => {
        if (err){
            res.status(200).render('jordaar', {
                message: 'Error :>' + err.message,
                someData: '',
                columns: ''
            })
        }

        else{
        res.status(200).render('jordaar', {
            message: 'Result of \'' + query + '\':',
            someData: rows,
            columns: fields
        })
        }
    })
})


/* >>>>>>>>>>>>>>>>>>>>>>>>>CLUBS<<<<<<<<<<<<<<<<<<<<<<<*/

app.get('/essence', (req, res) => {
    console.log(req.query)
    if (_.isEmpty(req.query)) {
        console.log("hii")
        res.render('essence', {
            tuples: '',
            columns: '',
            name: ''
        })
    } else {
        let table = req.query.tablelist
        let q
        if (table === 'events') {
            q = 'select * from events where club_id = \'11\''
        } 
        else if (table === 'equipments') {
            q = 'select * from equipments where club_id = \'11\''
        }


        connection.query(q, (err, rows, fields) => {
            res.render('essence', {
                tuples: rows,
                columns: fields,
                name: 'Essence'
            })
        })
    }
})

app.get('/indoor', (req, res) => {
    console.log(req.query)
    if (_.isEmpty(req.query)) {
        console.log("hii")
        res.render('indoor', {
            tuples: '',
            columns: '',
            name: ''
        })
    } else {
        let table = req.query.tablelist
        let q
        if (table === 'events') {
            q = 'select * from events where club_id = \'12\''
        } 
        else if (table === 'equipments') {
            q = 'select * from equipments where club_id = \'12\''
        }


        connection.query(q, (err, rows, fields) => {
            res.render('indoor', {
                tuples: rows,
                columns: fields,
                name: 'Indoor Club'
            })
        })
    }
})

app.get('/utkam', (req, res) => {
    console.log(req.query)
    if (_.isEmpty(req.query)) {
        console.log("hii")
        res.render('utkam', {
            tuples: '',
            columns: '',
            name: ''
        })
    } else {
        let table = req.query.tablelist
        let q
        if (table === 'events') {
            q = 'select * from events where club_id = \'2\''
        } 
        else if (table === 'equipments') {
            q = 'select * from equipments where club_id = \'2\''
        }


        connection.query(q, (err, rows, fields) => {
            res.render('utkam', {
                tuples: rows,
                columns: fields,
                name: 'Utkam - Debate Society'
            })
        })
    }
})

app.get('/stockops', (req, res) => {
    console.log(req.query)
    if (_.isEmpty(req.query)) {
        console.log("hii")
        res.render('stockops', {
            tuples: '',
            columns: '',
            name: ''
        })
    } else {
        let table = req.query.tablelist
        let q
        if (table === 'events') {
            q = 'select * from events where club_id = \'10\''
        } 
        else if (table === 'equipments') {
            q = 'select * from equipments where club_id = \'10\''
        }


        connection.query(q, (err, rows, fields) => {
            res.render('stockops', {
                tuples: rows,
                columns: fields,
                name: 'Stock Ops - The Finance Club'
            })
        })
    }
})

app.get('/argo', (req, res) => {
    console.log(req.query)
    if (_.isEmpty(req.query)) {
        console.log("hii")
        res.render('argo', {
            tuples: '',
            columns: '',
            name: ''
        })
    } else {
        let table = req.query.tablelist
        let q
        if (table === 'events') {
            q = 'select * from events where club_id = \'9\''
        } 
        else if (table === 'equipments') {
            q = 'select * from equipments where club_id = \'9\''
        }


        connection.query(q, (err, rows, fields) => {
            res.render('argo', {
                tuples: rows,
                columns: fields,
                name: 'Argo - The Gaming Club'
            })
        })
    }
})

app.get('/beats', (req, res) => {
    console.log(req.query)
    if (_.isEmpty(req.query)) {
        console.log("hii")
        res.render('beats', {
            tuples: '',
            columns: '',
            name: ''
        })
    } else {
        let table = req.query.tablelist
        let q
        if (table === 'events') {
            q = 'select * from events where club_id = \'6\''
        } 
        else if (table === 'equipments') {
            q = 'select * from equipments where club_id = \'6\''
        }


        connection.query(q, (err, rows, fields) => {
            res.render('beats', {
                tuples: rows,
                columns: fields,
                name: 'Beats - The Dance Club'
            })
        })
    }
})

app.get('/capture', (req, res) => {
    console.log(req.query)
    if (_.isEmpty(req.query)) {
        console.log("hii")
        res.render('capture', {
            tuples: '',
            columns: '',
            name: ''
        })
    } else {
        let table = req.query.tablelist
        let q
        if (table === 'events') {
            q = 'select * from events where club_id = \'7\''
        } 
        else if (table === 'equipments') {
            q = 'select * from equipments where club_id = \'7\''
        }


        connection.query(q, (err, rows, fields) => {
            res.render('capture', {
                tuples: rows,
                columns: fields,
                name: 'Capture - The Photographyu Club'
            })
        })
    }
})

app.get('/cricket', (req, res) => {
    console.log(req.query)
    if (_.isEmpty(req.query)) {
        console.log("hii")
        res.render('cricket', {
            tuples: '',
            columns: '',
            name: ''
        })
    } else {
        let table = req.query.tablelist
        let q
        if (table === 'events') {
            q = 'select * from events where club_id = \'1\''
        } 
        else if (table === 'equipments') {
            q = 'select * from equipments where club_id = \'1\''
        }


        connection.query(q, (err, rows, fields) => {
            res.render('cricket', {
                tuples: rows,
                columns: fields,
                name: 'Cricket Club'
            })
        })
    }
})

app.get('/dcodr', (req, res) => {
    console.log(req.query)
    if (_.isEmpty(req.query)) {
        console.log("hii")
        res.render('dcodr', {
            tuples: '',
            columns: '',
            name: ''
        })
    } else {
        let table = req.query.tablelist
        let q
        if (table === 'events') {
            q = 'select * from events where club_id = \'3\''
        } 
        else if (table === 'equipments') {
        q = 'select * from equipments where club_id = \'3\''
        }

        connection.query(q, (err, rows, fields) => {
            res.render('dcodr', {
                tuples: rows,
                columns: fields,
                name: 'Dcodr - The Coding Club'
            })
        })
    }
})

app.get('/eloquence', (req, res) => {
    console.log(req.query)
    if (_.isEmpty(req.query)) {
        console.log("hii")
        res.render('eloquence', {
            tuples: '',
            columns: '',
            name: ''
        })
    } else {
        let table = req.query.tablelist
        let q
        if (table === 'events') {
            q = 'select * from events where club_id = \'4\''
        } 
        else if (table === 'equipments') {
        q = 'select * from equipments where club_id = \'4\''
        }


        connection.query(q, (err, rows, fields) => {
            res.render('eloquence', {
                tuples: rows,
                columns: fields,
                name: 'Eloquence - Drama Club'
            })
        })
    }
})

app.get('/football', (req, res) => {
    console.log(req.query)
    if (_.isEmpty(req.query)) {
        console.log("hii")
        res.render('football', {
            tuples: '',
            columns: '',
            name: ''
        })
    } else {
        let table = req.query.tablelist
        let q
        if (table === 'events') {
            q = 'select * from events where club_id = \'14\''
        } 
        else if (table === 'equipments') {
        q = 'select * from equipments where club_id = \'14\''
        }

        connection.query(q, (err, rows, fields) => {
            res.render('football', {
                tuples: rows,
                columns: fields,
                name: 'Football Club'
            })
        })
    }
})

app.get('/extra', (req, res) => {
    console.log(req.query)
    if (_.isEmpty(req.query)) {
        console.log("hii")
        res.render('extra', {
            tuples: '',
            columns: '',
            name: ''
        })
    } else {
        let dat = []
        let table = req.query.tablelist
        let q
        if (table === 'annual Budget') {
            q = 'select SUM(BG_assigned) from committee'
        }
        else if (table === 'total members') {
            q = 'select COUNT(student_id) from SAC_Members'
        } 
        else if (table === 'total committee') {
            q = 'select COUNT(com_id) from committee'
        } 
        else if (table === 'total clubs') {
            q = 'select COUNT(club_id) from club'
        } 
        else if (table === 'Upcoming Events') {
        q = 'select * from events where start_date > \'2023-04-28\'' ;
            dat.push(new Date('2023-04-28'))
        }

        connection.query(q, (err, rows, fields) => {
            res.render('extra', {
                tuples: rows,
                columns: fields,
                name: 'Extra'
            })
        })
    }
})

app.get('/genesis', (req, res) => {
    console.log(req.query)
    if (_.isEmpty(req.query)) {
        console.log("hii")
        res.render('genesis', {
            tuples: '',
            columns: '',
            name: ''
        })
    } else {
        let table = req.query.tablelist
        let q
        if (table === 'events') {
            q = 'select * from events where club_id = \'8\''
        } 
        else if (table === 'equipments') {
        q = 'select * from equipments where club_id = \'8\''
        }


        connection.query(q, (err, rows, fields) => {
            res.render('genesis', {
                tuples: rows,
                columns: fields,
                name: 'Genesis - The Art Club'
            })
        })
    }
})

app.get('/vector', (req, res) => {
    console.log(req.query)
    if (_.isEmpty(req.query)) {
        console.log("hii")
        res.render('vector', {
            tuples: '',
            columns: '',
            name: ''
        })
    } else {
        let table = req.query.tablelist
        let q
        if (table === 'events') {
            q = 'select * from events where club_id = \'5\''
        } 
        else if (table === 'equipments') {
        q = 'select * from equipments where club_id = \'5\''
        }


        connection.query(q, (err, rows, fields) => {
            res.render('vector', {
                tuples: rows,
                columns: fields,
                name: 'Vector - The Designing Club'
            })
        })
    }
})

app.get('/volleyball', (req, res) => {
    console.log(req.query)
    if (_.isEmpty(req.query)) {
        console.log("hii")
        res.render('volleyball', {
            tuples: '',
            columns: '',
            name: ''
        })
    } else {
        let table = req.query.tablelist
        let q
        if (table === 'events') {
            q = 'select * from events where club_id = \'13\''
        } 
        else if (table === 'equipments') {
        q = 'select * from equipments where club_id = \'13\''
        }


        connection.query(q, (err, rows, fields) => {
            res.render('volleyball', {
                tuples: rows,
                columns: fields,
                name: 'Volleyball Club'
            })
        })
    }
})

app.get('/vehmenance', (req, res) => {
    console.log(req.query)
    if (_.isEmpty(req.query)) {
        console.log("hii")
        res.render('vehmenance', {
            tuples: '',
            columns: '',
            name: ''
        })
    } else {
        let table = req.query.tablelist
        let q
        if (table === 'events') {
            q = 'select * from events where club_id = \'15\''
        } 
        else if (table === 'equipments') {
        q = 'select * from equipments where club_id = \'15\''
        }


        connection.query(q, (err, rows, fields) => {
            res.render('vehmenance', {
                tuples: rows,
                columns: fields,
                name: 'Vehmenance - The Music Club'
            })
        })
    }
})



/* >>>>>>>>>>>>>>>>>>>>>>>>>EVENT WINNERS<<<<<<<<<<<<<<<<<<<<<<<*/

app.get('/keepup', (req, res) => {
    console.log(req.query)
    if (_.isEmpty(req.query)) {
        console.log("hii")
        res.render('keepup', {
            tuples: '',
            columns: '',
            name: ''
        })
    } else {
        let table = req.query.tablelist
        let q
        if (table === 'winners') {
            q = 'select s.student_id, s.Name, s.Batch_year, w.position from student as s, winners as w where s.student_id = w.winner_id and event_id = \'1\''
        } 

        connection.query(q, (err, rows, fields) => {
            res.render('keepup', {
                tuples: rows,
                columns: fields,
                name: 'Keep Fit Up'
            })
        })
    }
})

app.get('/tttrivia', (req, res) => {
    console.log(req.query)
    if (_.isEmpty(req.query)) {
        console.log("hii")
        res.render('tttrivia', {
            tuples: '',
            columns: '',
            name: ''
        })
    } else {
        let table = req.query.tablelist
        let q
        if (table === 'winners') {
        q = 'select s.student_id, s.Name, s.Batch_year, w.position from student as s, winners as w where s.student_id = w.winner_id and event_id = \'12\' order by w.position'
        }
        connection.query(q, (err, rows, fields) => {
            res.render('tttrivia', {
                tuples: rows,
                columns: fields,
                name: 'TT Trivia'
            })
        })
    }
})

app.get('/nrityakala', (req, res) => {
    console.log(req.query)
    if (_.isEmpty(req.query)) {
        console.log("hii")
        res.render('nrityakala', {
            tuples: '',
            columns: '',
            name: ''
        })
    } else {
        let table = req.query.tablelist
        let q
        if (table === 'winners') {
            q = 'select s.student_id, s.Name, s.Batch_year, w.position from student as s, winners as w where s.student_id = w.winner_id and event_id = \'10\''
        } 

        connection.query(q, (err, rows, fields) => {
            res.render('nrityakala', {
                tuples: rows,
                columns: fields,
                name: 'Nrityakala'
            })
        })
    }
})

app.get('/tradetango', (req, res) => {
    console.log(req.query)
    if (_.isEmpty(req.query)) {
        console.log("hii")
        res.render('tradetango', {
            tuples: '',
            columns: '',
            name: ''
        })
    } else {
        let table = req.query.tablelist
        let q
        if (table === 'winners') {
            q = 'select s.student_id, s.Name, s.Batch_year, w.position from student as s, winners as w where s.student_id = w.winner_id and event_id = \'4\''
        } 

        connection.query(q, (err, rows, fields) => {
            res.render('tradetango', {
                tuples: rows,
                columns: fields,
                name: 'Trade Tango'
            })
        })
    }
})

app.get('/confero', (req, res) => {
    console.log(req.query)
    if (_.isEmpty(req.query)) {
        console.log("hii")
        res.render('confero', {
            tuples: '',
            columns: '',
            name: ''
        })
    } else {
        let table = req.query.tablelist
        let q
        if (table === 'winners') {
            q = 'select s.student_id, s.Name, s.Batch_year, w.position from student as s, winners as w where s.student_id = w.winner_id and event_id = \'7\''
        } 

        connection.query(q, (err, rows, fields) => {
            res.render('confero', {
                tuples: rows,
                columns: fields,
                name: 'Confero'
            })
        })
    }
})

app.listen(3000, () => {
    console.log('app running on port 3000')
})


/* >>>>>>>>>>>>>>>>>>>>>>>ADD<<<<<<<<<<<<<<<<<<<<<<<*/
app.get("/addstudent", function (req, res) {
    var sql1 = "SELECT * FROM student";
    connection.query(sql1, (error, results, fields) => {
        if (error) throw error;
        const student = results;
        res.render("addstudent", { student: student });
    });
});

app.post("/addstudent", function (req, res) {
    var studentid = parseInt(req.body.student_id);
    var name = req.body.Name;
    var Batch = parseInt(req.body.Batch_year);

    var sql =
        "INSERT INTO student(student_id, Name, Batch_year) VALUES (?, ?, ?)";
    var values = [studentid, name, Batch];

    connection.query(sql, values, function (err, result) {
        if (err) {
            console.log("Error adding employee: " + err.message);
        } else { 

            res.send("Student added successfully");
        }
    });
});

app.get("/addequipments", function (req, res) {
    var sql1 = "SELECT * FROM equipments";
    connection.query(sql1, (error, results, fields) => {
        if (error) throw error;
        const equipments = results;
        res.render("addequipments", { equipments: equipments });
    });
});

app.post("/addequipments", function (req, res) {
    var equipid = parseInt(req.body.equip_id);
    var equipname = req.body.equip_name;
    var qty = parseInt(req.body.qty);
    var price = parseInt(req.body.price);
    var clubid = parseInt(req.body.club_id);

    var sql =
        "INSERT INTO equipments(equip_id, equip_name, QTY, price , club_id) VALUES (?, ?, ?, ?, ?)";
    var values = [equipid, equipname, qty, price, clubid];

    connection.query(sql, values, function (err, result) {
        if (err) {
            console.log("Error adding equipments: " + err.message);
        } else { 

            res.send("Equipments added successfully");
        }
    });
});


app.get("/addevents", function (req, res) {
    var sql1 = "SELECT * FROM events";
    connection.query(sql1, (error, results, fields) => {
        if (error) throw error;
        const events = results;
        res.render("addevents", { events: events });
    });
});

app.post("/addevents", function (req, res) {
    var eventid = parseInt(req.body.event_id);
    var eventtype = req.body.event_type;
    var eventname = req.body.event_name;
    var startdate = req.body.start_date;
    var duration = parseInt(req.body.duration);
    var nop = parseInt(req.body.nop);
    var enddate = req.body.end_date;
    var descrip = req.body.descrip;
    var eb = parseInt(req.body.eb);
    var clubid = parseInt(req.body.club_id);

    var sql =
        "INSERT INTO events(event_id, event_type, event_name, start_date, duration, nop, end_date, descrip, event_budget, club_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    var values = [eventid, eventtype, eventname, startdate, duration, nop, enddate, descrip, eb, clubid];

    connection.query(sql, values, function (err, result) {
        if (err) {
            console.log("Error adding events: " + err.message);
        } else { 

            res.send("Events added successfully");
        }
    });
});

app.get("/addsac_members", function (req, res) {
    var sql1 = "SELECT * FROM sac_members";
    connection.query(sql1, (error, results, fields) => {
        if (error) throw error;
        const sac_members = results;
        res.render("addsac_members", { sac_members: sac_members });
    });
});

app.post("/addsac_members", function (req, res) {
    var studentid = parseInt(req.body.student_id);
    var com_id = parseInt(req.body.com_id);
    var post = req.body.post;

    var sql =
        "INSERT INTO sac_members(student_id, com_id, post) VALUES (?, ?, ?)";
    var values = [studentid, com_id, post];

    connection.query(sql, values, function (err, result) {
        if (err) {
            console.log("Error adding member: " + err.message);
        } else { 

            res.send("Member added successfully");
        }
    });
});

app.get("/addwinners", function (req, res) {
    var sql1 = "SELECT * FROM winners";
    connection.query(sql1, (error, results, fields) => {
        if (error) throw error;
        const winners = results;
        res.render("addwinners", { winners: winners });
    });
});

app.post("/addwinners", function (req, res) {
    var event_id = parseInt(req.body.event_id);
    var winner_id = parseInt(req.body.winner_id);
    var post = parseInt(req.body.post);

    var sql =
        "INSERT INTO winners(event_id, winner_id, position) VALUES (?, ?, ?)";
    var values = [event_id, winner_id, post];

    connection.query(sql, values, function (err, result) {
        if (err) {
            console.log("Error adding winner: " + err.message);
        } else { 

            res.send("Winner added successfully");
        }
    });
});

/* >>>>>>>>>>>>>>>>>>>>>>>>>DELETE<<<<<<<<<<<<<<<<<<<<<<<*/
app.get("/deletestudent", function (req, res) {
    var sql1 = "SELECT * FROM student";
    connection.query(sql1, (error, results, fields) => {
        if (error) throw error;
        const student = results;
        res.render("deletestudent", { student: student });
    });
});

app.post("/deletestudent", function (req, res) {
    var studentid = parseInt(req.body.student_id);
    
    var sql = "DELETE FROM student WHERE student_id = ?";
    

    connection.query(sql, [studentid] , function (err, result) {
        if (err) {
            console.log("Error deleting employee: " + err.message);
        } else {
            res.send("Student deleted successfully");
            // res.redirect("/");
        }
    });
});

app.get("/deletesac_members", function (req, res) {
    var sql1 = "SELECT * FROM sac_members";
    connection.query(sql1, (error, results, fields) => {
        if (error) throw error;
        const sac_members = results;
        res.render("deletesac_members", { sac_members: sac_members });
    });
});

app.post("/deletesac_members", function (req, res) {
    var studentid = parseInt(req.body.student_id);
    
    var sql = "DELETE FROM sac_members WHERE student_id = ?";
    

    connection.query(sql, [studentid] , function (err, result) {
        if (err) {
            console.log("Error deleting member " + err.message);
        } else {
            res.send("Member deleted successfully");
            // res.redirect("/");
        }
    });
});


app.get("/deleteequipments", function (req, res) {
    var sql1 = "SELECT * FROM equipments";
    connection.query(sql1, (error, results, fields) => {
        if (error) throw error;
        const equipments = results;
        res.render("deleteequipments", { equipments: equipments });
    });
});

app.post("/deleteequipments", function (req, res) {
    var equipid = parseInt(req.body.equip_id);
    var sql = "DELETE FROM equipments WHERE equip_id = ?";
    

    connection.query(sql, [equipid] , function (err, result) {
        if (err) {
            console.log("Error deleting equipment: " + err.message);
        } else {
            res.send("Equipment deleted successfully");
            // res.redirect("/home");
        }
    });
});

app.get("/deleteevents", function (req, res) {
    var sql1 = "SELECT * FROM events";
    connection.query(sql1, (error, results, fields) => {
        if (error) throw error;
        const events = results;
        res.render("deleteevents", { events: events });
    });
});

app.post("/deleteevents", function (req, res) {
    var eventid = parseInt(req.body.event_id);
    var sql = "DELETE FROM events WHERE event_id = ?";
    

    connection.query(sql, [eventid] , function (err, result) {
        if (err) {
            console.log("Error deleting event: " + err.message);
        } else {
            res.send("Event deleted successfully");
            // res.redirect("/home");
        }
    });
});

app.get("/deletewinners", function (req, res) {
    var sql1 = "SELECT * FROM sac_members";
    connection.query(sql1, (error, results, fields) => {
        if (error) throw error;
        const sac_members = results;
        res.render("deletewinners", { sac_members: sac_members });
    });
});

app.post("/deletewinners", function (req, res) {
    var event_id = parseInt(req.body.event_id);
    var winner_id = parseInt(req.body.winner_id);
    
    var sql = "DELETE FROM winners WHERE event_id = ? and winner_id = ?";
    

    connection.query(sql, [event_id , winner_id] , function (err, result) {
        if (err) {
            console.log("Error deleting Winner " + err.message);
        } else {
            res.send("Winner deleted successfully");
            // res.redirect("/");
        }
    });
});


/* >>>>>>>>>>>>>>>>>>>>>>>>>UPDATE<<<<<<<<<<<<<<<<<<<<<<<*/
app.get("/updatestudent", function (req, res) {
    var sql1 = "SELECT * FROM student";
    connection.query(sql1, (error, results, fields) => {
        if (error) throw error;
        const student = results;
        res.render("updatestudent", { student: student });
    });
});

app.post("/updatestudent", function (req, res) {
    const { student_id, Name, Batch_year } = req.body;

    const sql = `UPDATE student SET Name = ?, Batch_year = ? WHERE student_id = ?`;
    var values = [Name, Batch_year, student_id];
    console.log(values);
    connection.query(sql, values, function (err, result) {
        if (err) {
            console.log("Error updating employee: " + err.message);
        } else { 

            res.send("Student updated successfully");
        }
    });
});


app.get("/updateequipment", function (req, res) {
    var sql1 = "SELECT * FROM equipments";
    connection.query(sql1, (error, results, fields) => {
        if (error) throw error;
        const equipment = results;
        res.render("updateequipment", { equipment: equipment });
    });
});

app.post("/updateequipment", function (req, res) {
    var equipid = parseInt(req.body.equip_id);
    var equipname = req.body.equip_name;
    var qty = parseInt(req.body.qty);
    var price = parseInt(req.body.price);
    var clubid = parseInt(req.body.club_id);

    const sql = `UPDATE equipments SET equip_name = ?, QTY = ?, price = ?, club_id = ? WHERE equip_id = ?`;
    var values = [equipname, qty, price, clubid, equipid];
    console.log(values);
    connection.query(sql, values, function (err, result) {
        if (err) {
            console.log("Error updating equipment: " + err.message);
        } else { 

            res.send("equipment updated successfully");
        }
    });
});


/* >>>>>>>>>>>>>>>>>>>>>>>>>SEARCH<<<<<<<<<<<<<<<<<<<<<<<*/

app.get("/searchstudent", (req, res) => {
    console.log(req.query)
    if (_.isEmpty(req.query)) {
        console.log("hii")
        res.render('searchstudent', {
            tuples: '',
            columns: '',
            name: ''
        })
    }
    else{
    const searchid = req.query.searchid;
    const query = "SELECT * FROM student WHERE student_id LIKE '%" + searchid + "%'";
    connection.query(query, (error, rows, fields) => {
            res.render("searchstudent", { 
                tuples: rows,
                columns: fields,
                name: 'Student'
             });
        
    });
}
});

app.get("/searchcommittee", (req, res) => {
    console.log(req.query)
    if (_.isEmpty(req.query)) {
        console.log("hii")
        res.render('searchcommittee', {
            tuples: '',
            columns: '',
            name: ''
        })
    }
    else{
    const searchname = req.query.searchname;
    const query = "SELECT * FROM committee WHERE com_name LIKE '%" + searchname + "%'";
    connection.query(query, (error, rows,fields) => {
            res.render("searchcommittee", { 
                tuples: rows,
                columns: fields,
                name: 'Committee' });
        
    });
}
});

app.get("/searchclub", (req, res) => {
    console.log(req.query)
    if (_.isEmpty(req.query)) {
        console.log("hii")
        res.render('searchclub', {
            tuples: '',
            columns: '',
            name: ''
        })
    }
    else{
    const searchid = parseInt(req.query.searchid);
    const query = "SELECT * FROM club WHERE club_id LIKE '%" + searchid + "%'";
    connection.query(query, (error, rows,fields) => {
    
        
            res.render("searchclub", { 
                tuples: rows,
                columns: fields,
                name: 'Club' });

    });
}
});

app.get("/searchevents", (req, res) => {
    console.log(req.query)
    if (_.isEmpty(req.query)) {
        console.log("hii")
        res.render('searchevents', {
            tuples: '',
            columns: '',
            name: ''
        })
    }
    else{
    const searchid = req.query.searchid;
    const query = "SELECT * FROM events WHERE event_id LIKE '%" + searchid + "%'";
    connection.query(query, (error, rows,fields) => {
        
            res.render("searchevents", { 
                tuples: rows,
                columns: fields,
                name: 'event' });
        
    });
}
});

app.get("/searchequipments", (req, res) => {
    console.log(req.query)
    if (_.isEmpty(req.query)) {
        console.log("hii")
        res.render('searchequipments', {
            tuples: '',
            columns: '',
            name: ''
        })
    }
    else{
    const searchid = req.query.searchid;
    const query = "SELECT * FROM equipments WHERE equip_id LIKE '%" + searchid + "%'";
    connection.query(query, (error, rows,fields) => {
        
            res.render("searchequipments", { 
                tuples: rows,
                columns: fields,
                name: 'equipments' });
        
    });
}
});


