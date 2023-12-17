import { Router } from "express";
const router = Router()

router.get('/', (request, response) => response.render('index', { title: 'Primer sitio web con NodeJS' }))
router.get('/about', (request, response) => response.render('about', { title: "Acerca de mi" }))
router.get('/contact', (request, response) => response.render('contact'))

export default router