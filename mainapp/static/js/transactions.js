$(document).ready(function () {
    let tblTransactions = $("#tblTransactions");
    tblTransactions.DataTable({
        columnDefs: [
            {
                targets: [0],
                className: 'text-center',
                width: 50,
            }, // ID
            {
                targets: [3],
                className: 'text-right',
                width: 75,
            }, // actions
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
                text: "<i class='fas fa-plus'></i> New Transaction",
                className: "btn-dataTable bg-gradient-info",
                attr: {
                    title: 'Add new transaction',
                    onclick: 'location.href = "http://127.0.0.1:8000/transactions/new-transaction";',
                },
            }, // add new
        ],
        initComplete: function (settings, json) {
            tblTransactions.DataTable().buttons().container().appendTo('#tblTransactions_wrapper .col-md-6:eq(0)');
            $(".btn-dataTable").removeClass("btn-secondary");
            $(".btn-dataTable").addClass("btn-primary");
        },
        lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
        lengthChange: false,
        scrollX: true
    });
})