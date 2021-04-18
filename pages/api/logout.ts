import withSession from '../../lib/session';

export default withSession(async (req, res) => {
    req.session.set('user', null);
    await req.session.save();
    res.status(204).end();
});
