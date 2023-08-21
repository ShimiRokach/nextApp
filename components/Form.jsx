import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
    return (
        <section className='w-full mb-16 pt-3 px-8'>
            <h1 className='text-left'>
                <span>{type} Post</span>
            </h1>
            <p className='text-left'>
                {type} and share amazing prompts with the world, and let your
                imagination run wild with any AI-powered platform
            </p>

            <form
                onSubmit={handleSubmit}
                className='mt-10 flex flex-col gap-7'
            >
                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Your AI Prompt
                    </span>

                    <textarea
                        value={post.prompt}
                        onChange={(e) => setPost({ ...post, prompt: e.target.value })}
                        placeholder='Write your post here'
                        required
                    />
                </label>

                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Field of Prompt{" "}
                        <span className='font-normal'>
                            (#product, #webdevelopment, #idea, etc.)
                        </span>
                    </span>
                    <input
                        value={post.tag}
                        onChange={(e) => setPost({ ...post, tag: e.target.value })}
                        type='text'
                        placeholder='#Tag'
                        required
                    />
                </label>

                <div className='mx-3 mb-5 gap-4'>
                    <Link href='/' className='text-gray-500 text-sm'>
                        Cancel
                    </Link>

                    <button
                        type='submit'
                        disabled={submitting}
                        className='px-5 py-1.5'
                    >
                        {submitting ? `${type}ing...` : type}
                    </button>
                </div>

            </form>
        </section>
    );
};

export default Form;