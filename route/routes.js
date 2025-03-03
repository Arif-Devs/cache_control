const express = require('express')


router.get('/health', (_req, res)=>
    res.status(200).json({code: 200, message: 'Health is okay!'})
)