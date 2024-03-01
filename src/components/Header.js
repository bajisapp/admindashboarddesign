import React from 'react'

function Header() {
  return (

  <header class="navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow" style={{backgroundcolor: '#fff !important' }}>
  <a class="navbar-brand col-md-3 col-lg-2 me-0 px-4" href="#" style={{paddingbottom: '15px',  paddingtop: '15px',     fontsize: '16px',   paddingbottom: '12px',    paddingtop: '12px',   fontsize: '14px'}}><i class="bi bi-app-indicator"></i> DesignHub</a>
  <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
  <i class="bi bi-list"></i>
  </button>


</header>
    
  )
}

export default Header
