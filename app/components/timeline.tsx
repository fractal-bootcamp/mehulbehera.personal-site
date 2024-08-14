type Event = {
    Headlines: string,
    Details: string,
    From: string,
    To?: string,
    Image?: string,
    Link?: string,
    TechStack?: string[]
}

const events: Event[] = [
    {
        Headlines: "Software Engineer Extern at Soleda",
        Details: "• Built the backend for a data labeling tool\n• Implemented RESTful API endpoints for efficient data management and retrieval\n• Designed and optimized database schema for storing labeled data and user information\n• Integrated authentication and authorization mechanisms to ensure secure access\n• Developed automated data validation and quality control processes\n• Collaborated with the frontend team to ensure seamless integration with the UI",
        From: "Jun 2023",
        To: "July 2023",
        TechStack: ["Python", "FastAPI", "RESTful API", "PostgreSQL"]
    },
    {
        Headlines: "Software Engineer Extern at Seam",
        Details: "• Built a React app allowing users to navigate Google Street View, guess the location, and receive feedback on their guess accuracy\n• Utilized Google API for Street View and 2D map functionality\n• Collaborated with the team to formulate design documents and outline requirements\n• Integrated code package into branch using Git",
        From: "Jun 2023",
        To: "Jun 2023",
        Link: "https://x.com/seam_xyz/status/1811497255548895379",
        TechStack: ["React", "Google API", "Git", "TypeScript"]
    },
    {
        Headlines: "Software Engineer Intern at Amazon",
        Details: "• Collaborated with AWS Application Manager team to formulate design document and outline requirements\n• Created a one-touch script in TypeScript using AWS CDK to automate AWS application creation\n• Wrote and executed unit and integration tests\n• Integrated code package into branch using Git",
        From: "Jun 2022",
        To: "Sep 2022",
        TechStack: ["TypeScript", "Bash", "AWS CDK", "Git"]
    },
    {
        Headlines: "Software Engineer Intern at Cognizant",
        Details: "• Upgraded DevOps platform using Agile methodology in a 4-person team\n• Conceptualized automation for code component management\n• Programmed DevOps application using C# and wrote unit tests\n• Created user stories in Azure DevOps and tracked tasks\n• Demonstrated solution to senior leadership",
        From: "May 2021",
        To: "Aug 2021",
        TechStack: ["C#", "Azure DevOps"]
    },
    {
        Headlines: "Software Engineer Intern at Dynos",
        Details: "• Assisted in developing business plan and go-to-market strategy for a restaurant marketing app\n• Translated business requirements into technical requirements\n• Tested and managed customer and owner-specific apps\n• Prepared and executed test cases, managed defects\n• Demoed the app to restaurant owners for partnerships",
        From: "Jun 2018",
        To: "Aug 2018",
        TechStack: []
    }
]

function Timeline() {
    return (
        <div className="mb-10">
            <ul className="timeline timeline-vertical">
                {events.map((event, index) => (
                    <li key={index}>
                        {index !== 0 && <hr />}
                        <div className={`timeline-${index % 2 === 0 ? 'start' : 'end'} timeline-box`}>
                            <h3 className="font-bold">{event.Headlines}</h3>
                            <p className="text-sm text-gray-500">{event.From} - {event.To || 'Present'}</p>
                            <div className="mt-2 text-sm">
                                {event.Details.split('\n').map((detail, i) => (
                                    <p key={i}>{detail}</p>
                                ))}
                            </div>
                            {event.TechStack && event.TechStack.length > 0 && (
                                <div className="mt-2">
                                    <h4 className="font-semibold">Tech Stack:</h4>
                                    <p className="text-sm">{event.TechStack.join(', ')}</p>
                                </div>
                            )}
                            {event.Link && (
                                <a href={event.Link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    Learn more
                                </a>
                            )}
                        </div>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        {index !== events.length - 1 && <hr />}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Timeline;