<template>
    <section>
        <div class="content">
            <nav class="breadcrumb bg-white">
                <router-link to="/admin/transactions" class="breadcrumb-item">Transactions</router-link>
                <span class="breadcrumb-item active">New</span>
            </nav>
            <div class="block">
                <div class="block-header block-header-default">
                    <h3 class="block-title"> New Transaction</h3>
                </div>
                <div class="block-content block-content-full">
                    <div class="block block-themed block-transparent mb-0">
                        <form @submit.prevent="newTxn()">
                            <div class="form-group row">
                                <div class="col-md-6">
                                    <label for="example-nf-email">Mpaybillno</label>
                                    <input v-model="mpaybillno" required type="text" class="form-control" id="example-nf-email" name="example-nf-email" placeholder="Enter Mpaybillno">
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-6">
                                    <label for="example-nf-email">AccountNumber</label>
                                    <input v-model="accountNumber" required type="text" class="form-control" id="example-nf-email" name="example-nf-email" placeholder="Enter AccountNumber">
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-6">
                                    <label for="example-nf-email">Amount</label>
                                    <input v-model="amount"  required type="text" class="form-control" id="example-nf-email" name="example-nf-email" placeholder="Enter Amount">
                                </div>
                            </div>
                            
                            <button type="submit" class="btn btn-primary">Add TXN</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import { Form, HasError, AlertError } from 'vform'
export default {
    data() {
        return {
            accountNumber: '',
            mpaybillno: '',
            amount: '',
            userId:'',
        }
    },
    methods: {
        newTxn() {
            this.$http.$post("/Transaction/deposit",{
                accountNumber: this.accountNumber,
                mpaybillno: this.mpaybillno,
                amount: this.amount,
            }).then((response) => {
                console.log(response);
                if(response.isSuccess){
                    alert('Txn created')
                }else{
                    alert(response.message)
                }
            })
            .catch((error) => {
                console.log(error);
            });
        },
    },
}
</script>