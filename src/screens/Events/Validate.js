const Validate = (inputs) => {
    const errors = {};
   if(!inputs.eventname){
       errors.eventname = "Event name  is required";

    }
    else if(inputs.eventname.length > 10){
        errors.eventname = "Event name is too long"
    }

    if(!inputs.eventdate) {
        errors.eventdate =  "Event date is required";
    }

    if(!inputs.eventlocation) {
        errors.eventlocation = "Event location is required";
    }
    else if(inputs.eventlocation.length > 10){
        errors.eventlocation = "Location name is too long";
    }
    if (!inputs.contactperson){
        errors.contactperson = "Please provide a contact person";
    }
    if (!inputs.contactnumber) {
        errors.contactnumber = "Phone number is required";
    }
    else if(inputs.contactnumber.length !==10) {
        errors.contactnumber = "Please enter valid mobile number";
    }
    if(!inputs.email) {
        errors.email = "Email is required";
    }
    else if ( ! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputs.email)) {
        errors.email = "Please enter a valid email id"
    }
    if (!inputs.eventtype) {
        errors.eventtype = "Event type is required";
    }
    if(!inputs.description){
        errors.description = "Description is required";
    }
    else if (inputs.description.length < 5) {
        errors.description = "Description is too Short"
    }

    return errors;
}

export default Validate

// eventname, eventdate, eventlocation, contactperson, contactnumber, email, eventtype, description