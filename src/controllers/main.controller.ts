import { Router } from 'express';

const router = Router();

// Index Route
router.get('/', (req, res) => {
	res.render('index', { cache: true });
});

// 404 Handler
router.get('/404', (req, res) => {
	res.status(404).render('404', { cache: true });
});

// Backup route in case no others are defined
router.get('/:route', (req, res) => {
	res.redirect(301, '/404');
});

export const mainRouter = router;
