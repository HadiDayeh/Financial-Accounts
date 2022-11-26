$(document).ready(function () {
    $("#btnDelete").click(function () {
        accID = $(this).attr('account-id')
        if (confirm("Are you sure?") && accID != null) {
            window.location.assign("../delete/"+accID)
        }
    });
})