"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {

    const { data: session } = useSession();

    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        (async () => {
            const res = await getProviders();
            setProviders(res);
        })();
    }, []);

    return (
        <nav className='flex w-full mb-16 pt-3 px-8 gap-10'>
            <Link href='/' className='flex gap-2'>
                <Image
                    src='/assets/images/logo.svg'
                    alt='logo'
                    width={30}
                    height={30}
                    className='object-contain'
                />
                <p>Promptopia</p>
            </Link>

            {/* Desktop Navigation */}
            <div className='grow'>
                <div className='sm:flex hidden'>
                    {session?.user ? (
                        <>
                            <div className='grow'>
                                <Link href='/create-prompt' >
                                    Create Post
                                </Link>
                            </div>

                            <div className='flex gap-5'>
                                <Link href='/profile'>
                                    <Image
                                        src={session?.user.image}
                                        width={37}
                                        height={37}
                                        className='rounded-full'
                                        alt='profile'
                                    />
                                </Link>

                                <button type='button' onClick={signOut}>
                                    Sign Out
                                </button>
                            </div>

                        </>
                    ) : (
                        <>
                            {providers &&
                                Object.values(providers).map((provider) => (
                                    <div className='flex grow justify-end'>
                                        <button
                                            type='button'
                                            key={provider.name}
                                            onClick={() => {
                                                signIn(provider.id);
                                            }}
                                        >
                                            Sign in
                                        </button>
                                    </div>
                                ))}
                        </>
                    )}
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className='sm:hidden flex'>
                {session?.user ? (
                    <div className='flex'>
                        <Image
                            src={session?.user.image}
                            width={37}
                            height={37}
                            className='rounded-full'
                            alt='profile'
                            onClick={() => setToggleDropdown(!toggleDropdown)}
                        />

                        {toggleDropdown && (
                            <div className='flex flex-col'>
                                <Link
                                    href='/profile'
                                    className='dropdown_link'
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    My Profile
                                </Link>
                                <Link
                                    href='/create-prompt'
                                    className='dropdown_link'
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    Create Prompt
                                </Link>
                                <button
                                    type='button'
                                    onClick={() => {
                                        setToggleDropdown(false);
                                        signOut();
                                    }}
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        {providers &&
                            Object.values(providers).map((provider) => (
                                <button
                                    type='button'
                                    key={provider.name}
                                    onClick={() => {
                                        signIn(provider.id);
                                    }}
                                >
                                    Sign in
                                </button>
                            ))}
                    </>
                )}
            </div>
        </nav >
    );
};

export default Nav