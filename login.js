const submit = document.querySelector('#submit');
const combobox = document.querySelector('#school');

submit.addEventListener('click', () =>{
    const cvalue = combobox.value;
    schoolselect(cvalue)
});

function schoolselect(school) {
    if (school == "dsm")
    {
        window.location.href = 'rules/dsm.html';
    }
    else if (school == "dms")
    {
        window.location.href= "rules/dms.html";
    }
    else if (school == "nosegay")
    {
        window.location.href = "rules/nosegay.html";
    }
    else if (school == "mteworld")
    {
        window.location.href = "rules/mteworld.html";
    }
}