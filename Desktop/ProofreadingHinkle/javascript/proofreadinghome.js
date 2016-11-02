function sendMail() {
    var link = 'mailto:hello@domain.com?subject=Message from '
             +document.getElementById('email_address').value
             +'&body='+document.getElementById('email_address').value;
    window.location.href = link;
    
}


$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
    
});

