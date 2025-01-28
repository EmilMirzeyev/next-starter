import SignTab from '@/ui/components/SignTab'
import SignInContainer from '@/ui/containers/SignInContainer'

const SignIn = () => {
    return (
        <>
            <article className="flex flex-col gap-y-4">
                <h2 className="text-brand-700 text-48px700">
                    Xoş Gəlmisiniz!
                </h2>
                <p className="text-gray-800 text-16px400">
                    Signin -  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit
                </p>
            </article>
            <SignTab />
            <div className='w-full'>
                <SignInContainer />
            </div>
        </>
    )
}

export default SignIn