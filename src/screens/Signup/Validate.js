const Validate = (inputs) => {
    const errors = {};

    if(!inputs.name){
        errors.name = "Name is required";
 
     }
     if(!inputs.phone){
        errors.phone = "Phone is required";
     }
     else if (inputs.phone.length !==0) {
         errors.phone = "Please enter valid phone number";
     }
     if(!inputs.email){
        errors.email = "Email is required";
 
     }
     else if ( ! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputs.email)) {
        errors.email = "Please enter a valid email id"
    }
     if(!inputs.password){
        errors.password = "Password is required";
 
     }
     else if(inputs.password.length <= 6 ){
         errors.password = "Password should be  at lease 6 characters"
     }
     return errors;

}

export default Validate

// name: '',
//     phone: '',
//     email: '',
//     password: ''