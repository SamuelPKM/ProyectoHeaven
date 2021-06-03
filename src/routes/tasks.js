const express = require('express');
const router = express.Router();
const Tasks = require('../models/Tasks');

router.get('/', async(req,res) => {
    const tasks = await Tasks.find();
    res.json();
});

router.post('/',async(req,  res)=>{
    const tasks = new Tasks(req.body);
    await tasks.save();
    res.json({
        status: 'Tarea Guardada'
    });
});

router.put('/:id', async(req,res)=> {
    await Tasks.findByIdAndUpdate(req.params.id, req.body)
    //Buscara por id y actualizara
    res.json({
        status: 'Tarea actualizada'
    });
});

router.delete('/:id', async(req,res)=>{
    Tasks.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Tarea Eliminada'
    });
});

module.exports = router;