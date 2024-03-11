<template>
    <section>
        <div class="content">
            <nav class="breadcrumb bg-white">
                <router-link to="/admin/transactions" class="breadcrumb-item">Transactions</router-link>
                <span class="breadcrumb-item active">View</span>
            </nav>
            <div class="block">
                <div class="block-header block-header-default">
                    <h3 class="block-title">{{txn.mName}} : {{ txn.destinationName }} {{txn.amount}} Status : {{ txn.status==1 ? "Sucess"  : "False "}}</h3>
                </div>
                <div class="block-content block-content-full">
                    <div class="block block-themed block-transparent mb-0">
                        <form @submit.prevent="newTxn()">
                            <div class="form-group row">
                                <div class="col-md-4">
                                    <label for="example-">Date</label>
                                    <input v-model="txn.date" disabled required type="text" class="form-control" id="example" name="example"  />
                                </div>
                                <div class="col-md-4">
                                    <label for="example">Ext Ref.</label>
                                    <input v-model="txn.reference" disabled required type="text" class="form-control" id="example" name="example"  />
                                </div>
                                <div class="col-md-4">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label for="example">Service Type</label>
                                            <input v-model="txn.service" disabled required type="text" class="form-control" id="example" name="example"  />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="example">Ext Ref.</label>
                                            <input v-model="txn.provider" disabled required type="text" class="form-control" id="example" name="example"  />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <label for="example-">M-Ref.</label>
                                    <input v-model="txn.transactionId" disabled required type="text" class="form-control" id="example" name="example"  />
                                </div>
                                <div class="col-md-4">
                                    <label for="example">Safcom No.</label>
                                    <input v-model="txn.mNumber" disabled required type="text" class="form-control" id="example" name="example"  />
                                </div>
                                <div class="col-md-4">
                                    <label for="example">Name</label>
                                    <input v-model="txn.mName" disabled required type="text" class="form-control" id="example" name="example"  />
                                </div>
                                <div class="col-md-4">
                                    <label for="example">Amount</label>
                                    <input v-model="txn.amount" disabled required type="text" class="form-control" id="example" name="example"  />
                                </div>
                                <div class="col-md-4">
                                    <label for="example">Commission</label>
                                    <input v-model="txn.resellerCommission" disabled required type="text" class="form-control" id="example" name="example"  />
                                </div>
                                <div class="col-md-4">
                                    <label for="example">DevFee</label>
                                    <input v-model="txn.devCommission" disabled required type="text" class="form-control" id="example" name="example"  />
                                </div>
                                <div class="col-md-4">
                                    <label for="example">Paybill No.</label>
                                    <input v-model="txn.mpaybillno" disabled required type="text" class="form-control" id="example" name="example"  />
                                </div>
                                <div class="col-md-4">
                                    <label for="example">Paybill Bal.</label>
                                    <input v-model="txn.paybillBal" disabled required type="text" class="form-control" id="example" name="example"  />
                                </div>
                                <div class="col-md-4">
                                    <label for="example">Prev. Bal</label>
                                    <input v-model="txn.previousBalance" disabled required type="text" class="form-control" id="example" name="example"  />
                                </div>  
                                <div class="col-md-4">
                                    <label for="example">S. Name</label>
                                    <input v-model="txn.sourceName" disabled required type="text" class="form-control" id="example" name="example"  />
                                </div>  
                                <div class="col-md-4">
                                    <label for="example">Source Acc.</label>
                                    <input v-model="txn.sourceAccount" disabled required type="text" class="form-control" id="example" name="example"  />
                                </div>  
                                <div class="col-md-4">
                                    <label for="example">Acc. Balance</label>
                                    <input v-model="txn.currentBalance" disabled required type="text" class="form-control" id="example" name="example"  />
                                </div> 
                                <div class="col-md-4">
                                    <label for="example">Dest. Name</label>
                                    <input v-model="txn.destinationName" disabled required type="text" class="form-control" id="example" name="example"  />
                                </div> 
                                <div class="col-md-4">
                                    <label for="example">Dest. Acc</label>
                                    <input v-model="txn.destinationAccount" disabled required type="text" class="form-control" id="example" name="example"  />
                                </div> 
                                <div class="col-md-4">
                                    <label for="example">Status</label>
                                    <input v-model="txn.status" disabled required type="text" class="form-control" id="example" name="example"  />
                                </div> 
                                <div class="col-md-4">
                                    <label for="example">Intiated On</label>
                                    <input v-model="txn.intOn" disabled required type="text" class="form-control" id="example" name="example"  />
                                </div> 
                                <div class="col-md-4">
                                    <label for="example">Updated On</label>
                                    <input v-model="txn.updateOn" disabled required type="text" class="form-control" id="example" name="example"  />
                                </div> 
                                <div class="col-md-4">
                                    <label for="example">Completed On</label>
                                    <input v-model="txn.completedOn" disabled required type="text" class="form-control" id="example" name="example"  />
                                </div>  
                                <div class="col-md-6">
                                    <label for="example">Trans Log</label>
                                    <input v-model="txn.msgLog" disabled required type="text" class="form-control" id="example" name="example"  />
                                </div> 
                                <div class="col-md-6">
                                    <label for="example">Particulars</label>
                                    <input v-model="txn.onErrorMsgLog" disabled required type="text" class="form-control" id="example" name="example"  />
                                </div>   
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                txn: {
                    id: 0,
                    extRef: "",
                    date: "",
                    reference: "",
                    userId: "",
                    accountId: "",
                    sourceName: "",
                    sourceAccount: "",
                    destinationAccount: "",
                    destinationName: "",
                    transactionType: 0,
                    amount: 0,
                    status: 0,
                    resellerCommission: 0,
                    devCommission: 0,
                    previousBalance: 0,
                    currentBalance: 0,
                    msgLog: "",
                    onErrorMsgLog: "",
                    updateOn: "",
                    completedOn: "",
                    syncStatus: false,
                    provider: 0,
                    service: 0,
                    mpaybillno: "",
                    transactionId: "",
                    mName: "",
                    mNumber: "",
                    paybillBal: "",
                    user: {
                        
                    },
                    isModified: false,
                    isDeleted: false,
                    txnMode: "",
                    intOn: "",
                    profit: 0,
                    refereeCommision: 0,
                    refId: null,
                },
            };
        },
        methods: {
            async getTransaction() {
                await this.$http
                    .$get("/Transaction/144874")
                    .then((response) => {
                        console.log(response);
                        this.txn = response
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
        },
        created() {
            this.getTransaction();
        },
    };
</script>
