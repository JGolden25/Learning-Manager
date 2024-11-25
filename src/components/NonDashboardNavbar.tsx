import React from 'react'
import Link from 'next/link'

const NonDashboardNavbar = () => {
  return (
<nav className="nondashboard-navbar">
    <div className="nondashboard-navbar__container">
    <Link href="/" className="nondashboard-navbar__brand">
    JGOLDEN
    </Link>
    </div>
</nav>  )
}

export default NonDashboardNavbar