<template>
    <div id="page-container" class="main-content-boxed side-trans-enabled">
        <!-- Main Container -->
        <main id="main-container" style="min-height: 182px;">
            <!-- Page Content -->
            <div class="bg-gd-dusk">
                <div class="hero-static content content-full bg-white js-appear-enabled animated fadeIn" data-toggle="appear">
                    <!-- Header -->
                    <div class="py-30 px-5 text-center">
                        <a class="link-effect font-w700" href="index.html">
                            <span class="font-size-xl text-primary-dark">KredoIko</span>
                        </a>
                        <h1 class="h2 font-w700 mt-50 mb-10">Welcome</h1>
                        <h2 class="h4 font-w400 text-muted mb-0">Please sign in</h2>
                    </div>
                    <!-- END Header -->

                    <!-- Sign In Form -->
                    <div class="row justify-content-center px-5">
                        <div class="col-sm-8 col-md-6 col-xl-4">
                            <form @submit.prevent="login">
                                <div class="form-group row">
                                    <div class="col-12">
                                        <div class="form-material">
                                            <input v-model="username" required type="text" class="form-control" id="login-username" name="login-username" />
                                            <label for="login-username">Username</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-12">
                                        <div class="form-material">
                                            <input v-model="password" required type="password" class="form-control" id="login-password" name="login-password" />
                                            <label for="login-password">Password</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row gutters-tiny">
                                    <div class="col-12 mb-10">
                                        <button type="submit" class="btn btn-block btn-hero btn-noborder btn-rounded btn-alt-primary"><i class="si si-login mr-10"></i> Sign In</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- END Sign In Form -->
                </div>
            </div>
            <!-- END Page Content -->
        </main>
        <!-- END Main Container -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: "",
                password: "",
            };
        },
        methods: {
             async login() {
                await this.$http
                    .$post("https://apptest.dekioz.co.ke/api/Auth/login", {
                        user: this.username,
                        password: this.password,
                    })
                    .then((response) => {
                        if (response.hasOwnProperty('accessToken')) {
                            localStorage.setItem('accessToken', response.accessToken);
                            // this.$http.setHeader(
                            //     "Authorization",
                            //     `Bearer ${response.accessToken}`
                            // );
                            // this.$router.push('/admin/transactions');
                            window.location.href = '/admin/transactions';
                        } else {
                            alert('Invalid credentials')
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
        },
    };
</script>
