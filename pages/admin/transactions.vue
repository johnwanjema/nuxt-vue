<template>
    <div class="content">
              <h2 class="content-heading">Transactions</h2>
              <!-- Dynamic Table Full -->
              <div class="block">
                  <div class="block-header block-header-default">
                      <h3 class="block-title">Transactions</h3>
                  </div>
                  <div class="block-content block-content-full">
                      <!-- DataTables functionality is initialized with .js-dataTable-full class in js/pages/be_tables_datatables.min.js which was auto compiled from _es6/pages/be_tables_datatables.js -->
                      <b-table striped hover :items="transactions"></b-table>
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
              transactions: [
                  { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
                  { age: 21, first_name: "Larsen", last_name: "Shaw" },
                  { age: 89, first_name: "Geneva", last_name: "Wilson" },
                  { age: 38, first_name: "Jami", last_name: "Carney" },
              ],
          };
      },
      methods: {
          async getTransactions() {
              console.log(this.$http);
              await this.$http
                  .$get("/Transaction/GetAllTransactionsPagedSorted")
                  .then((response) => {
                      console.log(response);
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