import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss'
import Button from "../button/button.component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}





const SignUpForm = () => {
    const [formFields, setFormFiedls] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields
    const resetFormFields = () => {
        setFormFiedls(defaultFormFields)
    }
   
    const handleSubmit = async (event) => {
        event.preventDefault()
    
        if (password !== confirmPassword) {
            alert("passwords do not match")
            return
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields()
            
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Email already in use')
            }
               
            
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFiedls({ ...formFields, [name]: value })
        
    }
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span> Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <label htmlFor="" >Display Name</label>
        <FormInput
          label='Display Name'
          onChange={handleChange}
          required type="text"
          name="displayName"
          value={displayName} />
        
        <FormInput
          label='Email'
          
          onChange={handleChange}
          required type="email"
          name="email"
          value={email} />
        
        <FormInput
          label = "Password"
          onChange={handleChange}
          required
          type="text"
          name="password"
          value={password} />
        
        <FormInput
          label={'Confirm Password'}
          onChange={handleChange}
          required type="text"
          name="confirmPassword"
          value={confirmPassword} />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
