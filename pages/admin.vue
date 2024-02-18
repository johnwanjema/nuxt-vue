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
                          <a class="link-effect font-w700" href="index.html">
                              <i class="si si-fire text-primary"></i>
                              <span class="font-size-xl text-dual-primary-dark">code</span><span class="font-size-xl text-primary">base</span>
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
                      <img class="img-avatar img-avatar32" src="assets/media/avatars/avatar15.jpg" alt="" />
                  </div>
                  <!-- END Visible only in mini mode -->

                  <!-- Visible only in normal mode -->
                  <div class="sidebar-mini-hidden-b text-center">
                      <a class="img-link" href="be_pages_generic_profile.html">
                          <img class="img-avatar" src="assets/media/avatars/avatar15.jpg" alt="" />
                      </a>
                      <ul class="list-inline mt-10">
                          <li class="list-inline-item">
                              <a class="link-effect text-dual-primary-dark font-size-sm font-w600 text-uppercase" href="be_pages_generic_profile.html">J. Smith</a>
                          </li>
                          <li class="list-inline-item">
                              <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
                              <a class="link-effect text-dual-primary-dark" data-toggle="layout" data-action="sidebar_style_inverse_toggle" href="javascript:void(0)">
                                  <i class="si si-drop"></i>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a class="link-effect text-dual-primary-dark" href="op_auth_signin.html">
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
                      <li>
                          <NuxtLink class="active" to="/admin/dashboard"><i class="si si-cup"></i><span class="sidebar-mini-hide">Dashboard</span></NuxtLink>
                      </li>
                      <li>
                          <NuxtLink class="active" to="/admin/Transactions"><i class="si si-cup"></i><span class="sidebar-mini-hide">Transactions</span></NuxtLink>
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
                  <button type="button" class="btn btn-sm btn-alt-secondary" data-toggle="layout" data-action="header_search_on">
                      <i class="fa fa-fw fa-search"></i>
                  </button>
                  <div class="dropdown d-inline-block">
                      <button type="button" class="btn btn-sm btn-alt-secondary" id="page-header-themes-dropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
                          <i class="fa fa-fw fa-wrench"></i>
                      </button>
                      <div class="dropdown-menu dropdown-menu-lg p-0" aria-labelledby="page-header-themes-dropdown">
                          <div class="p-3 bg-body-light rounded-top">
                              <h5 class="h6 text-center mb-0">
                                  Color Themes
                              </h5>
                          </div>
                          <div class="p-3">
                              <div class="row g-0 text-center">
                                  <div class="col-2">
                                      <a class="text-default active" data-toggle="theme" data-theme="default" href="javascript:void(0)">
                                          <i class="fa fa-2x fa-circle"></i>
                                      </a>
                                  </div>
                                  <div class="col-2">
                                      <a class="text-elegance" data-toggle="theme" data-theme="assets/css/themes/elegance.min-5.7.css" href="javascript:void(0)">
                                          <i class="fa fa-2x fa-circle"></i>
                                      </a>
                                  </div>
                                  <div class="col-2">
                                      <a class="text-pulse" data-toggle="theme" data-theme="assets/css/themes/pulse.min-5.7.css" href="javascript:void(0)">
                                          <i class="fa fa-2x fa-circle"></i>
                                      </a>
                                  </div>
                                  <div class="col-2">
                                      <a class="text-flat" data-toggle="theme" data-theme="assets/css/themes/flat.min-5.7.css" href="javascript:void(0)">
                                          <i class="fa fa-2x fa-circle"></i>
                                      </a>
                                  </div>
                                  <div class="col-2">
                                      <a class="text-corporate" data-toggle="theme" data-theme="assets/css/themes/corporate.min-5.7.css" href="javascript:void(0)">
                                          <i class="fa fa-2x fa-circle"></i>
                                      </a>
                                  </div>
                                  <div class="col-2">
                                      <a class="text-earth" data-toggle="theme" data-theme="assets/css/themes/earth.min-5.7.css" href="javascript:void(0)">
                                          <i class="fa fa-2x fa-circle"></i>
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div class="p-3 bg-body-light rounded-bottom">
                              <div class="row g-sm text-center">
                                  <div class="col-6">
                                      <a class="dropdown-item fs-sm fw-medium mb-0" href="be_layout_api.html"> <i class="fa fa-flask opacity-50 me-1"></i> Layout API </a>
                                  </div>
                                  <div class="col-6">
                                      <a class="dropdown-item fs-sm fw-medium mb-0" href="be_ui_color_themes.html"> <i class="fa fa-paint-brush opacity-50 me-1"></i> Themes </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
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
                              <a class="dropdown-item d-flex align-items-center justify-content-between space-x-1" href="be_pages_generic_profile.html">
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
                  <button type="button" class="btn btn-sm btn-alt-secondary" data-toggle="layout" data-action="side_overlay_toggle">
                      <i class="fa fa-fw fa-stream"></i>
                  </button>
              </div>
          </div>
          <div id="page-header-search" class="overlay-header bg-body-extra-light">
              <div class="content-header">
                  <form class="w-100" action="be_pages_generic_search.html" method="POST">
                      <div class="input-group">
                          <button type="button" class="btn btn-secondary" data-toggle="layout" data-action="header_search_off">
                              <i class="fa fa-fw fa-times"></i>
                          </button>
                          <input type="text" class="form-control" placeholder="Search or hit ESC.." id="page-header-search-input" name="page-header-search-input" />
                          <button type="submit" class="btn btn-secondary">
                              <i class="fa fa-fw fa-search"></i>
                          </button>
                      </div>
                  </form>
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
      <footer id="page-footer">
          <div class="content py-3">
              <div class="row fs-sm">
                  <div class="col-sm-6 order-sm-2 py-1 text-center text-sm-end">Crafted with <i class="fa fa-heart text-danger"></i> by <a class="fw-semibold" href="https://pixelcave.com" target="_blank">pixelcave</a></div>
                  <div class="col-sm-6 order-sm-1 py-1 text-center text-sm-start">
                      <a class="fw-semibold" href="https://pixelcave.com/products/codebase" target="_blank">Codebase 5.7</a> © <span data-toggle="year-copy" class="js-year-copy-enabled">2024</span>
                  </div>
              </div>
          </div>
      </footer>
  </div>
</template>
