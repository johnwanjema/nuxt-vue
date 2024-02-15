<template>
  <div id="page-container" class="sidebar-o enable-page-overlay side-scroll page-header-modern main-content-boxed side-trans-enabled">
      <div id="page-overlay"></div>
      <aside id="side-overlay" data-simplebar="init" class="simplebar-scrollable-y">
          <div class="simplebar-wrapper" style="margin: 0px;">
              <div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div>
              <div class="simplebar-mask">
                  <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                      <div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style="height: 100%; overflow: hidden scroll;">
                          <div class="simplebar-content" style="padding: 0px;">
                              <div class="content-header">
                                  <a class="img-link me-2" href="be_pages_generic_profile.html">
                                      <img class="img-avatar img-avatar32" src="../assets/media/avatars/avatar15.jpg" alt="" />
                                  </a>
                                  <a class="link-fx text-body-color-dark fw-semibold fs-sm" href="be_pages_generic_profile.html">
                                      John Smith
                                  </a>
                                  <button type="button" class="btn btn-sm btn-alt-danger ms-auto" data-toggle="layout" data-action="side_overlay_close">
                                      <i class="fa fa-fw fa-times"></i>
                                  </button>
                              </div>
                              <div class="content-side">
                                  <div class="block pull-t pull-x">
                                      <div class="block-content block-content-full block-content-sm bg-body-light">
                                          <form action="be_pages_generic_search.html" method="POST">
                                              <div class="input-group">
                                                  <input type="text" class="form-control" id="side-overlay-search" name="side-overlay-search" placeholder="Search.." />
                                                  <button type="submit" class="btn btn-secondary">
                                                      <i class="fa fa-search"></i>
                                                  </button>
                                              </div>
                                          </form>
                                      </div>
                                  </div>
                                  <div class="block pull-x">
                                      <div class="block-content block-content-full block-content-sm bg-body-light">
                                          <div class="row text-center">
                                              <div class="col-4">
                                                  <div class="fs-sm fw-semibold text-uppercase text-muted">Clients</div>
                                                  <div class="fs-4">460</div>
                                              </div>
                                              <div class="col-4">
                                                  <div class="fs-sm fw-semibold text-uppercase text-muted">Sales</div>
                                                  <div class="fs-4">728</div>
                                              </div>
                                              <div class="col-4">
                                                  <div class="fs-sm fw-semibold text-uppercase text-muted">Earnings</div>
                                                  <div class="fs-4">$7,860</div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="block pull-x">
                                      <div class="block-header bg-body-light">
                                          <h3 class="block-title"><i class="fa fa-fw fa-users opacity-50 me-1"></i> Friends</h3>
                                          <div class="block-options">
                                              <button type="button" class="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                                  <i class="si si-refresh"></i>
                                              </button>
                                              <button type="button" class="btn-block-option" data-toggle="block-option" data-action="content_toggle"><i class="si si-arrow-up"></i></button>
                                          </div>
                                      </div>
                                      <div class="block-content">
                                          <ul class="nav-users">
                                              <li>
                                                  <a href="be_pages_generic_profile.html">
                                                      <img class="img-avatar" src="../assets/media/avatars/avatar5.jpg" alt="" />
                                                      <i class="fa fa-circle text-success"></i>
                                                      <div>Andrea Gardner</div>
                                                      <div class="fw-normal fs-xs text-muted">Photographer</div>
                                                  </a>
                                              </li>
                                              <li>
                                                  <a href="be_pages_generic_profile.html">
                                                      <img class="img-avatar" src="../assets/media/avatars/avatar14.jpg" alt="" />
                                                      <i class="fa fa-circle text-success"></i>
                                                      <div>Thomas Riley</div>
                                                      <div class="fw-normal fs-xs text-muted">Web Designer</div>
                                                  </a>
                                              </li>
                                              <li>
                                                  <a href="be_pages_generic_profile.html">
                                                      <img class="img-avatar" src="../assets/media/avatars/avatar3.jpg" alt="" />
                                                      <i class="fa fa-circle text-warning"></i>
                                                      <div>Danielle Jones</div>
                                                      <div class="fw-normal fs-xs text-muted">UI Designer</div>
                                                  </a>
                                              </li>
                                              <li>
                                                  <a href="be_pages_generic_profile.html">
                                                      <img class="img-avatar" src="../assets/media/avatars/avatar10.jpg" alt="" />
                                                      <div>Jack Greene</div>
                                                      <div class="fw-normal fs-xs text-muted">Copywriter</div>
                                                  </a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="block pull-x">
                                      <div class="block-header bg-body-light">
                                          <h3 class="block-title"><i class="far fa-fw fa-clock opacity-50 me-1"></i> Activity</h3>
                                          <div class="block-options">
                                              <button type="button" class="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                                  <i class="si si-refresh"></i>
                                              </button>
                                              <button type="button" class="btn-block-option" data-toggle="block-option" data-action="content_toggle"><i class="si si-arrow-up"></i></button>
                                          </div>
                                      </div>
                                      <div class="block-content">
                                          <ul class="list list-activity mb-0">
                                              <li>
                                                  <i class="si si-wallet text-success"></i>
                                                  <div class="fs-sm fw-semibold">+$29 New sale</div>
                                                  <div class="fs-sm">
                                                      <a href="javascript:void(0)">Admin Template</a>
                                                  </div>
                                                  <div class="fs-xs text-muted">5 min ago</div>
                                              </li>
                                              <li>
                                                  <i class="si si-close text-danger"></i>
                                                  <div class="fs-sm fw-semibold">Project removed</div>
                                                  <div class="fs-sm">
                                                      <a href="javascript:void(0)">Best Icon Set</a>
                                                  </div>
                                                  <div class="fs-xs text-muted">26 min ago</div>
                                              </li>
                                              <li>
                                                  <i class="si si-pencil text-info"></i>
                                                  <div class="fs-sm fw-semibold">You edited the file</div>
                                                  <div class="fs-sm">
                                                      <a href="javascript:void(0)"> <i class="fa fa-file-alt"></i> Docs.doc </a>
                                                  </div>
                                                  <div class="fs-xs text-muted">3 hours ago</div>
                                              </li>
                                              <li>
                                                  <i class="si si-plus text-success"></i>
                                                  <div class="fs-sm fw-semibold">New user</div>
                                                  <div class="fs-sm">
                                                      <a href="javascript:void(0)">StudioWeb - View Profile</a>
                                                  </div>
                                                  <div class="fs-xs text-muted">5 hours ago</div>
                                              </li>
                                              <li>
                                                  <i class="si si-wrench text-warning"></i>
                                                  <div class="fs-sm fw-semibold">App v5.5 is available</div>
                                                  <div class="fs-sm">
                                                      <a href="javascript:void(0)">Update now</a>
                                                  </div>
                                                  <div class="fs-xs text-muted">8 hours ago</div>
                                              </li>
                                              <li>
                                                  <i class="si si-user-follow text-pulse"></i>
                                                  <div class="fs-sm fw-semibold">+1 Friend Request</div>
                                                  <div class="fs-sm">
                                                      <a href="javascript:void(0)">Accept</a>
                                                  </div>
                                                  <div class="fs-xs text-muted">1 day ago</div>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="block pull-x">
                                      <div class="block-header bg-body-light">
                                          <h3 class="block-title"><i class="fa fa-fw fa-pencil-alt opacity-50 me-1"></i> Profile</h3>
                                          <div class="block-options">
                                              <button type="button" class="btn-block-option" data-toggle="block-option" data-action="content_toggle"><i class="si si-arrow-up"></i></button>
                                          </div>
                                      </div>
                                      <div class="block-content block-content-full">
                                          <form action="be_pages_dashboard.html" method="POST" onsubmit="return false;">
                                              <div class="mb-3">
                                                  <label class="form-label" for="side-overlay-profile-name">Name</label>
                                                  <div class="input-group">
                                                      <input type="text" class="form-control" id="side-overlay-profile-name" name="side-overlay-profile-name" placeholder="Your name.." value="John Smith" />
                                                      <span class="input-group-text">
                                                          <i class="fa fa-user"></i>
                                                      </span>
                                                  </div>
                                              </div>
                                              <div class="mb-3">
                                                  <label class="form-label" for="side-overlay-profile-email">Email</label>
                                                  <div class="input-group">
                                                      <input type="email" class="form-control" id="side-overlay-profile-email" name="side-overlay-profile-email" placeholder="Your email.." value="john.smith@example.com" />
                                                      <span class="input-group-text">
                                                          <i class="fa fa-envelope"></i>
                                                      </span>
                                                  </div>
                                              </div>
                                              <div class="mb-3">
                                                  <label class="form-label" for="side-overlay-profile-password">New Password</label>
                                                  <div class="input-group">
                                                      <input type="password" class="form-control" id="side-overlay-profile-password" name="side-overlay-profile-password" placeholder="New Password.." />
                                                      <span class="input-group-text">
                                                          <i class="fa fa-asterisk"></i>
                                                      </span>
                                                  </div>
                                              </div>
                                              <div class="mb-3">
                                                  <label class="form-label" for="side-overlay-profile-password-confirm">Confirm New Password</label>
                                                  <div class="input-group">
                                                      <input type="password" class="form-control" id="side-overlay-profile-password-confirm" name="side-overlay-profile-password-confirm" placeholder="Confirm New Password.." />
                                                      <span class="input-group-text">
                                                          <i class="fa fa-asterisk"></i>
                                                      </span>
                                                  </div>
                                              </div>
                                              <div class="row">
                                                  <div class="col-6">
                                                      <button type="submit" class="btn btn-alt-primary"><i class="fa fa-sync opacity-50 me-1"></i> Update</button>
                                                  </div>
                                              </div>
                                          </form>
                                      </div>
                                  </div>
                                  <div class="block pull-x">
                                      <div class="block-header bg-body-light">
                                          <h3 class="block-title"><i class="fa fa-fw fa-wrench opacity-50 me-1"></i> Settings</h3>
                                          <div class="block-options">
                                              <button type="button" class="btn-block-option" data-toggle="block-option" data-action="content_toggle"><i class="si si-arrow-up"></i></button>
                                          </div>
                                      </div>
                                      <div class="block-content block-content-full">
                                          <div class="mb-4">
                                              <div class="form-check">
                                                  <input class="form-check-input" type="checkbox" value="" id="side-overlay-settings-security-status" name="side-overlay-settings-security-status" checked="" />
                                                  <label class="form-check-label fw-medium" for="side-overlay-settings-security-status">Online Status</label>
                                                  <div class="fs-sm text-muted">Show your status to all</div>
                                              </div>
                                          </div>
                                          <div class="mb-4">
                                              <div class="form-check">
                                                  <input class="form-check-input" type="checkbox" value="" id="side-overlay-settings-security-verify" name="side-overlay-settings-security-verify" />
                                                  <label class="form-check-label fw-medium" for="side-overlay-settings-security-verify">Verify on Login</label>
                                                  <div class="fs-sm text-muted">Most secure option</div>
                                              </div>
                                          </div>
                                          <div class="mb-4">
                                              <div class="form-check">
                                                  <input class="form-check-input" type="checkbox" value="" id="side-overlay-settings-security-updates" name="side-overlay-settings-security-updates" checked="" />
                                                  <label class="form-check-label fw-medium" for="side-overlay-settings-security-updates">Auto Updates</label>
                                                  <div class="fs-sm text-muted">Keep app updated</div>
                                              </div>
                                          </div>
                                          <div class="mb-4">
                                              <div class="form-check">
                                                  <input class="form-check-input" type="checkbox" value="" id="side-overlay-settings-security-notifications" name="side-overlay-settings-security-notifications" checked="" />
                                                  <label class="form-check-label fw-medium" for="side-overlay-settings-security-notifications">Notifications</label>
                                                  <div class="fs-sm text-muted">For every transaction</div>
                                              </div>
                                          </div>
                                          <div class="mb-4">
                                              <div class="form-check">
                                                  <input class="form-check-input" type="checkbox" value="" id="side-overlay-settings-security-api" name="side-overlay-settings-security-api" checked="" />
                                                  <label class="form-check-label fw-medium" for="side-overlay-settings-security-api">API Access</label>
                                                  <div class="fs-sm text-muted">Enable access from third party apps</div>
                                              </div>
                                          </div>
                                          <div>
                                              <div class="form-check">
                                                  <input class="form-check-input" type="checkbox" value="" id="side-overlay-settings-security-2fa" name="side-overlay-settings-security-2fa" />
                                                  <label class="form-check-label fw-medium" for="side-overlay-settings-security-2fa">Two Factor Auth</label>
                                                  <div class="fs-sm text-muted">Using an authenticator</div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="simplebar-placeholder" style="width: 320px; height: 2248px;"></div>
          </div>
          <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;"><div class="simplebar-scrollbar" style="width: 0px; display: none;"></div></div>
          <div class="simplebar-track simplebar-vertical" style="visibility: visible;"><div class="simplebar-scrollbar" style="height: 53px; transform: translate3d(0px, 0px, 0px); display: block;"></div></div>
      </aside>
      <nav id="sidebar">
          <div class="sidebar-content">
              <div class="content-header justify-content-lg-center">
                  <div>
                      <span class="smini-visible fw-bold tracking-wide fs-lg"> c<span class="text-primary">b</span> </span>
                      <a class="link-fx fw-bold tracking-wide mx-auto" href="index.html">
                          <span class="smini-hidden">
                              <i class="fa fa-fire text-primary"></i>
                              <span class="fs-4 text-dual">code</span><span class="fs-4 text-primary">base</span>
                          </span>
                      </a>
                  </div>
                  <div>
                      <button type="button" class="btn btn-sm btn-alt-danger d-lg-none" data-toggle="layout" data-action="sidebar_close">
                          <i class="fa fa-fw fa-times"></i>
                      </button>
                  </div>
              </div>
              <div class="js-sidebar-scroll simplebar-scrollable-y" data-simplebar="init">
                  <div class="simplebar-wrapper" style="margin: 0px;">
                      <div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div>
                      <div class="simplebar-mask">
                          <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                              <div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style="height: 100%; overflow: hidden scroll;">
                                  <div class="simplebar-content" style="padding: 0px;">
                                      <div class="content-side content-side-user px-0 py-0">
                                          <div class="smini-visible-block animated fadeIn px-3">
                                              <img class="img-avatar img-avatar32" src="../assets/media/avatars/avatar15.jpg" alt="" />
                                          </div>
                                          <div class="smini-hidden text-center mx-auto">
                                              <a class="img-link" href="be_pages_generic_profile.html">
                                                  <img class="img-avatar" src="../assets/media/avatars/avatar15.jpg" alt="" />
                                              </a>
                                              <ul class="list-inline mt-3 mb-0">
                                                  <li class="list-inline-item">
                                                      <a class="link-fx text-dual fs-sm fw-semibold text-uppercase" href="be_pages_generic_profile.html">J. Smith</a>
                                                  </li>
                                                  <li class="list-inline-item">
                                                      <a class="link-fx text-dual" data-toggle="layout" data-action="dark_mode_toggle" href="javascript:void(0)">
                                                          <i class="fa fa-moon"></i>
                                                      </a>
                                                  </li>
                                                  <li class="list-inline-item">
                                                      <a class="link-fx text-dual" href="op_auth_signin.html">
                                                          <i class="fa fa-sign-out-alt"></i>
                                                      </a>
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div class="content-side content-side-full">
                                          <ul class="nav-main">
                                              <li class="nav-main-item">
                                                  <a class="nav-main-link active" href="be_pages_dashboard.html">
                                                      <i class="nav-main-link-icon fa fa-house-user"></i>
                                                      <span class="nav-main-link-name">Dashboard</span>
                                                  </a>
                                              </li>
                                              <li class="nav-main-item">
                                                  <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                                      <i class="nav-main-link-icon fa fa-award"></i>
                                                      <span class="nav-main-link-name">Page Kits</span>
                                                  </a>
                                                  <ul class="nav-main-submenu">
                                                      <li class="nav-main-item">
                                                          <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                                              <span class="nav-main-link-name">Dashboards</span>
                                                          </a>
                                                          <ul class="nav-main-submenu">
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="be_pages_dashboard2.html">
                                                                      <span class="nav-main-link-name">Dashboard 2</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="be_pages_dashboard3.html">
                                                                      <span class="nav-main-link-name">Dashboard 3</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="be_pages_dashboard4.html">
                                                                      <span class="nav-main-link-name">Dashboard 4</span>
                                                                  </a>
                                                              </li>
                                                          </ul>
                                                      </li>
                                                      <li class="nav-main-item">
                                                          <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                                              <span class="nav-main-link-name">Alt Dashboards</span>
                                                          </a>
                                                          <ul class="nav-main-submenu">
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="db_classic.html">
                                                                      <span class="nav-main-link-name">Classic</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="db_clean.html">
                                                                      <span class="nav-main-link-name">Clean</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="db_social.html">
                                                                      <span class="nav-main-link-name">Social</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="db_corporate.html">
                                                                      <span class="nav-main-link-name">Corporate</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="db_minimal.html">
                                                                      <span class="nav-main-link-name">Minimal</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="db_pop.html">
                                                                      <span class="nav-main-link-name">Pop</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="db_medical.html">
                                                                      <span class="nav-main-link-name">Medical</span>
                                                                  </a>
                                                              </li>
                                                          </ul>
                                                      </li>
                                                      <li class="nav-main-item">
                                                          <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                                              <span class="nav-main-link-name">Hosting</span>
                                                          </a>
                                                          <ul class="nav-main-submenu">
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="be_pages_hosting_dashboard.html">
                                                                      <span class="nav-main-link-name">Dashboard</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="be_pages_hosting_emails.html">
                                                                      <span class="nav-main-link-name">Emails</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="be_pages_hosting_account.html">
                                                                      <span class="nav-main-link-name">Account</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="be_pages_hosting_support.html">
                                                                      <span class="nav-main-link-name">Support</span>
                                                                  </a>
                                                              </li>
                                                          </ul>
                                                      </li>
                                                      <li class="nav-main-item">
                                                          <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                                              <span class="nav-main-link-name">Real Estate</span>
                                                          </a>
                                                          <ul class="nav-main-submenu">
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="be_pages_real_estate_dashboard.html">
                                                                      <span class="nav-main-link-name">Dashboard</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="be_pages_real_estate_listing.html">
                                                                      <span class="nav-main-link-name">Listing</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="be_pages_real_estate_listing_new.html">
                                                                      <span class="nav-main-link-name">Add New Listing</span>
                                                                  </a>
                                                              </li>
                                                          </ul>
                                                      </li>
                                                      <li class="nav-main-item">
                                                          <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                                              <span class="nav-main-link-name">Crypto</span>
                                                          </a>
                                                          <ul class="nav-main-submenu">
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="be_pages_crypto_dashboard.html">
                                                                      <span class="nav-main-link-name">Dashboard</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="be_pages_crypto_buy_sell.html">
                                                                      <span class="nav-main-link-name">Buy/Sell</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="be_pages_crypto_wallets.html">
                                                                      <span class="nav-main-link-name">Wallets</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="be_pages_crypto_settings.html">
                                                                      <span class="nav-main-link-name">Settings</span>
                                                                  </a>
                                                              </li>
                                                          </ul>
                                                      </li>
                                                      <li class="nav-main-item">
                                                          <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                                              <span class="nav-main-link-name">e-Commerce</span>
                                                          </a>
                                                          <ul class="nav-main-submenu">
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="be_pages_ecom_dashboard.html">
                                                                      <span class="nav-main-link-name">Dashboard</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="be_pages_ecom_orders.html">
                                                                      <span class="nav-main-link-name">Orders</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="be_pages_ecom_order.html">
                                                                      <span class="nav-main-link-name">Order</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="be_pages_ecom_products.html">
                                                                      <span class="nav-main-link-name">Products</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="be_pages_ecom_product_edit.html">
                                                                      <span class="nav-main-link-name">Product Edit</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="be_pages_ecom_customer.html">
                                                                      <span class="nav-main-link-name">Customer</span>
                                                                  </a>
                                                              </li>
                                                          </ul>
                                                      </li>
                                                      <li class="nav-main-item">
                                                          <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                                              <span class="nav-main-link-name">e-Learning</span>
                                                          </a>
                                                          <ul class="nav-main-submenu">
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="be_pages_elearning_courses.html">
                                                                      <span class="nav-main-link-name">Courses</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="be_pages_elearning_course.html">
                                                                      <span class="nav-main-link-name">Course</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="be_pages_elearning_lesson.html">
                                                                      <span class="nav-main-link-name">Lesson</span>
                                                                  </a>
                                                              </li>
                                                          </ul>
                                                      </li>
                                                      <li class="nav-main-item">
                                                          <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                                              <span class="nav-main-link-name">Forum</span>
                                                          </a>
                                                          <ul class="nav-main-submenu">
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="be_pages_forum_categories.html">
                                                                      <span class="nav-main-link-name">Categories</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="be_pages_forum_topics.html">
                                                                      <span class="nav-main-link-name">Topics</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="be_pages_forum_discussion.html">
                                                                      <span class="nav-main-link-name">Discussion</span>
                                                                  </a>
                                                              </li>
                                                          </ul>
                                                      </li>
                                                      <li class="nav-main-item">
                                                          <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                                              <span class="nav-main-link-name">Boxed Backend</span>
                                                          </a>
                                                          <ul class="nav-main-submenu">
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="bd_dashboard.html">
                                                                      <span class="nav-main-link-name">Dashboard</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="bd_search.html">
                                                                      <span class="nav-main-link-name">Search</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="bd_variations_hero_simple_1.html">
                                                                      <span class="nav-main-link-name">Hero Simple 1</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="bd_variations_hero_simple_2.html">
                                                                      <span class="nav-main-link-name">Hero Simple 2</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="bd_variations_hero_simple_3.html">
                                                                      <span class="nav-main-link-name">Hero Simple 3</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="bd_variations_hero_simple_4.html">
                                                                      <span class="nav-main-link-name">Hero Simple 4</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="bd_variations_hero_image_1.html">
                                                                      <span class="nav-main-link-name">Hero Image 1</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="bd_variations_hero_image_2.html">
                                                                      <span class="nav-main-link-name">Hero Image 2</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="bd_variations_hero_image_3.html">
                                                                      <span class="nav-main-link-name">Hero Image 3</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="bd_variations_hero_image_4.html">
                                                                      <span class="nav-main-link-name">Hero Image 4</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="bd_variations_hero_video_1.html">
                                                                      <span class="nav-main-link-name">Hero Video 1</span>
                                                                  </a>
                                                              </li>
                                                              <li class="nav-main-item">
                                                                  <a class="nav-main-link" href="bd_variations_hero_video_2.html">
                                                                      <span class="nav-main-link-name">Hero Video 2</span>
                                                                  </a>
                                                              </li>
                                                          </ul>
                                                      </li>
                                                  </ul>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="simplebar-placeholder" style="width: 250px; height: 912px;"></div>
                  </div>
                  <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;"><div class="simplebar-scrollbar" style="width: 0px; display: none;"></div></div>
                  <div class="simplebar-track simplebar-vertical" style="visibility: visible;"><div class="simplebar-scrollbar" style="height: 84px; transform: translate3d(0px, 0px, 0px); display: block;"></div></div>
              </div>
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
          <div class="content">
              <div class="row">
                  <div class="col-6 col-xl-3">
                      <a class="block block-rounded block-link-shadow text-end" href="javascript:void(0)">
                          <div class="block-content block-content-full d-sm-flex justify-content-between align-items-center">
                              <div class="d-none d-sm-block">
                                  <i class="fa fa-shopping-bag fa-2x opacity-25"></i>
                              </div>
                              <div>
                                  <div class="fs-3 fw-semibold">1500</div>
                                  <div class="fs-sm fw-semibold text-uppercase text-muted">Sales</div>
                              </div>
                          </div>
                      </a>
                  </div>
                  <div class="col-6 col-xl-3">
                      <a class="block block-rounded block-link-shadow text-end" href="javascript:void(0)">
                          <div class="block-content block-content-full d-sm-flex justify-content-between align-items-center">
                              <div class="d-none d-sm-block">
                                  <i class="fa fa-wallet fa-2x opacity-25"></i>
                              </div>
                              <div>
                                  <div class="fs-3 fw-semibold">$780</div>
                                  <div class="fs-sm fw-semibold text-uppercase text-muted">Earnings</div>
                              </div>
                          </div>
                      </a>
                  </div>
                  <div class="col-6 col-xl-3">
                      <a class="block block-rounded block-link-shadow text-end" href="javascript:void(0)">
                          <div class="block-content block-content-full d-sm-flex justify-content-between align-items-center">
                              <div class="d-none d-sm-block">
                                  <i class="fa fa-envelope-open fa-2x opacity-25"></i>
                              </div>
                              <div>
                                  <div class="fs-3 fw-semibold">15</div>
                                  <div class="fs-sm fw-semibold text-uppercase text-muted">Messages</div>
                              </div>
                          </div>
                      </a>
                  </div>
                  <div class="col-6 col-xl-3">
                      <a class="block block-rounded block-link-shadow text-end" href="javascript:void(0)">
                          <div class="block-content block-content-full d-sm-flex justify-content-between align-items-center">
                              <div class="d-none d-sm-block">
                                  <i class="fa fa-users fa-2x opacity-25"></i>
                              </div>
                              <div>
                                  <div class="fs-3 fw-semibold">4252</div>
                                  <div class="fs-sm fw-semibold text-uppercase text-muted">Online</div>
                              </div>
                          </div>
                      </a>
                  </div>
              </div>
              <div class="row">
                  <div class="col-md-6">
                      <div class="block block-rounded">
                          <div class="block-header">
                              <h3 class="block-title">Sales <small>This week</small></h3>
                              <div class="block-options">
                                  <button type="button" class="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                      <i class="si si-refresh"></i>
                                  </button>
                                  <button type="button" class="btn-block-option">
                                      <i class="si si-wrench"></i>
                                  </button>
                              </div>
                          </div>
                          <div class="block-content p-1 bg-body-light">
                              <canvas id="js-chartjs-dashboard-lines" style="height: 290px; display: block; box-sizing: border-box; width: 545px;" width="1090" height="580"></canvas>
                          </div>
                          <div class="block-content">
                              <div class="row items-push">
                                  <div class="col-6 col-sm-4 text-center text-sm-start">
                                      <div class="fs-sm fw-semibold text-uppercase text-muted">This Month</div>
                                      <div class="fs-4 fw-semibold">720</div>
                                      <div class="fw-semibold text-success"><i class="fa fa-caret-up"></i> +16%</div>
                                  </div>
                                  <div class="col-6 col-sm-4 text-center text-sm-start">
                                      <div class="fs-sm fw-semibold text-uppercase text-muted">This Week</div>
                                      <div class="fs-4 fw-semibold">160</div>
                                      <div class="fw-semibold text-danger"><i class="fa fa-caret-down"></i> -3%</div>
                                  </div>
                                  <div class="col-12 col-sm-4 text-center text-sm-start">
                                      <div class="fs-sm fw-semibold text-uppercase text-muted">Average</div>
                                      <div class="fs-4 fw-semibold">24.3</div>
                                      <div class="fw-semibold text-success"><i class="fa fa-caret-up"></i> +9%</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="block block-rounded">
                          <div class="block-header">
                              <h3 class="block-title">Earnings <small>This week</small></h3>
                              <div class="block-options">
                                  <button type="button" class="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                      <i class="si si-refresh"></i>
                                  </button>
                                  <button type="button" class="btn-block-option">
                                      <i class="si si-wrench"></i>
                                  </button>
                              </div>
                          </div>
                          <div class="block-content p-1 bg-body-light">
                              <canvas id="js-chartjs-dashboard-lines2" style="height: 290px; display: block; box-sizing: border-box; width: 545px;" width="1090" height="580"></canvas>
                          </div>
                          <div class="block-content">
                              <div class="row items-push">
                                  <div class="col-6 col-sm-4 text-center text-sm-start">
                                      <div class="fs-sm fw-semibold text-uppercase text-muted">This Month</div>
                                      <div class="fs-4 fw-semibold">$ 6,540</div>
                                      <div class="fw-semibold text-success"><i class="fa fa-caret-up"></i> +4%</div>
                                  </div>
                                  <div class="col-6 col-sm-4 text-center text-sm-start">
                                      <div class="fs-sm fw-semibold text-uppercase text-muted">This Week</div>
                                      <div class="fs-4 fw-semibold">$ 1,525</div>
                                      <div class="fw-semibold text-danger"><i class="fa fa-caret-down"></i> -7%</div>
                                  </div>
                                  <div class="col-12 col-sm-4 text-center text-sm-start">
                                      <div class="fs-sm fw-semibold text-uppercase text-muted">Balance</div>
                                      <div class="fs-4 fw-semibold">$ 9,352</div>
                                      <div class="fw-semibold text-success"><i class="fa fa-caret-up"></i> +35%</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
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
