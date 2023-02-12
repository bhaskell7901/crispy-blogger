const router = require('express').Router();
const { Account, Blog, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Dashboard page
router.get('/', withAuth, async (req, res) => {
    try {
        console.log(req.session.userId);
        const blogData = await Blog.findAll({
            include: [{ model: Account }, 
                { model: Comment, 
                    include: [{ model: Account }],
                }],
            where: {
                account_id: req.session.userId
            }
        });
        const blogs = blogData.map((blog) => blog.get({ plain: true }));
        res.render('dashboard', {
            blogs,
            loggedIn: req.session.loggedIn
          });

    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.create({
                account_id: req.session.userId,
                title: req.body.title,
                message: req.body.message
        });
        res.status(200).json(blogData);

    } catch (err) {
        res.status(500).json(err);
    }
    
    res.status(200).json();
    
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.update({
                title: req.body.title,
                message: req.body.message
        },
        {
            where: { id: req.params.id }
        });
        res.status(200).json(blogData);

    } catch (err) {
        res.status(500).json(err);
    }
    
    res.status(200).json();
    
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.destroy({
            where: { id: req.params.id }
        });

        res.status(200).json(blogData);

    } catch (err) {
        res.status(500).json(err);
    }
    
    res.status(200).json();
    
});

module.exports = router;