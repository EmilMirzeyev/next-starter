import BalansContainer from '@/ui/containers/BalanceContainer'

const Balance = () => {
    return (
        <div className="w-full flex flex-col gap-y-8">
            <div className="border border-brand-25 bg-brand-25 rounded-2xl p-3 pl-5">
                <h1 className="text-brand-600 text-30px700">Balans</h1>
            </div>
            <BalansContainer />
        </div>
    )
}

export default Balance
