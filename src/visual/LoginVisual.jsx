import LoginForm from "components/FormLogIn/FormLogIn";
import s from '../components/FormLogIn/FormLogIn.module.css';

export default function LoginView(){
    return (
        <div className={s.container}>
            <h1>Login to view your contacts</h1>
            <LoginForm />
        </div>
    );
}