import Input from "@/components/Input"
import { useCallback, useState } from "react"

const Auth = () => {

    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [variant, setVariant] = useState<string>('login');

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
    }, [])

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="w-full h-full bg-black lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" className="h-12"></img>
                </nav>
                <div className="flex justify-center">
                    <div className="self-center w-full px-16 py-16 bg-black rounded-md bg-opacity-70 lg:w-2/5 lg:max-w-md">
                        <h2 className="mb-8 text-4xl font-semibold text-white">
                            {variant === 'login' ? 'Sign in' : 'Register'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant === 'register' && (
                                <Input label="Username" onChange={(e: any) => { setUsername(e.target.value) }} id="username" type="username" value={username} />
                            )}
                            <Input label="Email" onChange={(e: any) => { setEmail(e.target.value) }} id="email" type="email" value={email} />
                            <Input label="Password" onChange={(e: any) => { setPassword(e.target.value) }} id="password" type="password" value={password} />
                        </div>
                        <button className="w-full py-3 mt-10 text-white transition bg-red-600 rounded-md hover:bg-red-700">
                            {variant === 'login' ? 'Login' : 'Sign up'}
                        </button>
                        <p className="mt-12 text-neutral-500">
                            {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
                            <span onClick={toggleVariant} className="ml-1 text-white cursor-pointer hover:underline">
                                {variant === 'login' ? 'Create an account' : 'Sign in'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth