import { Router } from "express";
const router = Router()

router.get('/', (req, res) => res.render('home'))
router.get('/whoweare', (req, res) => res.render('whoweare'))
router.get('/services', (req, res) => res.render('services'))
router.get('/portafolio', (req, res) => res.render('portafolio'))
router.get('/testimonies', (req, res) => res.render('testimonies'))
router.get('/contact', (req, res) => res.render('contact'))

export default router