$(document).ready(function () {

    // the form action only has the course id. It needs also the course_section ID, but that's determined by the hash of the url:
    var course_section = document.location.hash.replace("#", "");
    var form_action = $('form#login').attr('action') + "?" + course_section;
    $('form#login').attr('action', form_action);

    /* "login as guest" button used to work only with regular guest, not supreguest,
    * so just fill the input fields with guest value, and invoke the submit.
     * In 11/2018 changed to super guest. */
    // add the url to be redirected when guest button is clicked
    var guest_redirect = "window.parent.location.href='https://campus.ort.org.il/tools/anonymous/generateuser.php?";
    if(course_section){
        guest_redirect = guest_redirect + course_section + "'";
    }
    else{
        guest_redirect = guest_redirect + "courseid=266'";
    }
    $('#guestbtn').attr('onclick',guest_redirect);
});
