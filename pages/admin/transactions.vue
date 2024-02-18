<template>
    <div class="content">
        <!-- <h2 class="content-heading">Transactions</h2> -->
        <!-- Dynamic Table Full -->
        <div class="block">
            <div class="block-header block-header-default">
                <h3 class="block-title">Transactions</h3>
            </div>
            <div class="block-content block-content-full">
                <!-- DataTables functionality is initialized with .js-dataTable-full class in js/pages/be_tables_datatables.min.js which was auto compiled from _es6/pages/be_tables_datatables.js -->
                <div id="DataTables_Table_1_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <div class="dataTables_length" id="DataTables_Table_1_length">
                                <label>
                                    Show
                                    <select v-model="perPage" name="DataTables_Table_1_length" aria-controls="DataTables_Table_1" class="custom-select custom-select-sm form-control form-control-sm">
                                        <option value="5">5</option>
                                        <option value="8">8</option>
                                        <option value="15">15</option>
                                        <option value="20">20</option>
                                    </select>
                                    entries
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <div id="DataTables_Table_1_filter" class="dataTables_filter">
                                <label>Search:<input v-model="filter" type="search" class="form-control form-control-sm" placeholder="" aria-controls="DataTables_Table_1" /></label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <b-table responsive striped hover show-empty :current-page="currentPage" :items="transactions" :fields="fields"  :per-page="perPage"  :filter="filter" :filterIncludedFields="filterOn" @filtered="onFiltered">
                            <template v-slot:cell(#)="row">
                                <p>{{row.index + 1}}</p>
                            </template>
                            <template v-slot:cell(actions)="row">
                                <router-link :to="'#'" class="btn btn-sm btn-primary"  >
                                    Edit
                                </router-link>
                                <router-link :to="'#'" class="btn btn-sm btn-info"  >
                                    View
                                </router-link>
                                <!-- <button @click="deleteAfh(row.item)" class="btn btn-sm btn-danger"> Delete</button> -->
                            </template>
                            </b-table>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 col-md-9">
                            <!-- <div class="dataTables_info" id="DataTables_Table_1_info" role="status" aria-live="polite">Showing 1 to 8 of 20 entries</div> -->
                        </div>
                        <div class="col-sm-12 col-md-3">
                            <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" aria-controls="my-table"></b-pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                username: "",
                password: "",
                ip: "",
                perPage: 5,
                transactions:[],
                currentPage: 1,
                fields: ['#',,'transactionId', 'mName','destinationAccount','amount','resellerCommission','currentBalance','status','date', { key: 'actions', label: 'Actions' }],
                filter: null,
                filterOn: [],
                totalRows: 1,
            };
        },
        watch: {
            currentPage: {
                handler: function(value) {
                    this.getAFH(value)
                }
            }
        },
        methods: {
            onFiltered(filteredItems) {
            this.totalRows = filteredItems.length;
            this.currentPage = 1
        },
            async getTransactions() {
                console.log(this.$http);
                await this.$http
                    .$get("/Transaction/GetAllTransactionsPagedSorted?PageSize="+this.perPage)
                    .then((response) => {
                        this.transactions = response;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
        },
        created() {
            this.getTransactions();
        },
    };
</script>
