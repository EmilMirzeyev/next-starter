"use client";
import DashboardFilter from '@/ui/features/DashboardFilter'
import CarList from './CarList'
import { useHeaderContent } from '@/core/hooks/userHeaderContent';

const DashboardContainer = () => {
    useHeaderContent({});
    return (
        <div>
            <DashboardFilter />
            <CarList />
        </div>
    )
}

export default DashboardContainer
