import Input from '../Components/Input';
import { useForm } from 'react-hook-form';

function SignUp() {
    const { control, handleSubmit, formState: { errors } } = useForm({mode:"onChange"}); 
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input label="Username" name="username" type="text" placeholder="Enter your username" control={control} errors={errors} />
            <Input label="Email" name="email" type="email" placeholder="Enter your email" control={control} errors={errors} />
            <Input label="Password" name="password" type="password" placeholder="Enter your password" control={control} errors={errors}  />
            <button type="submit">Sign Up</button>
        </form>
    );
    }

export default SignUp;
