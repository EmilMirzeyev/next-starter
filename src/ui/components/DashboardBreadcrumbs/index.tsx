"use client"
import Breadcrumbs from '@/ui/shared/Breadcrumbs'
import { DashboardBreadcrumbsVM } from './dashboard_breadcrumbs.vm'

const DashboardBreadcumbs = () => {
    const { header } = DashboardBreadcrumbsVM()
    // const breadcrumbs = store.getState().header.breadcrumbs;
    return (
        <>
        <div className='container'>
            {header.breadcrumbs && <Breadcrumbs crumbs={header.breadcrumbs} />}
        </div>
            <div className="bg-gray-200 h-[1px] w-full"></div>
        </>
    )
}

export default DashboardBreadcumbs
