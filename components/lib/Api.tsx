
export const sendContactForm = async(data:any) => 
    fetch('api/ContactDetails',{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            "content-type":"application/json",
            Accept:"application/json",
        },
    })
    