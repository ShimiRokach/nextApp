import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
    return (
        <section className='w-full mb-16 pt-3 px-8'>
            <h1 className='text-left'>
                <span>{name} Profile</span>
            </h1>
            <p className='desc text-left'>{desc}</p>

            <div className='mt-10'>
                {data.map((post) => (
                    <PromptCard
                        key={post._id}
                        post={post}
                        handleEdit={() => handleEdit && handleEdit(post)}
                        handleDelete={() => handleDelete && handleDelete(post)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Profile;