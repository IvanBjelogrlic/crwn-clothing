import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import './authentication.styles.scss';

const Authenticator = () => {
    return (
        <div className="authenticator-container">            
            <SignInForm />
            <SignUpForm />
        </div>
    );
};

export default Authenticator;