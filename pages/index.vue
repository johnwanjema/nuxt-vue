<template>
  <div id="page-container" class="main-content-boxed">
      <main id="main-container">
          <div class="bg-gd-dusk">
              <div class="hero-static content content-full bg-body-extra-light">
                  <div class="py-4 px-1 text-center mb-4">
                      <a class="link-fx fw-bold" href="index.html">
                          <i class="fa fa-fire"></i>
                          <span class="fs-4 text-body-color">code</span><span class="fs-4">base</span>
                      </a>
                      <h1 class="h3 fw-bold mt-5 mb-2">Welcome to Your Dashboard</h1>
                      <h2 class="h5 fw-medium text-muted mb-0">Please sign in</h2>
                  </div>
                  <div class="row justify-content-center px-1">
                      <div class="col-sm-8 col-md-6 col-xl-4">
                          <form class="js-validation-signin" action="be_pages_auth_all.html" method="POST">
                              <div class="form-floating mb-4">
                                  <input type="text" class="form-control" id="login-username" name="login-username" placeholder="Enter your username" />
                                  <label class="form-label" for="login-username">Username</label>
                              </div>
                              <div class="form-floating mb-4">
                                  <input type="password" class="form-control" id="login-password" name="login-password" placeholder="Enter your password" />
                                  <label class="form-label" for="login-password">Password</label>
                              </div>
                              <div class="row g-sm mb-4">
                                  <div class="col-12 mb-2">
                                      <button type="submit" class="btn btn-lg btn-alt-primary w-100 py-3 fw-semibold">
                                          Sign In
                                      </button>
                                  </div>
                                  <div class="col-sm-6 mb-1">
                                      <a class="btn btn-alt-secondary w-100" href="op_auth_signup.html">
                                          New Account
                                      </a>
                                  </div>
                                  <div class="col-sm-6 mb-1">
                                      <a class="btn btn-alt-secondary w-100" href="op_auth_reminder.html">
                                          Forgot password
                                      </a>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </main>
  </div>
</template>

<script>
export default {
    data() {
        return {
            // form: new Form({
            //     username:'',
            //     password:'',
            // }),
        }
    },
    // watch: {
    //     currentPage: {
    //         handler: function(value) {
    //             this.getAFHSMessages(value)
    //         }
    //     }
    // },
    methods: {
        login() {
            axios.get('/api/afhs').then(({ data }) => {
                this.afhs = data.data;
                if (data.data.length > 0) { 
                    this.form.afh_id = data.data[0].id;
                    this.getAFHStaff();
                    this.getAFHSMessages();
                }
            }).catch((error) => {
                console.log(error);
            });
        },
    },
    created() {
      console.log('users')
    }
}
</script>
