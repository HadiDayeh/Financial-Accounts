$(document).ready(function () {
    let tblTransactions = $("#tblTransactions");
    tblTransactions.DataTable({
        // ajax: {
        //     url: "/ajax/agents/selectAgents.php",
        //     type: "POST",
        //     dataSrc: "data.agents",
        //     data: {
        //         type: 1,
        //     },
        // },
        // columns: [
        //     {
        //         data: "strImgURL",
        //         render: function (data, type, row) {
        //             return `
        //                 <div class="product-img">
        //                     <img src="/assets/img/agents/customers/`+ data + `" alt="Customer Image" class="img-size-50">
        //                 </div>
        //             `;
        //         }
        //     }, // strImgURL
        //     {
        //         data: "name",
        //     }, // name
        //     {
        //         data: "strPhone",
        //     }, // strPhone
        //     {
        //         data: "strJoinedDate",
        //     }, // strJoinedDate
        //     {
        //         data: "strLastUpdateDate",
        //     }, // strLastUpdate
        //     {
        //         data: null,
        //         render: function (data, type, row) {
        //             const allowDelete = parseInt(row['idAgent']) > 1000;
        //             const allowReceipts = parseInt(row['idAgent']) > 500;

        //             return `
        //                 <div class="row">
        //                     <div class="col text-center">
        //                         <button type="button" class="btn bg-gradient-info btn-xs view-customer" title="View" data-izimodal-open="#modalViewAgent">
        //                             <i class="fas fa-eye"></i>
        //                         </button>

        //                         <button type="button" class="btn bg-gradient-warning btn-xs edit-customer" title="Edit" data-izimodal-open="#modalEditAgent">
        //                             <i class="fas fa-edit"></i>
        //                         </button>

        //                         <button class="btn bg-gradient-danger btn-xs delete-customer ` + (allowDelete == true ? '' : 'd-none') + `" title="Delete" data-izimodal-open="#modalDeleteAgent">
        //                             <i class="fas fa-trash-alt"></i>
        //                         </button>
        //                     </div>
        //                 </div>
        //                 <div class="row mt-1">
        //                     <div class="col text-center">
        //                         <button type="button" class="btn bg-gradient-pink btn-xs customer-receipts ` + (allowReceipts == true ? '' : 'd-none') + `" title="Receipts" data-izimodal-open="#modalCustomerReceipts">
        //                             <i class="fas fa-briefcase"></i>
        //                         </button>

        //                         <button type="button" class="btn bg-gradient-teal btn-xs account-transactions" title="Account Transactions" data-izimodal-open="#modalAccountTransactions">
        //                             <i class="fas fa-credit-card"></i>
        //                         </button>
        //                     </div>
        //                 </div>
        //             `;
        //         }
        //     }, // actions
        // ],
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
                    title: 'Add new user',
                    "data-izimodal-open": "#modalNewAgent",
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