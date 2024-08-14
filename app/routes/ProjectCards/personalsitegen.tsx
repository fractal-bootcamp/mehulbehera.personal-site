function PersonalSiteGeneratorCard() {
    return (
        <a href="https://example-personalsitegenerator.onrender.com/" className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg="
                    alt="Personal Site Generator"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Personal Site Generator</h2>
                <p>
                    A tool that generates personalized websites using AI. This NextJS app is built with React,
                    TailwindCSS, Forge-ml, and S3. Upload a screenshot of your linkedin, twitter or resume and let me generate a personal site for you.
                </p>
            </div>
        </a>
    );
}

export default PersonalSiteGeneratorCard;