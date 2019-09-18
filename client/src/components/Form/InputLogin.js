import React from 'react';


class Login extends React.Component {
    return(){
        <React.Fragment>
            <form class = "mx-auto">
                <div class="form-group">
                    <input type="userName" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username"></input>
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                </div>
            </form>
        </React.Fragment>
    };
}

export default Login;