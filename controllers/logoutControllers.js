module.exports = {


userLogout: function (req, res){

	req.logOut();
    req.session.destroy(function (err) {
        if (err) {
            console.log(err)
        }
           res.redirect('/'); //Inside a callback… bulletproof!
       });
    }
};