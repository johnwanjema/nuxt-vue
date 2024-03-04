<template>
  <div id="page-container" class="sidebar-o enable-page-overlay side-scroll page-header-modern main-content-boxed side-trans-enabled">
      <div id="page-overlay"></div>
      <nav id="sidebar">
          <div class="sidebar-content">
              <!-- Side Header -->
              <div class="content-header content-header-fullrow px-15">
                  <!-- Mini Mode -->
                  <div class="content-header-section sidebar-mini-visible-b">
                      <!-- Logo -->
                      <span class="content-header-item font-w700 font-size-xl float-left animated fadeIn"> <span class="text-dual-primary-dark">c</span><span class="text-primary">b</span> </span>
                      <!-- END Logo -->
                  </div>
                  <!-- END Mini Mode -->

                  <!-- Normal Mode -->
                  <div class="content-header-section text-center align-parent sidebar-mini-hidden">
                      <!-- Close Sidebar, Visible only on mobile screens -->
                      <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
                      <button type="button" class="btn btn-circle btn-dual-secondary d-lg-none align-v-r" data-toggle="layout" data-action="sidebar_close">
                          <i class="fa fa-times text-danger"></i>
                      </button>
                      <!-- END Close Sidebar -->

                      <!-- Logo -->
                      <div class="content-header-item">
                          <a class="link-effect font-w700" href="#">
                              <span class="font-size-xl text-dual-primary-dark">Kredo</span><span class="font-size-xl text-primary">Iko</span>
                          </a>
                      </div>
                      <!-- END Logo -->
                  </div>
                  <!-- END Normal Mode -->
              </div>
              <!-- END Side Header -->

              <!-- Side User -->
              <div class="content-side content-side-full content-side-user px-10 align-parent">
                  <!-- Visible only in mini mode -->
                  <div class="sidebar-mini-visible-b align-v animated fadeIn">
                      <img class="img-avatar img-avatar32" :src="require('@/assets/media/avatars/avatar15.jpg')" alt="" />
                  </div>
                  <!-- END Visible only in mini mode -->

                  <!-- Visible only in normal mode -->
                  <div class="sidebar-mini-hidden-b text-center">
                      <a class="img-link" href="#">
                          <img class="img-avatar" :src="require('@/assets/media/avatars/avatar15.jpg')" alt="" />
                      </a>
                      <ul class="list-inline mt-10">
                          <li class="list-inline-item">
                              <a class="link-effect text-dual-primary-dark font-size-sm font-w600 text-uppercase" href="#">J. Smith</a>
                          </li>
                          <li class="list-inline-item">
                              <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
                              <a class="link-effect text-dual-primary-dark" data-toggle="layout" data-action="sidebar_style_inverse_toggle" href="javascript:void(0)">
                                  <i class="si si-drop"></i>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a class="link-effect text-dual-primary-dark" href="#">
                                  <i class="si si-logout"></i>
                              </a>
                          </li>
                      </ul>
                  </div>
                  <!-- END Visible only in normal mode -->
              </div>
              <!-- END Side User -->

              <!-- Side Navigation -->
              <div class="content-side content-side-full">
                  <ul class="nav-main">
                    <!-- <i class="fas fa-tachometer-alt"></i> -->
                      <li>
                          <NuxtLink class="active" to="/admin/dashboard"><i class="si si-bar-chart"></i><span class="sidebar-mini-hide">Dashboard</span></NuxtLink>
                      </li>
                      <li>
                          <NuxtLink class="active" to="/admin/transactions"><i class="si si-list"></i><span class="sidebar-mini-hide">Transactions</span></NuxtLink>
                      </li>
                      <li>
                          <NuxtLink class="active" to="/"><i class="si si-logout"></i><span class="sidebar-mini-hide">Log out</span></NuxtLink>
                      </li>
                  </ul>
              </div>
              <!-- END Side Navigation -->
          </div>
      </nav>
      <header id="page-header">
          <div class="content-header">
              <div class="space-x-1">
                  <button type="button" class="btn btn-sm btn-alt-secondary" data-toggle="layout" data-action="sidebar_toggle">
                      <i class="fa fa-fw fa-bars"></i>
                  </button>
              </div>
              <div class="space-x-1">
                  <div class="dropdown d-inline-block">
                      <button type="button" class="btn btn-sm btn-alt-secondary" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="fa fa-user d-sm-none"></i>
                          <span class="d-none d-sm-inline-block fw-semibold">J. Smith</span>
                          <i class="fa fa-angle-down opacity-50 ms-1"></i>
                      </button>
                      <div class="dropdown-menu dropdown-menu-md dropdown-menu-end p-0" aria-labelledby="page-header-user-dropdown">
                          <div class="px-2 py-3 bg-body-light rounded-top">
                              <h5 class="h6 text-center mb-0">
                                  John Smith
                              </h5>
                          </div>
                          <div class="p-2">
                              <a class="dropdown-item d-flex align-items-center justify-content-between space-x-1" href="#">
                                  <span>Profile</span>
                                  <i class="fa fa-fw fa-user opacity-25"></i>
                              </a>
                              <a class="dropdown-item d-flex align-items-center justify-content-between" href="be_pages_generic_inbox.html">
                                  <span>Inbox</span>
                                  <i class="fa fa-fw fa-envelope-open opacity-25"></i>
                              </a>
                              <a class="dropdown-item d-flex align-items-center justify-content-between space-x-1" href="be_pages_generic_invoice.html">
                                  <span>Invoices</span>
                                  <i class="fa fa-fw fa-file opacity-25"></i>
                              </a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item d-flex align-items-center justify-content-between space-x-1" href="javascript:void(0)" data-toggle="layout" data-action="side_overlay_toggle">
                                  <span>Settings</span>
                                  <i class="fa fa-fw fa-wrench opacity-25"></i>
                              </a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item d-flex align-items-center justify-content-between space-x-1" href="op_auth_signin.html">
                                  <span>Sign Out</span>
                                  <i class="fa fa-fw fa-sign-out-alt opacity-25"></i>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div class="dropdown d-inline-block">
                      <button type="button" class="btn btn-sm btn-alt-secondary" id="page-header-notifications" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="fa fa-flag"></i>
                          <span class="text-primary">•</span>
                      </button>
                      <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications">
                          <div class="px-2 py-3 bg-body-light rounded-top">
                              <h5 class="h6 text-center mb-0">
                                  Notifications
                              </h5>
                          </div>
                          <ul class="nav-items my-2 fs-sm">
                              <li>
                                  <a class="text-dark d-flex py-2" href="javascript:void(0)">
                                      <div class="flex-shrink-0 me-2 ms-3">
                                          <i class="fa fa-fw fa-check text-success"></i>
                                      </div>
                                      <div class="flex-grow-1 pe-2">
                                          <p class="fw-medium mb-1">You’ve upgraded to a VIP account successfully!</p>
                                          <div class="text-muted">15 min ago</div>
                                      </div>
                                  </a>
                              </li>
                              <li>
                                  <a class="text-dark d-flex py-2" href="javascript:void(0)">
                                      <div class="flex-shrink-0 me-2 ms-3">
                                          <i class="fa fa-fw fa-exclamation-triangle text-warning"></i>
                                      </div>
                                      <div class="flex-grow-1 pe-2">
                                          <p class="fw-medium mb-1">Please check your payment info since we can’t validate them!</p>
                                          <div class="text-muted">50 min ago</div>
                                      </div>
                                  </a>
                              </li>
                              <li>
                                  <a class="text-dark d-flex py-2" href="javascript:void(0)">
                                      <div class="flex-shrink-0 me-2 ms-3">
                                          <i class="fa fa-fw fa-times text-danger"></i>
                                      </div>
                                      <div class="flex-grow-1 pe-2">
                                          <p class="fw-medium mb-1">Web server stopped responding and it was automatically restarted!</p>
                                          <div class="text-muted">4 hours ago</div>
                                      </div>
                                  </a>
                              </li>
                              <li>
                                  <a class="text-dark d-flex py-2" href="javascript:void(0)">
                                      <div class="flex-shrink-0 me-2 ms-3">
                                          <i class="fa fa-fw fa-exclamation-triangle text-warning"></i>
                                      </div>
                                      <div class="flex-grow-1 pe-2">
                                          <p class="fw-medium mb-1">Please consider upgrading your plan. You are running out of space.</p>
                                          <div class="text-muted">16 hours ago</div>
                                      </div>
                                  </a>
                              </li>
                              <li>
                                  <a class="text-dark d-flex py-2" href="javascript:void(0)">
                                      <div class="flex-shrink-0 me-2 ms-3">
                                          <i class="fa fa-fw fa-plus text-primary"></i>
                                      </div>
                                      <div class="flex-grow-1 pe-2">
                                          <p class="fw-medium mb-1">New purchases! +$250</p>
                                          <div class="text-muted">1 day ago</div>
                                      </div>
                                  </a>
                              </li>
                          </ul>
                          <div class="p-2 bg-body-light rounded-bottom">
                              <a class="dropdown-item text-center mb-0" href="javascript:void(0)"> <i class="fa fa-fw fa-flag opacity-50 me-1"></i> View All </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div id="page-header-loader" class="overlay-header bg-primary">
              <div class="content-header">
                  <div class="w-100 text-center">
                      <i class="far fa-sun fa-spin text-white"></i>
                  </div>
              </div>
          </div>
      </header>
      <main id="main-container">
          <NuxtChild />
      </main>
  </div>
</template>
