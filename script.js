// Demonstration only: no customer information is transmitted.
const form=document.querySelector('#request-form');
if(form){const pickup=document.querySelector('#pickup');pickup.min=new Date().toLocaleDateString('en-CA');form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;document.querySelector('#form-status').textContent='Your form is filled out correctly! This is a student demo, so no request was sent.';});}
