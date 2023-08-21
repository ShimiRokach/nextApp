import Feed from '@components/Feed';

const home = () => (
    <section className='flex flex-col w-full mb-16 pt-3 px-8'>
        <h1 className='text-center'>
            Discover & Share
            <br className='max-md:hidden' />
            <span className='text-center'> AI-Powered Prompts</span>
        </h1>


        <Feed />

    </section>
);

export default home