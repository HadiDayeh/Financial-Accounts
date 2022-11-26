$(document).ready(function () {
    let tblAccounts = $("#tblAccounts");
    tblAccounts.DataTable({
        columnDefs: [
            {
                targets: [0],
                className: 'text-center',
                width: 50,
            }, // ID
            {
                targets: [2],
                className: 'text-right',
                width: 100,
            }, // balance
            {
                targets: [3],
                className: 'text-left',
                width: 75,
            }, // currency
            {
                targets: [4, 5],
                type: 'date-eu',
                width: 100,
            }, // date-eu
        ],
        order: [],
        buttons: [
            {
                extend: "excel",
                text: "<i class='fas fa-file-csv'></i> Excel",
                className: "btn-dataTable bg-gradient-info",
                attr: {
                    title: 'Save as excel file',
                },
                exportOptions: {
                    columns: [0, 1, 2, 3, 4, 5]
                }
            }, // excel
            {
                extend: "pdf",
                text: "<i class='fas fa-file-pdf'></i> PDF",
                className: "btn-dataTable bg-gradient-info",
                attr: {
                    title: 'Save as PDF file',
                },
                exportOptions: {
                    columns: [0, 1, 2, 3, 4, 5]
                }
            }, // pdf
            {
                extend: "print",
                text: "<i class='fas fa-print'></i> Print",
                className: "btn-dataTable bg-gradient-info",
                attr: {
                    title: 'Print',
                },
                exportOptions: {
                    columns: [0, 1, 2, 3, 4, 5],
                    stripHtml: false,
                }
            }, // print
            {
                text: "<i class='fas fa-plus'></i> New Account",
                className: "btn-dataTable bg-gradient-info",
                attr: {
                    title: 'Add new account',
                    onclick: 'location.href = "http://127.0.0.1:8000/accounts/new-account";',
                },
            }, // add new
        ],
        initComplete: function (settings, json) {
            tblAccounts.DataTable().buttons().container().appendTo('#tblAccounts_wrapper .col-md-6:eq(0)');
            $(".btn-dataTable").removeClass("btn-secondary");
            $(".btn-dataTable").addClass("btn-primary");
        },
        lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
        lengthChange: false,
        scrollX: true
    });
})