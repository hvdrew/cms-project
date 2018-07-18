import { Router } from 'express';

const router = Router();

// Index Route
router.get('/', (req, res) => {
	res.render('index', { cache: true, title: 'Home' });
});

// Testing Login Page
router.get('/login', (req, res) => {
	res.render('login', { cache: true, title: 'Login' });
});

// Testing Register Page
router.get('/register', (req, res) => {
	res.render('register', { cache: true, title: 'Register' });
});

// 404 Handler
router.get('/404', (req, res) => {
	res.status(404).render('404', { cache: true, title: '404' });
});

// Backup route in case no others are defined
router.get('/:route', (req, res) => {
	res.redirect(301, '404');
});

export const mainRouter = router;
