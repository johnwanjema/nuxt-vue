<template>
    <div class="content">
        <div class="block">
            <div class="block-header block-header-default">
                <h3 class="block-title">Transactions</h3>
                <nuxt-link to="/admin/transactions/new">
                    <button class="btn btn-primary">Add New</button>
                </nuxt-link>
            </div>
            <div class="block-content block-content-full">
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
                                        <option value="50">50</option>
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
                            <template v-slot:cell(date)="row">
                                <p>{{row.item.date | filterDate}}</p>
                            </template>
                            <template v-slot:cell(actions)="row">
                                <router-link :to="'/admin/transactions/' +row.item.id" class="btn btn-sm btn-info"  >
                                    View
                                </router-link>
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
                perPage:5 ,
                transactions:[],
                currentPage: 1,
                fields: ['#',,'transactionId','date', {key:'mName',label:'Name'}, {key:'destinationAccount',label:'To Acc'}, {key:'amount',label:'Amt'}, {key:'resellerCommission',label:'Comm'},'status', { key: 'actions', label: 'Actions' }],
                filter: null,
                filterOn: [],
                totalRows: 1,
            };
        },
        watch: {
            currentPage: {
                handler: function(value) {
                    // this.getAFH(value)
                }
            }
        },
        methods: {
            onFiltered(filteredItems) {
            this.totalRows = filteredItems.length;
            this.currentPage = 1
        },
            async getTransactions() {
                await this.$http
                    .$get("/Transaction/GetAllTransactionsPagedSorted")
                    .then((response) => {
                        this.transactions = response;
                        console.log(response);
                        console.log(this.transactions.length);
                        this.totalRows = this.transactions.length;
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
