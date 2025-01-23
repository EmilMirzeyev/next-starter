import CreateAnnouncementForm from '@/ui/features/CreateAnnouncementForm'
import Link from 'next/link'
import React from 'react'

const CreateAnnouncement = () => {
    return (
        <div className="container mt-8 flex gap-x-6">
            <div className='w-full'>
                <div className='p-3 pl-5 bg-brand-25 rounded-2xl '>
                    <h1 className='text-brand-600 text-30px700'>Yeni elan yerləştir</h1>
                </div>
                <CreateAnnouncementForm />
            </div>
            <div className='border border-gray-200 rounded-2xl p-6 min-w-[360px] h-full flex flex-col gap-y-5'>
                <h3 className='text-gray-900 text-24px700'>Qaydalarımız</h3>
                <div className="flex flex-col gap-y-4">
                    <p className="text-gray-800 text-16px400">Eyni elanı bir neçə dəfə təqdim etməyin.</p>
                    <p className="text-gray-800 text-16px400">Təsvir və ya şəkillərdə telefon, email və ya sayt ünvanı göstərməyin.</p>
                    <p className="text-gray-800 text-16px400">Ad yerində qiymət yazmayın - bunun üçün ayrıca yer var.</p>
                    <p className="text-gray-800 text-16px400">Qadağan olunmuş məhsulları satmayın.</p>
                </div>
                <Link href={''} className="text-brand-500 text-14px400 underline underline-offset-[3px]">
                    Bütün qaydaları oxu
                </Link>
            </div>
        </div>
    )
}

export default CreateAnnouncement
